import db from '../../config/db'

export default async (req, res) => {


    const {city='Curitiba',state='PR',disease='sarampo'} = req.query

   
    let teste = await db.raw(`SELECT * FROM crawling.crawling_news c 
    WHERE cidades @> '[{"municipio":"${city}","uf":"${state}"}]'
    and :disease::text = ANY (c.doencas::text[])
    ORDER BY data DESC; 
`, { disease });



    res.status(200).json(teste.rows)
}