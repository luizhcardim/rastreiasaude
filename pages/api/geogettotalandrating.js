import db from '../../config/db'

export default async (req, res) => {


    const { state = 'BR', visualization = 'total', disease = 'any', date_start = '2008-01-01', date_end = '3000-01-01' } = req.query

    // console.log(req.query)

    let type_visualization = 'rating';
    if (visualization === 'total') {
        type_visualization = 'total'
    }

    let teste;

    if (visualization !== 'smoothed') {
        teste = await db.raw(`SELECT row_to_json(fc)
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
    }else{

        teste = await db.raw(`SELECT row_to_json(fc) FROM 
        ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features FROM 
            ( SELECT 'Feature' As type, 
               ST_AsGeoJSON(ST_Transform(geom, 4326),15,0)::json As geometry,
            row_to_json((id ,nm_mun,t.total, t.rating, COUNT(*) OVER (), ROW_NUMBER () OVER (ORDER BY rating) )) As properties FROM 
                    (SELECT 
    m1.id,
    m1.nm_mun,
    m1.geom,
    sum(n.total) / sum(m2.populacao)::numeric * 1000::numeric AS rating,
    sum(m2.populacao) AS populacao_vizinhos,
    sum(n.total) AS total,
    count(m2.nm_mun) AS total_vizinhos,
    array_agg(m2.nm_mun) AS array_agg
    FROM crawling.municipios m1,
    crawling.municipios m2
    LEFT JOIN 
        -- Juntando 
        (SELECT m.id,
        m.nm_mun,
        m.sigla_uf,
        m.geom,
        t.total,
        t.total::double precision / m.populacao::double precision * 1000::double precision AS rating
        FROM 
            -- Total de uma doença agrupado com estado e município --
            (SELECT jsonb_array_elements(crawling_news.cidades) ->> 'uf'::text AS uf,
            jsonb_array_elements(crawling_news.cidades) ->> 'municipio'::text AS municipio,
            count(*) AS total
               FROM crawling.crawling_news
              WHERE (:disease::text = ANY (crawling_news.doencas::text[]) OR :disease::text = 'any') AND
            crawling_news.data > :date_start AND crawling_news.data < :date_end 
              GROUP BY (jsonb_array_elements(crawling_news.cidades) ->> 'uf'::text), 		
              (jsonb_array_elements(crawling_news.cidades) ->> 'municipio'::text)
              ORDER BY (count(*))) t
              -- Juntando totais com tabela municipios ---
             JOIN crawling.municipios m ON m.nm_mun::text = t.municipio 
             AND m.sigla_uf::text = t.uf) n      
    ON m2.nm_mun::text = n.nm_mun::text
    WHERE (m1.sigla_uf::text = :state::text OR :state::text = 'BR') AND st_intersects(m1.geom, m2.geom)
    GROUP BY m1.id, m1.nm_mun, m1.geom
    ORDER BY (sum(n.total) / sum(m2.populacao)::numeric * 1000::numeric)) As t) 
              As f ) as fc;
    `, { disease, state, date_start, date_end });


    }


    res.status(200).json(teste?.rows)
}