import ImageCard from "../components/ImageCard";

export default function Pantry() {
  return (
    <div className="cardsGrid">
      <ImageCard
        imageUrl="/flour.jpg"
        cardTitle="Vital wheat gluten (VWG)"
        cardText="Vital wheat gluten is the gluten left over when the starch is removed from flour. It's used to make seitan which is a meat substitute and is high in protein."
        altText="flour in jar"
      />
      <ImageCard
        imageUrl="/yeast.jpg"
        cardTitle="Nutritional yeast"
        cardText="This is a yeast extract that can add a cheesy, nutty flavour to your food. It has many vitamins and minerals and you can also buy it fortified with vitamin B12."
        altText="spoon holding nutritional yeast"
      />
      <ImageCard
        imageUrl="/cashews.jpg"
        cardTitle="Nuts, seeds, and dried fruits"
        cardText="Nuts and seeds have healthy fats that your body needs. Dried fruits contain fiber and antioxidants and really help when you're craving something sweet!"
        altText="roasted cashews"
      />
      <ImageCard
        imageUrl="/tofu.jpg"
        cardTitle="Tofu"
        cardText="Tofu is full of protein and healthy fats. It adds extra texture and bite to your meals. You can fry, roast, or boil it with whatever seasoning. It is very versatile and easy to use."
        altText="plate of sliced tofu"
      />
      <ImageCard
        imageUrl="/pulses.jpg"
        cardTitle="Dried pulses (chickpeas, beans, peas, lentils)"
        cardText="Their taste and texture are far better than the canned versions. Soak them 12+ hours and they are ready to cook."
        expertTip="You can rehydrate a big batch and freeze them for instant use!"
        altText="hands holding beans"
      />
      <ImageCard
        imageUrl="/cans.jpg"
        cardTitle="Canned food"
        cardText="When we need to prepare meals quickly, canned foods come in handy. Stock up on the pulses, coconut cream, jackfruit, chopped tomatoes, and anything else that will quickly add richness to your meal."
        altText="birds eye view of cans"
      />
      <ImageCard
        imageUrl="/paste.jpg"
        cardTitle="Major flavours"
        cardText="Keep a supply of miso paste, sesame paste, gochujang, soybean paste, fried onions, peanut butter, sun dried tomatoes, mushroom stock, etc. Anything to add umami to your meals."
        altText="bowl of gochujang paste"
      />
      <ImageCard
        imageUrl="/mushrooms.jpg"
        cardTitle="Dried mushrooms"
        cardText="You can re-soak mushrooms such as shiitake, porcine, and wood ear in warm water in about half an hour. These will give your meals massive flavours and unbelievably meaty textures."
        altText="dried shiitake mushrooms"
      />
    </div>
  );
}
