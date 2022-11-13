import Image from 'next/image';

import styles from '../styles/Home.module.css';
import Accordian from '../components/Accordian';
import Card from '../components/ImageCard';
import GeneralCard from '../components/GeneralCard';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import SectionFour from '../components/SectionFour';

export default function Home() {
  return (
    <div>
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
        </div>
      </div>
    </div>
  );
}
