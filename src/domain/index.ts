import { NextApiRequest, NextApiResponse } from "next";
import BaseApiController from "./BaseApiController";

export const createHandler = (controller: BaseApiController) => {
  return async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
  ) {
    const { route } = req.query;

    const result = await controller.handleRoute({
      method: req.method || "GET",
      apiRoutes: [...route],
      body: req.body,
    });

    return res.status(result.status).json(result.data);
  };
};
