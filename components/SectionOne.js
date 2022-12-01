import ImageCard from "./ImageCard";
import GeneralCard from "./GeneralCard";
import styles from "../styles/SectionOne.module.css";

export default function SectionOne() {
  return (
    <div>
      <div className="cardsGrid">
        <ImageCard
          imageUrl="/fishingLines.jpg"
          cardText="Our waters are severely over-fished. Our planet's survival depends on healthy oceans and seas with a rich biodiversity."
          readMoreText="Read more over fishing facts"
          sourceUrl="https://petpedia.co/overfishing-statistics/#:~:text=Between%2063%20and%20273%20million,only%2060%25%20are%20fully%20fished."
          altText="fishing lines"
        />
        <ImageCard
          imageUrl="/cage.jpg"
          cardText="Animals that are mass farmed for food live in dirty, cramped, and abusive conditions. Some animals will never even see daylight."
          readMoreText="Read more about factory farming"
          sourceUrl="https://thehumaneleague.org/article/what-is-factory-farming"
          altText="prison or cage"
        />
        <ImageCard
          imageUrl="/belowOcean.jpg"
          cardText="Animal waste form factory farms is polluting our oceans and causing dead zones where nothing survives."
          readMoreText="Read more about the affects of mass farming"
          sourceUrl="https://www.fairr.org/article/marine-pollution-as-a-result-of-intensive-farming/"
          altText="under the ocean"
        />
        <ImageCard
          imageUrl={"/dryLand.jpg"}
          cardText="Only 4% of mammals are wild. 62% are livestock- and the rest are us. We are destroying wild habitats to make room for our livestock."
          readMoreText="Read more about mammal diversity decline"
          sourceUrl={"https://ourworldindata.org/mammals"}
          altText="dry land"
        />
        <ImageCard
          imageUrl="/deforestation.jpg"
          cardText="To feed these billions of farmed animals, we are destroying forests and other natural habitats to grow their food. We could use a fraction of that land to grow crops to feed absolutely everyone on this planet."
          readMoreText="Read more about animal agriculture"
          sourceUrl="https://www.adoptananimalkits.com/advocate/farm-animals/params/post/1280110/animal-agriculture-is-destroying-tropical-forests"
          altText="machine moving cut down trees"
        />
        <ImageCard
          imageUrl="/hospital.jpg"
          cardText="Animal products are high in saturated fats, hormones, and pathogenic bacteria. This increases the risk of heart disease, diabetes, obesity, disease passed from animals, and more."
          readMoreText="Read more about the affects of over eating animal products"
          sourceUrl="https://pubmed.ncbi.nlm.nih.gov/32889521/#:~:text=In%20the%20process%2C%20consumption%20of,%2C%20obesity%2C%20and%20other%20disorders."
          altText="hospital room with beds"
        />
        <GeneralCard bgColour="rgb(var(--orange))">
          <p className={styles.endNote}>
            There are many more reasons to follow the vegan lifestyle, these are
            just my main points of reflection. <br />
            <br /> Whatever your reasoning may be, reflect on them when you are
            struggling with cravings, societal pressures, and cultural
            pressures.
          </p>
        </GeneralCard>
      </div>
    </div>
  );
}
