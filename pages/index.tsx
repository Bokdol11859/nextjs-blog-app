import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import homeStyles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BokDol Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[Eric Park Introduction]</p>
        <p>(This is a website)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}></ul>
      </section>
    </div>
  );
};

export default Home;
