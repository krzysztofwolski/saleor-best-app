import { NextApiRequest, NextApiResponse } from "next"

import { corsPost } from "../../../utils/middleware"

const handler = async (request: NextApiRequest, res: NextApiResponse) => {
  await corsPost(request, res)
  res.end(JSON.stringify({ success: true }))
  console.log("product updated webhook")
  console.log(request)
}

export default handler
