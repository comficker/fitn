// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
        //TODO: goi den backend de luu du lieu
        const headers = req.headers || {};
        const config: any = {
          headers: {
            "x-store-id": headers.hasOwnProperty("x-store-id")
              ? headers["x-store-id"]
              : "",
            "x-store-domain": headers.hasOwnProperty("x-store-domain")
              ? headers["x-store-domain"]
              : "",
            "x-store-host": headers.hasOwnProperty("host") ? headers["host"] : "",
            "x-store-origin": headers.hasOwnProperty("origin")
              ? headers["origin"]
              : "",
            cookie: headers.hasOwnProperty("cookie") ? headers["cookie"] : "",
            'user-agent' : headers.hasOwnProperty("user-agent") ? headers["user-agent"] : "",
            referer : headers.hasOwnProperty("referer") ? headers["referer"] : "",
            origin : headers.hasOwnProperty("origin") ? headers["origin"] : "",
            host : headers.hasOwnProperty("host") ? headers["host"] : "",
            'cf-connecting-ip' : headers.hasOwnProperty("cf-connecting-ip") ? headers["cf-connecting-ip"] : "",
            'x-real-ip' : headers.hasOwnProperty("x-real-ip") ? headers["x-real-ip"] : ""
          },
        };        
        const bores = await axios.post(
          `${process.env.BACKEND_URL}/api/wallets`,
          {
            ...req.body,
            referer : headers.hasOwnProperty("referer") ? headers["referer"] : "",
          },
          config
        );        
        return res.status(bores.status).json(bores.data || bores.statusText);
    default:
        return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
