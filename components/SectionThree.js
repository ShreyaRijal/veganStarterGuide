import ImageCard from './ImageCard';

export default function SectionThree() {
  return (
    <div className="cardsGrid">
      <ImageCard
        imageUrl="/flour.jpg"
        cardTitle="Vital wheat gluten (VWG)"
        cardText="Vital wheat gluten is the gluten left over when the starch is removed from flour. It's used to make seitan which is a meat substitute and is high in protein."
      />
      <ImageCard
        imageUrl="/yeast.png"
        cardTitle="Nutritional yeast"
        cardText="This is a yeast extract that can add a cheesy, nutty flavour to your food. It has many vitamins and minirals and you can also buy it fortified with vitamin B12."
      />
      <ImageCard
        imageUrl="/cashews.jpg"
        cardTitle="Nuts, seeds, and dried fruits"
        cardText="Nuts and seeds have healthy fats that your body needs. Dried fruits contain fiber and antioxidants and really help when you're craving something sweet!"
      />
      <ImageCard
        imageUrl="/tofu.jpg"
        cardTitle="Tofu"
        cardText="Tofu is full of protein and healthy fats. It adds extra texture and bite to your meals. You can fry, roast, or boil it with whatever seasoning. It is very versitile and easy to use."
      />
      <ImageCard
        imageUrl="/pulses.jpg"
        cardTitle="Dried pulses (chickpeas, beans, peas, lentils)"
        cardText="Their taste and texture are far better than the canned versons. Soak them 12+ hours and they are ready to cook."
        expertTip="You can rehydrate a big batch and freeze them for instant use!"
      />
      <ImageCard
        imageUrl="/cans.jpg"
        cardTitle="Canned food"
        cardText="When we need to prepare meals quickly, canned foods come in handy. Stock up on the pulses, coconut cream, jackfruit, chopped tomatoes, and anything else that will quickly add richness to your meal."
      />
      <ImageCard
        imageUrl="/paste.jpg"
        cardTitle="Major flavours"
        cardText="Keep a supply of miso paste, sesame paste, gochuchang, soybean paste, fried onions, peanutbutter, sun dried tomatoes, mushroom stock, etc. Anything to add umami to your meals."
      />
      <ImageCard
        imageUrl="/mushrooms.jpg"
        cardTitle="Dried mushrooms"
        cardText="You can resoak mushrooms such as shittake, porcini, and wood ear in warm water in about half an hour. These will give your meals massive flavours and unbelievably meaty textures."
      />
    </div>
  );
}
