import type { NextPage } from "next";
import Head from "next/head";
import AboutUs from "../components/Aboutus";
import Masthead from "../components/masthead";
import Skills from "../components/Skills";
import TrustedBy from "../components/Trustedby";
import Works from "../components/Works";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Margelo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Masthead />
      <AboutUs />
      <Skills />
      <Works />
      <TrustedBy />
    </div>
  );
};

export default Home;
