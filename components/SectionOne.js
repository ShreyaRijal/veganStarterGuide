import Card from "./Card";
import GeneralCard from "./GeneralCard";
import styles from "../styles/SectionOne.module.css";

export default function SectionOne() {
  return (
    <div>
      <div className={styles.cardsGrid}>
        <Card
          imageUrl="/fishingLines.jpg"
          cardText="Our waters are severly overfished. Our planet's survival depends on healthy oceans and seas with a rich biodiversity."
          sourceUrl="https://petpedia.co/overfishing-statistics/#:~:text=Between%2063%20and%20273%20million,only%2060%25%20are%20fully%20fished."
        />
        <Card
          imageUrl="/cage.jpg"
          cardText="Animals that are mass farmed for food live in dirty, cramped, and abusive conditions. Some animals will never even see daylight."
          sourceUrl="https://thehumaneleague.org/article/what-is-factory-farming"
        />
        <Card
          imageUrl="/belowOcean.jpg"
          cardText="Animal waste form factory farms is polluting our oceans and causing dead zones where nothing survives."
          sourceUrl="https://www.fairr.org/article/marine-pollution-as-a-result-of-intensive-farming/"
        />
        <Card
          imageUrl={"/dryLand.jpg"}
          cardText="Only 4% of mammals are wild. 62% are livestock- and the rest are us. We are destroying wild habitats to make room for our livestock."
          sourceUrl={"https://ourworldindata.org/mammals"}
        />
        <Card
          imageUrl="/deforestation.jpg"
          cardText="To feed these billions of farmed animals, we are destroying forests and other natural habitats to grow their food. We could use a fraction of that land to grow crops to feed absolutely everyone on this planet."
          sourceUrl="https://www.adoptananimalkits.com/advocate/farm-animals/params/post/1280110/animal-agriculture-is-destroying-tropical-forests"
        />
        <Card
          imageUrl="/hospital.jpg"
          cardText="Animal products are high in saturated fats, hormones, and pathogenic bacteria. This increases the risk of heart disease, diabetes, obesity, disease passed from animals, and more."
          sourceUrl="https://pubmed.ncbi.nlm.nih.gov/32889521/#:~:text=In%20the%20process%2C%20consumption%20of,%2C%20obesity%2C%20and%20other%20disorders."
        />
      </div>
      <GeneralCard bgColour="var(--orange)" width="98%">
        <div className={styles.endNote}>
          There are many more reasons to follow the vegan lifestyle, these are
          just my main points of reflection. <br />
          <br /> Whatever your reasoning may be, reflect on them when you are
          stuggling with cravings, societal pressures, and cultural pressures.
        </div>
      </GeneralCard>
    </div>
  );
}
