import { MainLayout } from "@/components/common/layouts/main-layout";
import Meta from "@/components/meta";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Meta />

      <MainLayout>
        <h1>Hello world</h1>
      </MainLayout>
    </>
  );
};

export default Home;
