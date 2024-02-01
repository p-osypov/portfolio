import Head from 'next/head';
import { Component } from '@/modules/home-page/home-page.styles';
import StartScreen from '@/modules/home-page/start-screen';
import { useHomePageLogic } from '@/modules/home-page/hooks';
import ChatWindow from '@/modules/home-page/chat-window';
import Footer from '@/components/footer';

function Home() {
  const { systemIsReady, onClickPowerButton, bgSpaceSceneRef } =
    useHomePageLogic();
  return (
    <>
      <Head>
        <title>Pavlo Osypov, Senior Software Engineer</title>
        <meta
          name="description"
          content="Pavlo Osypov personal web page. Experiance portfolio from experianced engineer."
        />
      </Head>
      <Component.Main ref={bgSpaceSceneRef}>
        {systemIsReady && <StartScreen onClickButton={onClickPowerButton} />}
        {!systemIsReady && <ChatWindow />}
      </Component.Main>
      <Footer />
    </>
  );
}
export default Home;
