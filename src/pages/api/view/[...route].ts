// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { routeHandler } from "@/domain";

type Data = ReturnType<typeof routeHandler>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { route } = req.query;
  const [controller, ...rest] = route;

  const data = routeHandler({
    method: req.method || "GET",
    controller,
    path: rest,
    body: req.body,
  });

  res.status(200).json(data);
}
