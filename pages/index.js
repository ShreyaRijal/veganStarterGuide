import Image from "next/image";

import styles from "../styles/Home.module.css";
import Accordian from "../components/Accordian";
import Card from "../components/Card";

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
          <Accordian accordianHeader={"Remember why you are doing this"}>
            <div className={styles.cardsGrid}>
              <Card
                imageUrl={"/fishingLines.jpg"}
                cardText="Our waters are severly overfished. Our planet's survival depends on healthy oceans and seas with a rich biodiversity."
                sourceUrl={
                  "https://petpedia.co/overfishing-statistics/#:~:text=Between%2063%20and%20273%20million,only%2060%25%20are%20fully%20fished."
                }
              />
              <Card
                imageUrl={"/cage.jpg"}
                cardText="Animals that are mass farmed for food live in dirty, cramped, and abusive conditions. Some animals will never even see daylight."
                sourceUrl={
                  "https://thehumaneleague.org/article/what-is-factory-farming"
                }
              />
              <Card
                imageUrl={"/belowOcean.jpg"}
                cardText="Animal waste form factory farms is polluting our oceans and causing dead zones where nothing survives."
                sourceUrl={
                  "https://www.fairr.org/article/marine-pollution-as-a-result-of-intensive-farming/"
                }
              />
              <Card
                imageUrl={"/dryLand.jpg"}
                cardText="Only 4% of mammals are wild. 62% are livestock- and the rest are us. We are destroying wild habitats to make room for our livestock."
                sourceUrl={"https://ourworldindata.org/mammals"}
              />
              <Card
                imageUrl={"/deforestation.jpg"}
                cardText="To feed these billions of farmed animals, we are destroying forests and other natural habitats to grow their food. We could use a fraction of that land to grow crops to feed absolutely everyone on this planet."
                sourceUrl={
                  "https://www.adoptananimalkits.com/advocate/farm-animals/params/post/1280110/animal-agriculture-is-destroying-tropical-forests"
                }
              />
              <Card
                imageUrl={"/hospital.jpg"}
                cardText="Animal products are high in saturated fats, hormones, and pathogenic bacteria. This increases the risk of heart disease, diabetes, obesity, disease passed from animals, and more."
                sourceUrl={
                  "https://pubmed.ncbi.nlm.nih.gov/32889521/#:~:text=In%20the%20process%2C%20consumption%20of,%2C%20obesity%2C%20and%20other%20disorders."
                }
              />
            </div>
          </Accordian>
          <Accordian accordianHeader={"General tips"}>
            <div>123</div>
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
