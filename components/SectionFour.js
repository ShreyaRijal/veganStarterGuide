import { useState } from 'react';
import ImageCard from './ImageCard';
import Modal from './Modal';

const recipes = [
  {
    title: 'Cheesy Cashew Pasta (Serves 3)',
    image: '/cheesyPasta',
    ingredients: [
      '1 cup cashews',
      '1 Tbsp miso paste',
      '1 tsp mustard',
      '1 cup plant based milk (e.g. oat milk)',
      '10g Plant based butter',
      '2 shallots',
      '2 cloves garlic',
      'Salt to taste',
      '1/4 tsp black pepper',
      '1/2 tsp marjoram',
      '3-4 Tbsp pasta water',
      '2 cups pasta of your choice',
    ],
    instructions: [
      'Add the cashews to a bowl and cover with hot water. Cover the bowl and let it sit for 10-15 minutes.',
      'Bring a pot of water to boil and add a good pinch of salt to it. Add the pasta in and cook as per packet directions.',
      'In a large pan, heat your butter until all melted.',
      'Mince the garlic and finely chop the shallots and cook in the butter until slightly brown.',
      'Add the cashews, milk, mustard, and miso paste to a high speed blender. Blend until completely smooth. I blended on max speed for about 2 minutes, yours might vary.',
      "Add the sauce to the pan and cook on a very low heat. Don't let the sauce boil.",
      'Add the black pepper, marjoram, and salt (to taste) to the sauce.',
      'Add half a cup of water to the blender and run it again. Then add this water to the pan to aid in getting the mixture out and thinning the sauce.',
      'Add 3-4 table spoons of pasta water to the sauce and mix.',
      'Once the pasta is cooked, drain and add to the pan and stir well.',
      'Serve with a little bit of parsley or a drizzle of chilli oil. I prefer the latter.',
    ],
  },
  {
    title: 'Gochujang and Peanut Butter Stir-fry (Serves 4)',
    image: '/noodles',
    ingredients: [
      '4 Tbsp vegetable oil',
      '1 onion',
      '3 cloves garlic',
      'A knob of ginger or 1 Tbsp ginger',
      '1 bell pepper',
      '1 1/2 cup mushrooms',
      '1 cup cabbage',
      '1 carrot',
      '400g wheat noodles',
      'Pinch of salt',
      'Sesame seeds',
      'Spring onion',
      'SAUCE:',
      ' 2 Tbsp gochujang',
      '1 Tbsp unsalted peanut butter',
      '1/2 Tbsp sugar',
      '1 Tbsp dark soy sauce',
      '1 Tbsp white vinegar',
      ,
    ],
    instructions: [
      'Add all the sauce ingredients to a bowl and mix well with a 1/3 cup water.',
      'Thinly slice all the vegetables and set aside.',
      'Bring a pot of water to boil and cook the wheat noodles as per package directions.',
      'Heat up a large wok with the oil until oil is slightly smoking.',
      'Add in the onion, garlic, and ginger and fry until they soften and turn slightly brown.',
      'Add in all the vegetables with a pinch of salt and cook on a high heat.',
      'Toss occasionally until veggies soften and char slightly.',
      'Drain the noodles and wash with cold water.',
      'Add in the noodles and the sauce and mix well.',
      'Serve on its own or with spring onion and/or sesame seeds sprinkled on top.',
    ],
  },
  {
    title: 'Fresh Tomato Pasta (Serves 3)',
    image: '/tomatoPasta',
    ingredients: [
      '3 Tbsp olive oil',
      '5 medium sized tomatoes',
      '1 onion',
      '2 cloves garlic',
      '1/4 tsp dried rosemary',
      '1/2 tsp dried marjoram',
      '1/4 tsp dried thyme',
      '1/4 tsp cayenne pepper',
      '1/4 tsp dried basil',
      '1/4 tsp ground black pepper',
      '1 tsp salt',
      '1/2 Tbsp sugar',
      '3 1/2 cups pasta of your choice',
      '1 Tbsp tomato paste',
    ],
    instructions: [
      'Bring pot of water to boil and salt generously. Once the water is boiled, add the pasta in and cook as per package directions.',
      'Slice the onion and garlic.',
      'Roughly cube the tomatoes.',
      'Add oil to a large pan and once heated, add in the onion and garlic and cook until slightly brown.',
      'Add in the tomatoes and cook until slightly soft.',
      'Add in the salt, pepper, herbs and spices, and tomato paste and mix well.',
      'Let the tomatoes cook for about 7 minutes or until completely soft.',
      'Add the sugar in as mixture is cooking.',
      'Once mixture is soft, add 1/2 cup of water and let it come to a simmer.',
      'Depending on how runny your mixture already is and what consistency you want, you might want to add less or more water.',
      'Turn down the heat and blend using a hand blender. You can also blend using a regular blender if you do not have one.',
      'Once blended smooth, bring the sauce to a simmer and cook for 5 more minutes or until the desired consistency is reached.',
      'Add in your drained cooked pasta and mix well.',
      'Serve as is or garnished with a few basil leaves.',
    ],
  },
  {
    title: 'Chickpea Curry (Serves 4)',
    image: '/chickpeaCurry',
    ingredients: [
      '3 Tbsp vegetable oil',
      '1 red onion',
      '3 cloves garlic',
      '1 green finger chilli',
      'Knob of ginger or 1 Tbsp',
      '2 dried bay leaves',
      '2 cans chickpeas',
      '1 tsp turmeric',
      '1 Tbsp cumin',
      '1 Tbsp coriander powder',
      '1 tsp salt',
      '2 Tbsp tomato paste',
      'Coriander',
    ],
    instructions: [
      'Thinly slice the onion and mince the garlic, ginger, and chilli.',
      'Heat the oil in a wok or deep pan that has a lid.',
      'Fry the onion, garlic, ginger, chilli, and bay leaves until slightly browned.',
      'Add in all the spices, salt, and tomato paste and mix well.',
      'Drain the chickpeas and rinse them with cold water.',
      'Add the chickpeas to the wok and stir until all chickpeas coated with spices.',
      'Cook the dry mixture until chickpeas slightly toasted.',
      'Add in 1 1/2 cup of water and bring to a simmer.',
      'Cook for 10 minutes with the lid closed.',
      'Serve garnished with coriander over some rice',
    ],
  },
  {
    title: 'Bean and Pepper Fajitas (Serves 3-4)',
    image: '/fajitas',
    ingredients: [
      '1 Onion',
      '3-4 cloves garlic',
      '3 Tbsp vegetable oil',
      '2 bell peppers (red/yellow/orange)',
      '1 can kidney beans',
      '1 can chopped tomatoes',
      '1/2 cup frozen peas',
      '1 Tbsp paprika',
      '1/2 Tbsp cumin',
      '1/2 Tbsp coriander powder',
      '1/4 tsp black pepper',
      '1/2 tsp cayenne pepper',
      '1 Tbsp tomato paste',
      '1 vegetable stock cube',
      '1/2 tsp salt (adjust to your stock cube)',
      'Half a lime',
      'A bunch of coriander',
    ],
    instructions: [
      'Chop up the onion and peppers into small cubes and mince the garlic.',
      'In a large pan, heat the oil and fry these aromatics until slightly soft.',
      'Add in all the spices, salt, and tomato paste and mix well.',
      'Drain and rinse the kidney beans and add them to the pan.',
      'Add in the frozen peas.',
      'Add in the chopped tomatoes (clean out the can with a splash of water) and stir well.',
      'Mix your stock cube with a cup of hot water and then add this to your pan and bring to a gentle simmer.',
      'Cook uncovered for 10 minutes or until mixture is the consistency you want. Stir occasionally.',
      'Turn off the heat and add in a bunch of roughly chopped coriander (adjust to your taste) and squeeze in half a lime of juice and stir in.',
      'Serve with tortilla wraps.',
    ],
  },
];

export default function SectionFour() {
  const [openModal, setOpenModal] = useState(false);
  const [currentTitle, setCurrentTitle] = useState();
  const [currentImage, setCurrentImage] = useState();
  const [currentIngredients, setCurrentIngredients] = useState();
  const [currentInstructions, setCurrentInstructions] = useState();

  return (
    <div>
      <div className="cardsGrid">
        {recipes.map((recipe, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setOpenModal(true);
                setCurrentTitle(recipe.title);
                setCurrentImage(recipe.image + 'Full.jpg');
                setCurrentIngredients(recipe.ingredients);
                setCurrentInstructions(recipe.instructions);
              }}
            >
              <ImageCard
                imageUrl={recipe.image + '.jpg'}
                cardTitle={recipe.title}
                isClickable={true}
              />
            </div>
          );
        })}
      </div>
      <Modal
        showModal={openModal}
        setShowModal={setOpenModal}
        title={currentTitle}
        image={currentImage}
        ingredients={currentIngredients}
        instructions={currentInstructions}
      />
    </div>
  );
}
