import ImageCard from "../components/ImageCard";
import Accordion from "../components/Accordion";
import GeneralCard from "../components/GeneralCard";
import styles from "../styles/why-be-vegan.module.css";

export default function Motivation() {
  return (
    <div>
      <Accordion accordionHeader="Animal Rights">
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
            imageUrl="/calf.jpg"
            cardText="Cows that are used for milk are kept pregnant and fed high protein diets their whole lives. Every time they give birth, their calf is taken away which leaves the animals distraught."
            readMoreText="Read more about animals used for milk"
            sourceUrl="https://www.peta.org.uk/issues/animals-not-eat/dairy/?utm_source=PETA%20UK::Google&utm_medium=Ad&utm_campaign=1120::gen::PETA%20UK::Google::s-grant-awa-dsa::::searchad&gclid=EAIaIQobChMI7qWC45-4_AIVj9DtCh3UAAM7EAAYBCAAEgJOd_D_BwE"
            altText="a calf"
          />
          <ImageCard
            imageUrl="/chicken.jpg"
            cardText="Animals are bred selectively so that they grow in an unnatural but more profitable way. E.g. Selectively bred chickens gain weight faster to the point they can barely stand."
            readMoreText="Read more about selective breeding of farmed animals"
            sourceUrl="https://thehumaneleague.org.uk/article/are-farm-animals-bred-to-suffer"
            altText="a chicken with some chicks"
          />
          <ImageCard
            imageUrl="/eggs.jpg"
            cardText="Hens are kept in cramped and dirty cages where their sole purpose is to lay eggs. When new chicks hatch for egg production, all the male chicks are killed as they are of no value to the industry."
            readMoreText="Read more about the edd industry"
            sourceUrl="https://animalequality.org/blog/2022/05/11/9-images-that-portray-the-cruelty-of-the-egg-industry/#:~:text=Incubated%20eggs%20produce%20both%20male,up%20alive%20or%20suffocating%20them."
            altText="box of eggs"
          />
        </div>
      </Accordion>
      <Accordion accordionHeader="Environment">
        <div className="cardsGrid">
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
            imageUrl="/cowsEating.jpg"
            cardText="Eating animal products causes you to have a larger carbon footprint which is contributing to climate change. Rearing animals for food takes an enormous amount of crops, land, and energy."
            readMoreText="Read more about carbon emissions based on our diets"
            sourceUrl="https://www.un.org/en/climatechange/science/climate-issues/food?gclid=EAIaIQobChMInIu-17e4_AIVGODtCh3_WwVBEAAYBCAAEgLuNfD_BwE"
            altText="several cows eating out of a cattle feeder"
          />
          <ImageCard
            imageUrl="/water.jpg"
            cardText="Rearing animals for food requires huge amounts of fresh water, because they require large amounts of feed to grow and sustain them. Continuing like this can lead to global shortages of fresh water."
            readMoreText="Read more about the water footprint"
            sourceUrl="https://www.watercalculator.org/footprint/foods-big-water-footprint/"
            altText="water with bubbles"
          />
        </div>
      </Accordion>
      <Accordion accordionHeader="Personal Health">
        <div className="cardsGrid">
          <ImageCard
            imageUrl="/hospital.jpg"
            cardText="Animal products are high in saturated fats, hormones, and pathogenic bacteria. This increases the risk of heart disease, diabetes, obesity, disease passed from animals, and more."
            readMoreText="Read more about the affects of over eating animal products"
            sourceUrl="https://pubmed.ncbi.nlm.nih.gov/32889521/#:~:text=In%20the%20process%2C%20consumption%20of,%2C%20obesity%2C%20and%20other%20disorders."
            altText="hospital room with beds"
          />
          <ImageCard
            imageUrl="/needle.jpg"
            cardText="Consuming high levels of animal protein vs plant-based protein can cause obesity and insulin resistance which causes type 2 diabetes."
            readMoreText="Read more about animal protein consumption and T2 diabetes"
            sourceUrl="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5998345/"
            altText="a syringe"
          />
          <ImageCard
            imageUrl="/milk.jpg"
            cardText="Studies show that consuming milk and other dairy products can increase your chances of getting acne."
            readMoreText="Read more about the correlation between dairy intake and acne"
            sourceUrl="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6115795/"
            altText="glass bottles of milk"
          />
        </div>
      </Accordion>

      <GeneralCard bgColour="rgb(var(--orange))" margin={0}>
        <p className={styles.endNote}>
          There are many more reasons to follow the vegan lifestyle, these are
          just my main points of reflection. <br />
          <br /> Whatever your reasoning may be, reflect on them when you are
          struggling with cravings, societal pressures, and cultural pressures.
        </p>
      </GeneralCard>
    </div>
  );
}
