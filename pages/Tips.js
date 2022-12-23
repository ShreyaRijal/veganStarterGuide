import GeneralCard from "../components//GeneralCard";
import InformationCard from "../components/InformationCard";

export default function Tips() {
  return (
    <div>
      <InformationCard
        title="You may need to supplement vitamin B12"
        information="Without enough vitamin B12, you might experience fatigue, 
        feeling faint, and other symptoms. This vitamin is created by bacteria 
        which is generally found in soil and animals eat foods that have not 
        been sanitised in the same way as ours have and therefore accumulate it 
        in their bodies over their lifetime. However, our fruits and vegetables 
        are already very clean when we pick them up from the supermarket so we 
        might not get enough when cutting out animal products from our diet. 
        Actually, even people that eat animal products sometimes need to supplement 
        it."
        imageUrl="/pills.png"
        imageAltText="pills"
      />
      <InformationCard
        title="Keep an eye on symptoms"
        information="When you first become vegan, it's important to make a note of 
          any new unwanted symptoms you may have. It could be an indication that you might 
          be lacking something in your new diet. Visit your health provider to 
          understand what your body might need more or less of."
        imageUrl="/symptoms.png"
        imageAltText="symptoms on body"
      />
      <InformationCard
        title="Keep your diet varied"
        information="Make sure to not skip on nutrient rich foods such as nuts, 
          legumes (beans, peas, lentils), seeds, whole grains, and foods with healthy 
          fats such as avocado, where possible. Obviously, this should be followed by 
          everyone but it's especially important now that you can't get nutrients and 
          calories from animal based foods. This will also keep your dinners interesting!
          There are also great vegan alternatives out there for any cravings you might have
          such as plant based cheese. Eat these in moderation as you would regularly."
        imageUrl="/shopping.png"
        imageAltText="shopping cart"
      />
      <InformationCard
        title="Don't worry about protein"
        information="If you have a varied diet, it's very likely that you are getting
          enough protein. If your lifestyle requires more protein, you can get it
          from sources such as peanut butter, peas, and tofu, to name a few. You can
          also use protein supplements but check the label to see if it's a vegan source
          of protein."
        imageUrl="/muscles.png"
        imageAltText="muscular arm"
      />
      <InformationCard
        title="Take it easy on yourself"
        information="You may sometimes knowingly or unknowingly eat animal products.
          That might be because you didn't check the label before buying something,
          the restaurant you're at doesn't offer any meal that's fully vegan, or
          you just really craved something. A lot of us grew up with animal products
          that were vital to our upbringing or culture. Even by following the vegan
          lifestyle a little more, you are already having a profound imapact on the 
          environment and you might notice an improvement in your health. Keep going,
          you'll find your rhythm."
        imageUrl="/earth.png"
        imageAltText="earth"
      />
    </div>
  );
}
