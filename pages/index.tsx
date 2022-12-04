import { Footer, Header } from "@components/common";
import Tab1 from "@components/common/Tabs/Tab1/Tab1";
import TabBar from "@components/common/Tab/TabBar";
// import Tabs from "@components/common";
import { AppConstant } from "constant/AppConstant";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";


const Home: NextPage = () => {
  return (
    <Layout className="page-home">
      <Head>
        <title>{AppConstant.meta.title}</title>
        <meta name="description" content={AppConstant.meta.description} />
      </Head>
      {/* <Header />
      <Footer /> */}
      <TabBar/>
    </Layout>
  );
};

export default Home;
