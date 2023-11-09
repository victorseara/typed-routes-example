import { z } from "zod";

export const HELLO_ENDPOINT = "http://localhost:3000/api/hello";

export const GetHelloRequestSchema = z.object({
  name: z.string(),
  email: z.string(),
});

export const GetHelloResponseSchema = z.object({
  message: z.string(),
});

export type GetHelloRequest = z.infer<typeof GetHelloRequestSchema>;
export type GetHelloResponse = z.infer<typeof GetHelloResponseSchema>;
