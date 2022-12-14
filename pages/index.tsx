import type { NextPage } from "next";
import Head from "next/head";
import AboutUs from "../components/Aboutus";
import ContactUs from "../components/contactus";
import Footer from "../components/Footer";
import Masthead from "../components/Masthead";
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
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
