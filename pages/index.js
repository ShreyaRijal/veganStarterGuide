import Image from "next/image";

import styles from "../styles/Home.module.css";
import Accordian from "../components/Accordian";
import Card from "../components/Card";
import GeneralCard from "../components/GeneralCard";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";

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
          <Accordian accordianHeader={"General tips"}>
            <SectionTwo />
          </Accordian>
          <Accordian accordianHeader={"Must haves in your pantry"}>
            <div>123</div>
          </Accordian>
          <Accordian
            accordianHeader={
              "Easy vegan recipes to get you started straight away"
            }
          >
            <div>123</div>
          </Accordian>
        </div>
      </div>
    </div>
  );
}
