import db from '../../config/db'

export default async (req, res) => {


    const {state='BR', visualization='total' ,disease='any',date_start='2008-01-01',date_end='3000-01-01'} = req.query

    console.log(req.query)

    let type_visualization = 'rating';
    if (visualization === 'total') {
        type_visualization = 'total'
    }


    let teste = await db.raw(`SELECT row_to_json(fc)
                FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f))
                As features FROM 
                (SELECT 
                'Feature' As type, 
                ST_AsGeoJSON(ST_Transform(geom, 4326),15,0)::json As geometry,
                row_to_json((id ,nm_mun,t.total, t.rating, COUNT(*) OVER (), ROW_NUMBER () OVER (ORDER BY ${type_visualization}))) As properties
                FROM (SELECT m.id,
            m.nm_mun,
            m.sigla_uf,
            m.geom,
            t.total,
            t.total::double precision / m.populacao::double precision * 1000::double precision AS rating
           FROM (SELECT jsonb_array_elements(crawling_news.cidades) ->> 'uf'::text AS uf,
            jsonb_array_elements(crawling_news.cidades) ->> 'municipio'::text AS municipio,
            count(*) AS total
           FROM crawling.crawling_news
          WHERE (:disease::text = ANY (crawling_news.doencas::text[]) OR :disease::text = 'any') AND crawling_news.data > :date_start AND crawling_news.data < :date_end
          GROUP BY (jsonb_array_elements(crawling_news.cidades) ->> 'uf'::text), (jsonb_array_elements(crawling_news.cidades) ->> 'municipio'::text)
          ) as t JOIN crawling.municipios m ON m.nm_mun::text = t.municipio AND m.sigla_uf::text = t.uf AND ((m.sigla_uf = :state::text) OR (:state::text = 'BR'))
          ORDER BY ${type_visualization}) As t) As f ) as fc;`, { disease, state, date_start, date_end });



    res.status(200).json(teste.rows)
}