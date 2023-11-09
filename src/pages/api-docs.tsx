import ReactSwagger from "@/components/react-swagger";
import { getApiDocs } from "@/libs/swagger";
import { InferGetServerSidePropsType } from "next";

export default function IndexPage({
  spec,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log({ spec });
  return (
    <section className="container">
      <ReactSwagger spec={spec} />
    </section>
  );
}

export const getServerSideProps = async () => {
  const spec = await getApiDocs();
  return {
    props: {
      spec,
    },
  };
};
