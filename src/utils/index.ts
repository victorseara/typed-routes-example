import type { NextApiRequest, NextApiResponse } from "next";

enum HttpVerbs {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export type ApiMethod<T> = (
  req: NextApiRequest,
  res: NextApiResponse<T>
) => void | Promise<void>;

export type ApiHandler<C, R, U, D> = {
  POST?: ApiMethod<C>;
  GET?: ApiMethod<R>;
  PUT?: ApiMethod<U>;
  DELETE?: ApiMethod<D>;
};

export type ApiClientMethod<ApiClientMethodRequest, ApiClientResponse> = (
  args: ApiClientMethodRequest
) => Promise<ApiClientResponse>;

export function createApiHandler<C, R, U, D>(handler: ApiHandler<C, R, U, D>) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    const method = req.method as HttpVerbs;
    const handlerMethod = handler[method];

    if (handlerMethod) {
      return handlerMethod(req, res);
    } else {
      res.status(405).end();
    }
  };
}
