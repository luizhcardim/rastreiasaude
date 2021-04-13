import db from '../../config/db'

export default async (req, res) => {


    const {idmun,disease} = req.query

   
    let teste = await db.raw(`SELECT m.id,
    t.total,
    t.yyyy,
    t.mon
   FROM (SELECT jsonb_array_elements(crawling_news.cidades) ->> 'uf'::text AS uf,
    jsonb_array_elements(crawling_news.cidades) ->> 'municipio'::text AS municipio,
    count(*) AS total,
    to_char(data,'MM') as mon,
    extract(year from data) as yyyy
   FROM crawling.crawling_news
  WHERE :disease::text = ANY (crawling_news.doencas::text[])   
  GROUP BY (jsonb_array_elements(crawling_news.cidades) ->> 'uf'::text), (jsonb_array_elements(crawling_news.cidades) ->> 'municipio'::text), 4,5
  ) as t JOIN crawling.municipios m ON m.nm_mun::text = t.municipio AND m.sigla_uf::text = t.uf AND id = :idmun
  ORDER BY t.yyyy,t.mon
  LIMIT 12
  ;  
`, { idmun, disease });



    res.status(200).json(teste.rows)
}