import { helloClient } from "./hello/hello.router";

export const endpointsClient = {
  hello: helloClient,
} as const;
