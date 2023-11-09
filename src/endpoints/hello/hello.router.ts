// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ApiClientMethod, ApiMethod, createApiHandler } from "@/utils";
import axios from "axios";
import { ZodError } from "zod";
import {
  GetHelloRequest,
  GetHelloRequestSchema,
  GetHelloResponse,
  HELLO_ENDPOINT,
} from "./hello.schemas";

const getHelloServer: ApiMethod<GetHelloResponse> = (req, res) => {
  try {
    const { name, email } = GetHelloRequestSchema.parse(req.query);

    res.status(200).json({
      message: `Hello ${name} (${email})`,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ message: error.issues.toString() });
    }

    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getHelloClient: ApiClientMethod<
  GetHelloRequest,
  GetHelloResponse
> = async (args) => {
  const response = await axios.get<GetHelloResponse>(HELLO_ENDPOINT, {
    params: args,
  });
  return response.data;
};

const helloClient = { GET: getHelloClient } as const;

const helloServer = createApiHandler({ GET: getHelloServer });

export { helloClient, helloServer };
