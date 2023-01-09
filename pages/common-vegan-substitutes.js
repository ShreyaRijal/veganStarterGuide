import InformationCard from "../components/InformationCard";
import GeneralCard from "../components/GeneralCard";
import styles from "../styles/common-vegan-substitutes.module.css";

export default function Substitutes() {
  return (
    <div>
      <h2 className="title">
        Common substitutes to help your transition into veganism and curb those
        cravings
      </h2>
      <div className={styles.substitutesContainer}>
        <InformationCard
          title="Seitan"
          information="Seitan is a meat substitute created from the gluten washed out from flour. It can be cooked in various different ways to mimic the texture and taste of meat. Seitan has existed for a long time, it's believed to have been discovered by buddhist monks in the 6th century. There are many recipes available out there on preparing seitan."
          imageUrl="/seitan.png"
          imageAltText="seitan"
          imageSize={200}
        />
        <InformationCard
          title="Dried soya mince"
          information="Soya mince is product you can buy in most supermarkets. You can rehydrate it in some warm water and use it as regular mince. The texture has a firm bite to it like real mince and you can add any flavouring or seasoning to it. It works great in dumpling filling and in bolognese sauce."
          imageUrl="/soyaMince.png"
          imageAltText="dried soya mince"
          imageSize={200}
        />
        <InformationCard
          title="Soya yogurt"
          information="Soya yogurt can be found as a dairy free alternative in many supermarkets. The trick is to add lemon juice to the yogurt to mask the soya taste and also add some tartness."
          imageUrl="/yogurt.jpg"
          imageAltText="a jar of yogurt with a strawberry in it"
          imageSize={140}
        />
        <InformationCard
          title="Oyster mushrooms"
          information="Oyster mushrooms are a delicious, nutritious alternative to beef. You can season and seer it on a pan similar to a steak. It's a dense and juicy mushroom and when you bite into it, it tears like meat."
          imageUrl="/oysterMushrooms.jpg"
          imageAltText="oyster mushrooms"
          imageSize={140}
        />
        <InformationCard
          title="Plant based milk"
          information="Plant based milk such as soy, almond, and my favourite - oat - are a great dairy free alternative. Just like cow milk, they can be used in hot beverages, in cooking, with your cereal, or just on its own. Plant based milk are often fortified with nutrients such as vitamin B12 and calcium."
          imageUrl="/soyMilk.jpg"
          imageAltText="a glass of milk with soy beans around it"
          imageSize={200}
        />
        <InformationCard
          title="Jackfruit"
          information="Jackfruit is mainly found in south and southeast asia. However, you can buy it in some asian grocery stores but it's mainly found in the UK in cans. The meat of a jackfruit has 2 parts; a solid, dense part, and a stringy part that tears. When seasoned and cooked correctly, it's hard to tell that you're not eating meat. It can be used to mimic chicken or pulled pork."
          imageUrl="/jackfruit.jpg"
          imageAltText="hanging jackfruit"
          imageSize={200}
        />
        <InformationCard
          title="Plant based butter"
          information="Plant based butter has been available in supermarkets for many years. It usually tastes and behaves like regular butter but generally contains less saturated fats as it's made from plant fats."
          imageUrl="/butter.jpg"
          imageAltText="butter that has been used"
          imageSize={140}
        />
        <InformationCard
          title="Tempeh"
          information="Tempeh is an Indonesian food that is made from fermented soybeans. It can be fried with any sauces and flavouring so it provides that extra bite and protein in meals."
          imageUrl="/tempeh.jpg"
          imageAltText="sliced tempeh"
          imageSize={140}
        />
      </div>
      <GeneralCard bgColour="rgb(var(--orange))" margin={0}>
        <p className="endNote">
          There are also many plant based alternatives coming out in the
          supermarkets due to the increasing popularity of veganism. If these
          products are used in moderation they are a great alternative to animal
          products.
        </p>
      </GeneralCard>
    </div>
  );
}
