import { helloServer } from "./hello/hello.router";

export const endpoints = {
  hello: helloServer,
} as const;
