import Image from 'next/image';

import styles from '../styles/Home.module.css';
import Accordian from '../components/Accordian';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import SectionFour from '../components/SectionFour';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7977963803436655"
          crossorigin="anonymous"
        ></script>
        <title>Vegan Starter Guide</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Tips to start your vegan journey. Includes what to stock up in your pantry and easy vegan recipes"
        />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="keywords"
          content="vegan, vegan starter guide, vegan recipes, healthy recipes, plant based, healthy living, eat well, save our planet"
        />
        <meta name="author" content="Shreya Rijal"></meta>
      </Head>
      <div className={styles.header}>
        <Image
          src="/veganStarterGuideHeaderImage.png"
          alt="headerImage"
          width="1920px"
          height="250px"
          layout="intrinsic"
        />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.accordiansContainer}>
          <Accordian accordianHeader="Remember why you are doing this">
            <SectionOne />
          </Accordian>
          <Accordian accordianHeader={'General tips'}>
            <SectionTwo />
          </Accordian>
          <Accordian accordianHeader={'Must haves in your pantry'}>
            <SectionThree />
          </Accordian>
          <Accordian
            accordianHeader={
              'Easy vegan recipes to get you started straight away'
            }
          >
            <SectionFour />
          </Accordian>
          <Footer />
        </div>
      </div>
    </div>
  );
}
