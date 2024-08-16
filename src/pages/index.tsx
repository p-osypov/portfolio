import Head from 'next/head';
import Footer from '@/components/footer';
import HomePageBody from '@/modules/home-page';

function Home() {
  return (
    <>
      <Head>
        <title>Pavlo Osypov, Senior Software Engineer</title>
        <meta
          name="description"
          content="Pavlo Osypov personal web page. Experiance portfolio from experianced engineer."
        />
      </Head>
      <HomePageBody />
      <Footer />
    </>
  );
}
export default Home;
