import Head from 'next/head'
import { Component } from '@/modules/index/styles';
import axios from "axios";
import StartScreen from "@/modules/index/start-screen";

function Home() {
    const onClick = async () => {
        const response = await axios.post('http://localhost:3000/api/gpt', {});
        console.warn(response);
    }
  return (
    <>
      <Head>
        <title>Portfolio - Pavlo Osypov, Senior web developer</title>
        <meta name="description" content="Portfolio - Pavlo Osypov, Senior web developer" />
      </Head>
      <Component.Main>
        <StartScreen onClickButton={onClick} />
      </Component.Main>
    </>
  )
}
export default Home;
