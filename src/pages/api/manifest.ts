import { NextApiRequest, NextApiResponse } from "next"
import { version, name } from "../../../package.json"


const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  const manifest = {
    id: "saleor.app",
    version: version,
    name: name,
    permissions: ['MANAGE_ORDERS'],
    configurationUrl: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/configuration`,
    tokenTargetUrl: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/api/register`,
  }
  res.end(JSON.stringify(manifest))
}

export default handler
