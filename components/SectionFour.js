import { useState } from 'react';
import ImageCard from './ImageCard';
import Modal from './Modal';

const recipes = [
  {
    title: 'Cheesy Cashew Pasta (Serves 3)',
    image: '/cheesyPasta',
    ingredients: [
      '1 cup cashews',
      '1 tbsp miso paste',
      '1 tsp mustard',
      '1 cup plant based milk (e.g. oat milk)',
      '10g Plant based butter',
      '2 shallots',
      '2 cloves garlic',
      'Salt to taste',
      '1/4 tsp black pepper',
      '1/2 tsp marjoram',
      '3-4 tbsp pasta water',
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
    title: 'Cheesy Cashew Pasta (Serves 3)',
    image: '/cheesyPasta',
    ingredients: [
      '1 cup cashews',
      '1 tbsp miso paste',
      '1 tsp mustard',
      '1 cup plant based milk (e.g. oat milk)',
      '10g Plant based butter',
      '2 shallots',
      '2 cloves garlic',
      'Salt to taste',
      '1/4 tsp black pepper',
      '1/2 tsp marjoram',
      '3-4 tbsp pasta water',
      '2 cups pasta of your choice',
    ],
    instructions: [
      'Add the cashews to a bowl and cover with hot water. Cover the bowl and let it sit for 10-15 minutes.',
      'Bring a pot of water to boil and add a good pinch of salt to it. Add the pasta in and cook as per packet directions.',
      'In a large pan, heat your butter until all melted.',
      'Mince the garlic and finely chop the shallots and cook in the butter until slightly brown.',
      'Add the cashews, milk, mustard, and miso paste to a high speed blender. Blend until completely smooth. I blended on max speed for about 2 minutes, yours might vary.',
      "Add the sauce to the pan and cook on a very low heat. Don't let the sauce boil.",
      'Add the black pepper, marjoram, and salt to taste to the sauce.',
      'Add half a cup of water to your blender and run it again. Then add this water to your pan to aid in getting the mixture out and thinning the sauce out.',
      'Add 3-4 table spoons of pasta water to the sauce and mix.',
      'Once pasta is cooked, drain and add to the pan and stir well.',
      'Serve with a little bit of parsley or a drizzle of chilli oil. I prefer the latter.',
    ],
  },
  {
    title: 'Cheesy Cashew Pasta (Serves 3)',
    image: '/cheesyPasta',
    ingredients: [
      '1 cup cashews',
      '1 tbsp miso paste',
      '1 tsp mustard',
      '1 cup plant based milk (e.g. oat milk)',
      '10g Plant based butter',
      '2 shallots',
      '2 cloves garlic',
      'Salt to taste',
      '1/4 tsp black pepper',
      '1/2 tsp marjoram',
      '3-4 tbsp pasta water',
      '2 cups pasta of your choice',
    ],
    instructions: [
      'Add the cashews to a bowl and cover with hot water. Cover the bowl and let it sit for 10-15 minutes.',
      'Bring a pot of water to boil and add a good pinch of salt to it. Add the pasta in and cook as per packet directions.',
      'In a large pan, heat your butter until all melted.',
      'Mince the garlic and finely chop the shallots and cook in the butter until slightly brown.',
      'Add the cashews, milk, mustard, and miso paste to a high speed blender. Blend until completely smooth. I blended on max speed for about 2 minutes, yours might vary.',
      "Add the sauce to the pan and cook on a very low heat. Don't let the sauce boil.",
      'Add the black pepper, marjoram, and salt to taste to the sauce.',
      'Add half a cup of water to your blender and run it again. Then add this water to your pan to aid in getting the mixture out and thinning the sauce out.',
      'Add 3-4 table spoons of pasta water to the sauce and mix.',
      'Once pasta is cooked, drain and add to the pan and stir well.',
      'Serve with a little bit of parsley or a drizzle of chilli oil. I prefer the latter.',
    ],
  },
  {
    title: 'Cheesy Cashew Pasta TESTTT (Serves 3)',
    image: '/cheesyPasta',
    ingredients: [
      '1 cup cashews',
      '1 tbsp miso paste',
      '1 tsp mustard',
      '1 cup plant based milk (e.g. oat milk)',
      '10g Plant based butter',
      '2 shallots',
      '2 cloves garlic',
      'Salt to taste',
      '1/4 tsp black pepper',
      '1/2 tsp marjoram',
      '3-4 tbsp pasta water',
      '2 cups pasta of your choice',
    ],
    instructions: [
      'Add the cashews to a bowl and cover with hot water. Cover the bowl and let it sit for 10-15 minutes.',
      'Bring a pot of water to boil and add a good pinch of salt to it. Add the pasta in and cook as per packet directions.',
      'In a large pan, heat your butter until all melted.',
      'Mince the garlic and finely chop the shallots and cook in the butter until slightly brown.',
      'Add the cashews, milk, mustard, and miso paste to a high speed blender. Blend until completely smooth. I blended on max speed for about 2 minutes, yours might vary.',
      "Add the sauce to the pan and cook on a very low heat. Don't let the sauce boil.",
      'Add the black pepper, marjoram, and salt to taste to the sauce.',
      'Add half a cup of water to your blender and run it again. Then add this water to your pan to aid in getting the mixture out and thinning the sauce out.',
      'Add 3-4 table spoons of pasta water to the sauce and mix.',
      'Once pasta is cooked, drain and add to the pan and stir well.',
      'Serve with a little bit of parsley or a drizzle of chilli oil. I prefer the latter.',
    ],
  },
  {
    title: 'Cheesy Cashew Pasta (Serves 3)',
    image: '/cheesyPasta',
    ingredients: [
      '1 cup cashews',
      '1 tbsp miso paste',
      '1 tsp mustard',
      '1 cup plant based milk (e.g. oat milk)',
      '10g Plant based butter',
      '2 shallots',
      '2 cloves garlic',
      'Salt to taste',
      '1/4 tsp black pepper',
      '1/2 tsp marjoram',
      '3-4 tbsp pasta water',
      '2 cups pasta of your choice',
    ],
    instructions: [
      'Add the cashews to a bowl and cover with hot water. Cover the bowl and let it sit for 10-15 minutes.',
      'Bring a pot of water to boil and add a good pinch of salt to it. Add the pasta in and cook as per packet directions.',
      'In a large pan, heat your butter until all melted.',
      'Mince the garlic and finely chop the shallots and cook in the butter until slightly brown.',
      'Add the cashews, milk, mustard, and miso paste to a high speed blender. Blend until completely smooth. I blended on max speed for about 2 minutes, yours might vary.',
      "Add the sauce to the pan and cook on a very low heat. Don't let the sauce boil.",
      'Add the black pepper, marjoram, and salt to taste to the sauce.',
      'Add half a cup of water to your blender and run it again. Then add this water to your pan to aid in getting the mixture out and thinning the sauce out.',
      'Add 3-4 table spoons of pasta water to the sauce and mix.',
      'Once pasta is cooked, drain and add to the pan and stir well.',
      'Serve with a little bit of parsley or a drizzle of chilli oil. I prefer the latter.',
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
