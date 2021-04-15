import db from '../../config/db'

export default async (req, res) => {


    const {state='BR',date_start='2008-01-01',date_end='3000-01-01'} = req.query

    // console.log(req.query)




    let teste = await db.raw(`
	SELECT unnest(doencas) as name, count(*) total 
FROM crawling.crawling_news 
WHERE (cidades @> '[{"uf":"${state}"}]' or  :state = 'BR')
AND (data > :date_start and data < :date_end) 
GROUP BY name ORDER BY total DESC;

`, { state, date_start, date_end });



    res.status(200).json(teste.rows)
}