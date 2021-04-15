import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import base from '../../../lib/back/base_query'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const session = await getSession({req})

    if (session) {

        if (req.method == 'GET' && req.query.id) {
            res.status(200).json(await base.getModel('crawling.crawling_news', { 'url': req.query.url }))
        } else if (req.method == 'GET') {
            res.status(200).json(await base.getModels('crawling.crawling_news', req.query))
        } else if (req.method == 'POST') {
            // res.status(200).json(await base.addModel('crawling.crawling_news', req.body))
        } else if (req.method == 'PUT'){
            res.status(200).json(await base.updateModel('crawling.crawling_news',{ 'url': req.body.url },req.body))
        } else if (req.method == 'DELETE'){
            // console.log(req)
            // res.status(200).json(await base.deleteModel('crawling.crawling_news',{ 'id_cmei': req.body.id_cmei }))
        }

    } else {

        res.status(401).json({ "Acesso Negado": "Você não possui permissão para acessar esses dados." })

    }

}
