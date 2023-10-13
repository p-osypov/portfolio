import Head from 'next/head';
import { Component } from '@/modules/home-page/home-page.styles';
import StartScreen from '@/modules/home-page/start-screen';
import { useHomePageLogic } from '@/modules/home-page/hooks';
import ChatWindow from '@/modules/home-page/chat-window';
import Footer from '@/components/footer';

function Home() {
  const { systemIsReady, onClickPowerButton } = useHomePageLogic();
  return (
    <>
      <Head>
        <title>Portfolio - Pavlo Osypov, Senior web developer</title>
        <meta
          name="description"
          content="Portfolio - Pavlo Osypov, Senior web developer"
        />
      </Head>
      <Component.Main>
        {!systemIsReady && <StartScreen onClickButton={onClickPowerButton} />}
        {systemIsReady && <ChatWindow />}
      </Component.Main>
      <Footer />
    </>
  );
}
export default Home;
