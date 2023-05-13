import Head from "next/head";
import Card from "../../components/home/Card";
import Intro from "../../components/home/Intro";
import About from "../../components/home/About";
import Resume from "../../components/home/Resume";
import Services from "../../components/home/Services";
import MobileDetector from "../../components/dectector/MobileDectector";
import Skills from "../../components/home/Skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Harshit Sharma</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className="mob_main">
        <h1>Please use a PC!</h1>
      </main> */}
      <MobileDetector>
        <main className="main">
          <Card />
          <div className="app">
            <Intro />
            <About />
            <Resume />
            <Services />
            <Skills />
          </div>
        </main>
      </MobileDetector>
    </>
  );
}
