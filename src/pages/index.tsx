import { endpointsClient } from "@/endpoints/client";
import { InferGetServerSidePropsType } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  greeting,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <div>{greeting.message}</div>;
}

export const getServerSideProps = async () => {
  const res = await endpointsClient.hello.GET({
    name: "Hello",
    email: "World",
  });

  return {
    props: {
      greeting: res,
    },
  };
};
