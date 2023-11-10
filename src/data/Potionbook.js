// List of potions. Add alphabetically

const potionbook = [
  {
    name: 'Ageing Potion',
    effect: 'Temporarily ages the appearance of the drinker.',
    color: 'Green',
    difficulty: 5,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: [
      'Newt spleens',
      'Bananas',
      'One orange snake',
      'One green leaf'
    ],
    instructions: [
      'Add two dried newt spleens and stir counterclockwise for 5 minutes until dissolved.',
      'Slice one ripe banana into thin pieces and add to cauldron. Stir clockwise for seven minutes while mixture turns a light shade of green.',
      'Very carefully add one small, descaled orange snake to the potion. This must be timed precisely when the potion starts emitting a faint hissing sound.',
      'Add a freshly plucked, whole green leaf to potion, being careful not to damage the leaf.',
      'Let potion brew for one hour without stirring while the potion reaches its final deep green color.',
      'Let cool for 10 minutes before decanting into a glass vial.'
    ],
    imageSrc: '/imgs/potions/AgeingPotion.png',
    title: 'A finished ageing potion'
  },
  {
    name: 'Amortentia',
    effect:
      'The most powerful love potion in existence. Causes a powerful infatuation or obsession from the drinker.',
    color: 'Mother-of-pearl',
    difficulty: 7,
    restricted: true,
    type: 'potions',
    subject: 'Potions',
    ingredients: ['Pearl dust'],
    instructions: [
      'Gently sprinkle pearl dust into your cauldron filled with 3 pints of pure spring water at a simmer.',
      'Stir slowly with silver ladle as the potion begins to shimmer mother-of-pearl.',
      'Wait for the surface to ripple without any physical disturbance.',
      "Maintain low heat for 45 minutes; the potion's color will deepen into a rich, iridescent luster.",
      'Cool the potion for 12 minutes exactly.',
      'Carefully pour the completed potion into a crystal flask to preserve potency.'
    ],
    imageSrc: '/imgs/potions/Amortentia.png',
    title: 'A finished Amortentia potion in a clear, crystal flask'
  },
  {
    name: 'Antidote to Common Poisons',
    effect: 'Counteracts ordinary poisons, such as creature bites and stings.',
    color: 'Teal',
    difficulty: 4,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: [
      '1 Bezoar',
      '2 measures of Standard Ingredient',
      '1 pinch of powdered unicorn horn',
      '2 mistletoe berries'
    ],
    instructions: [
      'Add 1 Bezoar to mortar and crush into very fine powder.',
      'Add 4 measures of the crushed Bezoar to cauldron.',
      'Add 2 measures of Standard Ingredient to cauldron.',
      'Heat to medium temperature for 5 seconds.',
      'Wave your wand once over the cauldron and leave to brew.',
      'Return in 40 minutes for pewter, 34 for brass, 30 for copper.',
      'Add 1 pinch of powdered unicorn horn to cauldron.',
      'Stir 2 times clockwise.',
      'Add 2 mistletoe berries to cauldron.',
      'Stir 2 times anti-clockwise.',
      'Wave your wand to complete the potion.'
    ],
    imageSrc: '/imgs/potions/AntidoteToCommonPoisons.png',
    title: 'Complete common antidote'
  },
  {
    name: 'Antidote to Uncommon Poisons',
    effect: 'Cures the effects of most minor or uncommon poisons.',
    color: 'Green',
    difficulty: 5,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: [
      'Fire seeds',
      'Powdered graphorn horn',
      'Billywig stings',
      'Chizpurfle carapaces'
    ],
    instructions: [
      'Toss a handful of fire seeds into the cauldron; they should crackle upon contact with the heat.',
      'Grind the graphorn horn into a fine powder and add it to the cauldron; watch for the potion to emit a soft glow.',
      'Carefully add two billywig stings; the potion should now start to froth slightly.',
      'Crush the chizpurfle carapaces using a pestle and mortar; sprinkle the fragments into the mixture.',
      'Stir the potion thrice with a phoenix feather quill; the color should now be a consistent green.',
      'Let the potion settle for a moment until the surface becomes smooth again.',
      "Brew for exactly 53 minutes; the potion's efficacy is tied to precise timing.",
      'Once finished, the potion will have a deep green hue and emit a faint, soothing aroma.',
      "Decant the potion into bottles lined with rune-etched silver to maintain the antidote's potency."
    ],
    imageSrc: '/imgs/potions/AntidoteToUncommonPoisons.png',
    title: 'Completed uncommon antidote'
  },
  {
    name: 'Babbling Beverage',
    effect: 'Causes the drinker to speak nonsense.',
    color: 'Red or yellow',
    difficulty: 4,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: ['Valerian sprigs', 'Aconite', 'Dittany'],
    instructions: [
      'Add 3 Valerian sprigs to cauldron; watch for liquid to start bubbling slightly.',
      'Sprinkle pinch of ground aconite over the valerian, which should change potions color to light yellow.',
      'Tear the dittany leaves into small pieces and drop them into the mixture, causing the potion to turn vibrant red.',
      'Stir potion briskly with wooden spoon until potions turns orange.',
      'Recite Babbling Curse incantation to bind effect.',
      'Simmer for exactly 38 minutes; potion should emit series of soft, nonsensical murmurs.',
      'Once murmuring subsides, the potion is ready. Let the potion settle and bottle immediately.'
    ],
    associatedSpell: 'Babbling Curse',
    imageSrc: '/imgs/potions/BabblingBeverage.png',
    title: 'Freshly completed babbling beverage.'
  },
  {
    name: 'Beautification Potion',
    effect: `Enhances the attractiveness of the drinker's physical appearance.`,
    color: 'Shifting multi-color',
    difficulty: 3,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: [
      'Fairy wings',
      'Morning dew',
      'Rose petals',
      `Lady's Mantle`,
      'Unicorn hair',
      'Ginger roots',
      'Boomslang skin'
    ],
    instructions: [
      'Grind the wings of the three fairies and add to cauldron.',
      'Stir slowly, and then add morning dew.',
      'Stir vigorously then heat the mixture.',
      'Find a single fresh rose, pluck 7 petals and add to cauldron. Stir.',
      'Add a lock of unicorn hair and stir vigorously.',
      'Add powdered ginger root and then heat.',
      'Wave your wand over the cauldron to finish the potion.'
    ],
    imageSrc: '/imgs/potions/BeautificationPotion.png',
    title: 'Completed Beautification potion'
  },
  {
    name: 'Befuddlement Draught',
    effect: 'Causes the drinker to become belligerent and reckless.',
    color: 'Dark green or dark red',
    difficulty: 5,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: ['Scurvy grass', 'Lovage', 'Sneezewort', 'Frog brains'],
    instructions: [
      'Crush scurvy grass in mortar and pestle and add to cauldron.',
      'Repeat with Lovage.',
      'Add 3 splashes of vinegar and stir once counterclockwise for each 5 clockwise stirs for 90 seconds.',
      'Juice one orange and add the rinds. Stir calmly for 5 seconds and vigorously for 7 seconds for 90 more seconds.',
      'Add sneezewort and stir clockwise once.',
      'Wave your wand over the cauldron to complete the potion.'
    ],
    imageSrc: '/imgs/potions/BefuddlementDraught.png',
    title: 'Commercialized Beffudlement draught'
  },
  {
    name: 'Blood-Replenishing Potion',
    effect: 'Replenishes blood lost from injuries or other means.',
    color: 'Dark red',
    difficulty: 6,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: ['Powdered unicorn hair', 'Stewed mandrake'],
    instructions: [
      'Add two spoonfuls of powdered unicorn hair.',
      'Stir slowly until unicorn hair dissolves and potion begins to thicken.',
      'Chop stewed mandrake into fine pieces and add to potion.',
      'Continue to stir; potion will thicken more and gradually take on a dark red hue.',
      "Allow potion to brew for one hour, checking frequently to ensure it doesn't boil",
      'Once potion is deep red color and has thick consistency, remove from heat.',
      'Wave your wand above the potion in precise pattern to finalize rejuvinating properties.',
      'Let potion cool before carefully pouring it into sterilized bottles.'
    ],
    imageSrc: '/imgs/potions/ReplenishingPotion.png',
    title: 'Replenishing potion on a shelf at St. Mungos'
  },
  {
    name: 'Calming Draught',
    effect:
      'Calms the drinker after they have had a shock, trauma, or emotional outburst.',
    color: 'Blue or brown',
    difficulty: 5,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: ['Lavender', 'Crocodile heart', 'Peppermint'],
    instructions: [
      'Crush lavender in pestle and add to cauldron.',
      'Stir clockwise until potion turns light purple.',
      'Quarter crocodile heart and add to cauldron.',
      'Stir counterclockwise until light sparks emit from the center of the potion intermittently.',
      'Add peppermint oil to potion and wait',
      'Return to potion in 1 hour for pewter, 52 minutes for brass, 45 minutes for copper.',
      'Stir twice and wave your wand over the cauldron to complete the potion.'
    ],
    imageSrc: '/imgs/potions/CalmingDrought.png',
    title: 'Basic calming drought'
  },
  {
    name: 'Cure for Boils',
    effect: 'Removes boils from the drinker.',
    color: 'Blue',
    difficulty: 1,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: [
      'Dried nettles',
      '6 snake fangs',
      '4 horned slugs',
      '2 porcupine quills'
    ],
    instructions: [
      'Add 6 snake fangs to mortar and crush into fine powder.',
      'Add 4 measures of the crushed snake fangs to cauldron.',
      'Heat to 250 for 10 seconds.',
      'Wave your wand and leave to brew for 45 minutes for pewter, 40 for brass, 33 for copper.',
      'Add 4 horned slugs to the cauldron.',
      'Remove the mixture from heat and add porcupine quills.',
      'Stir 5 times clockwise until the potion emits pink smoke. Stop stirring.',
      'Wave your wand over the cauldron to complete the potion.'
    ],
    imageSrc: '/imgs/potions/CureForBoils.png',
    title: "Half used 'Cure for Boils' potion"
  },
  {
    name: 'Doxycide',
    effect:
      'Temporarily stuns doxies so that the pests could be removed from a dwelling.',
    color: 'Black',
    difficulty: 4,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: [
      'Bundimun ooze',
      'Streeler shells',
      'Dragon liver',
      'Hemlock essence',
      'Tormentil tincture',
      'Cowbane essence'
    ],
    instructions: [
      'Juice the Bundimun. Add the bundimun acid to the cauldron and stir quickly. The mixture will emit a harsh hissing sound.',
      'Grind the Streeler shells and add to cauldron.',
      'Stir the potion then heat.',
      'Add chopped dragon liver and stir vigorously.',
      'Add a dash of hemlock essence and stir again.',
      'Add a glug of cowbane essence and a dash of tormentil tincture.',
      'Stir slowly then heat the cauldron. The potion color should shift from a deep navy to full black.',
      'Wave your wand over the cauldron to complete the potion.'
    ],
    imageSrc: '/imgs/potions/Doxycide.png',
    title: 'Stored Doxycide potion'
  },
  {
    name: 'Dragon dung fertilizer',
    effect: 'Promotes the growth of plants.',
    color: 'Light green',
    difficulty: 6,
    restricted: false,
    type: 'potions',
    subject: 'Herbology',
    ingredients: [
      'Sloth brain',
      '7 pieces of dragon dung',
      'Stewed mandrake',
      '2 rat spleens',
      'Toasted dragonfly thoraxes',
      '3 Flying seahorses'
    ],
    instructions: [
      'Mix all ingredients together with standard potion water.',
      'Let brew for at least 4 hours.',
      "Remove from heat when potion has reached a 'sandy' consistency.",
      'Bag or bottle fertilizer for future use.'
    ],
    imageSrc: '/imgs/potions/DragonDungFertilizer.png',
    title: 'Commercial bag of Dragon Dung Fertilizer'
  },
  {
    name: 'Draught of Living Death',
    effect: 'Causes the drinker to fall into a deep, death-like slumber.',
    color: 'Pale lilac and clear',
    difficulty: 7,
    restricted: true,
    type: 'potions',
    subject: 'Potions',
    ingredients: [
      'Powdered Root of Asphodel',
      'Infusion of wormwood',
      'Valerian root',
      'Sopophorous bean',
      'Sloth brain',
      'Moondew',
      'Flower head'
    ],
    instructions: [
      'Add the infusion of Wordwood.',
      'Add the Powdered Root of Asphodel and stir twice clockwise.',
      'Add the sloth brain.',
      'Cut the sopophorous bean and add the juices to the cauldron.',
      'Stir seven times counterclockwise until the potion reaches a pale lilac/clear color.'
    ],
    imageSrc: '/imgs/potions/DraughtOfLivingDeath.png',
    title: 'Draught of Living Death potion'
  },
  {
    name: 'Draught of Peace',
    effect: 'Relieves anxiety and agitation in the drinker.',
    color: 'Turquoise',
    difficulty: 6,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: [
      'Powdered moonstone',
      'Syrup of Hellebore',
      'Stewed mandrake',
      'Powdered unicorn horn',
      'Powdered porcupine quills'
    ],
    instructions: [
      'Add powdered moonstone until potion turns green.',
      'Stir until potion turns blue. Add more moonstone until potion turns purple.',
      'Allow to simmer until the potion turns pink.',
      'Add syrup of Hellebore until the potion turns turquoise.',
      'Allow to simmer until the potion turns purple.',
      'Shake stewed mandrake vigorously until they are ready and then add until the potion turns red.',
      'Stir until the potion turns orange. Add more mandrake until the potion turns yellow, then stir until it turns green.',
      'Add more stewed mandrake until the potion turns turuoise again.',
      'Allow to simmer until the potion turns purple, about 20 minutes for pewter cauldrons.',
      'Add powdered unicorn horn until the potion turns pink, then stir until the potion turns red.',
      'Allow to simmer under moonlight until the potion turns orange.',
      'Add powdered porcupine quills until the potion turns white and then leave to simmer for 2 hours.',
      'Return to potion and wave your wand twice over the cauldron to complete.'
    ],
    imageSrc: '/imgs/potions/DraughtOfPeace.png',
    title: 'Completed Draught of Peace potion'
  },
  {
    name: 'Elixir to Induce Euphoria',
    effect:
      'Induces a sense of sudden, inexplicable happiness upon the drinker.',
    color: 'Sunshine-yellow',
    difficulty: 6,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: [
      'Shrivelfig',
      'Porcupine quills',
      'Peppermint sprigs',
      'Sopophorous beans',
      'Wormwood'
    ],
    instructions: [
      'Crush shrivelfig with knife and add all resultant juices and pieces to cauldron.',
      'Add porcupine quills.',
      'Stir 4 times counterclockwise, then add a sprig of peppermint to counteract any negative side-effects.',
      'Add sopophorous beans and wormwood.',
      'Stir six times anti-clockwise.',
      'Wave your wand over the cauldron until a rainbow is emitted, which signifies the potion is completed.'
    ],
    imageSrc: '/imgs/potions/ElixirToInduceEuphoria.png',
    title: 'Commercial Euphoria elixir with glow in background'
  },
  {
    name: 'Erumpent Potion',
    effect:
      'Explodes when touched by an outside source. Methods exist to brew this potion without it exploding.',
    color: 'Green or Orange',
    difficulty: 8,
    restricted: true,
    type: 'potions',
    subject: 'Potions',
    ingredients: ['Erumpent Horn', 'Erumpent Tail', 'Exploding Fluid'],
    instructions: [
      'Set cauldron to a rolling boil before adding any ingredients.',
      'Add 5 slices of Erumpent tail and stir until it dissolves. Solution should be mossy green in color.',
      'Crush Erumpent horn into a fine powder and then measure out 40mg exactly. Stir into potion until it turns bright yellow-green in color.',
      'Let solution boil for 15 minutes uninterrupted. The potion should turn a pastel yellow after this time has elapsed.',
      'Measure 5mg of Exploding fluid (horn fluid) and add this to the solution a drop at a time (should be 10 drops). With each drop, a cloud of black smoke should hover at the surface of the potion. Stir 10 times clockwise after each drop is added. The potion should turn steadily orange.',
      'Let potion boil for 30 more minutes. The final potion should be either green or orange in color and should appear slightly simmering, even when room temperature.',
      'BE CAREFUL WHEN BOTTLING! Using a Bubble Charm to encase both containers is safest way to transport potion into a glass vial.'
    ],
    imageSrc: '/imgs/potions/ErumpentPotion.png',
    title:
      'Completed Erumpent Potion, exhibiting characteristic room temperature simmering.'
  },
  {
    name: 'Felix Felicis',
    effect:
      'Makes the drinker extraordinarily lucky for a period of time, during which every action they take is successful.',
    color: 'Molten gold',
    difficulty: 8,
    restricted: true,
    type: 'potions',
    subject: 'Potions',
    ingredients: [
      'Ashwinder egg',
      'Squill bulb',
      'Murtlap tentacles',
      'Tincture of thyme',
      'Occamy eggshell',
      'Powdered common rue'
    ],
    instructions: [
      'Add ashwinder egg to cauldron, followed by horseradish. Heat.',
      'Juice a quill bulb, add to cauldron and stir vigorously for 7 minutes.',
      'Chop up anemone-like growth on the back of Murtlap, add to mixture and heat.',
      'Add a dash of tincture of thyme and stir slowly for 7 minutes.',
      'Leave solution to simmer softly (2-3 bubbles a minute) for at least 30 days. Solution should slowly turn a muted silver color.',
      'Upon returning to cauldron, add ground up Occamy eggshell and stir in slowly. Heat.',
      'Add a sprinkle of powdered common rue over the surface and stir vigorously while heating for 7 minutes.',
      'Let cauldron boil over high heat for at least 150 days. Potion should turn a muted gold color over this time.',
      'Once enough time has elapsed, the potion should exhibit the sloshing characteristics of the final potion. Wave your wand over the potion in a figure of eight and say "Felixempra!" to finish the potion.'
    ],
    imageSrc: '/imgs/potions/FelixFelicis.png',
    title: 'Completed Felix Felicis potion, bottled for individual use.'
  },
  {
    name: 'Fire-Protection Potion',
    effect:
      'Protects the drinker from fire and allows movement through flame unscathed.',
    color: 'Blue',
    difficulty: 2,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: ['Bursting mushrooms', 'Salamander blood', 'Wartcap powder'],
    instructions: [
      'Slice bursting mushrooms with knife.',
      'Add to cauldron and stir clockwise until the potion turns blue.',
      'Add salamander blood, stir anti-clockwise until potion turns green.',
      'Crush wartcap powder in pestle, add to cauldron and stir clockwise until the potion turns red.',
      'Wait 20 minutes (16 brass/12 copper). The potion should be blue. Wave your wand once over the solution to finish potion.'
    ],
    imageSrc: '/imgs/potions/FireProtectionPotion.png',
    title: 'Antique fire protection potion'
  },
  {
    name: 'Forgetfulness Potion',
    effect: 'Causes an unknown degree of memory loss in the drinker.',
    color: 'Orange',
    difficulty: 3,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: [
      'Lethe River Water',
      'Valerian sprigs',
      'Mistletoe berries',
      'Standard ingredient'
    ],
    instructions: [
      'Add 2 drops of Lethe River Water to your cauldron and gently heat for 20-30 seconds.',
      'Add 2 Valerian sprigs to cauldron and stir clockwise 3 times.',
      'Wave your wand and leave to brew for 45-60 minutes.',
      'Add 2 measures Standard ingredient and 4 mistletoe berries to mortar.',
      'Crush into a medium-fine powder using pestle and add to cauldron.',
      'Stir 5 times anti-clockwise and wave your wand to complete the potion.'
    ],
    imageSrc: '/imgs/potions/ForgetfulnessPotion.png',
    title: 'Unlabeled glass vial of Forgetfulness potion'
  },
  {
    name: 'Hair-Raising Potion',
    effect: "Causes the drinker's hair to stand on end.",
    color: 'Green',
    difficulty: 3,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: ['Rat tails', 'Porcupine quills', 'Billywig stings'],
    instructions: [
      'Add three rat tails and stir until they dissolve.',
      'Gradually add in porcupine quills, stirring continuously until potion starts to thicken.',
      'Once the potion turns a pale green, stir in Billywig stings one at a time.',
      'Allow potion to simmer for 30 minutes; it should deepen to a rich green hue.',
      'Stir potion briskly for 5 minutes.',
      'Remove from heat and let cool before bottling.'
    ],
    imageSrc: '/imgs/potions/HairRaisingPotion.png',
    title: 'Completed hair raising potion'
  },
  {
    name: 'Herbicide Potion',
    effect: 'A poisonous potion that kills or damages plants.',
    color: 'Green',
    difficulty: 4,
    restricted: false,
    type: 'potions',
    subject: 'Herbology',
    ingredients: [
      'Flobberworm mucus',
      'Horklump juice',
      'Lionfish spines',
      'Standard ingredient'
    ],
    instructions: [
      'Add 4 lionfish spines to mortar and crush to rough powder.',
      'Add 2 measures of Standard ingredient to mortar and crush to rough powder.',
      'Add 3 measures of this crushed mixture to cauldron.',
      'Wave your wand and let brew for 60 minutes (51 brass/ 45 copper).',
      'After allotted time has passed, add 2 measures of Horklump juice.',
      'Heat to medium temperature for 10 seconds.',
      'Add 2 blobs of Flobberworm mucus while it is heating.',
      'Stir 4 times, clockwise and wave your wand over the cauldron to complete the potion.'
    ],
    imageSrc: '/imgs/potions/HerbicidePotion.png',
    title: 'Basic herbicide'
  },
  {
    name: 'Hiccouphing Solution',
    effect: 'Causes hiccups in the drinker.',
    color: 'Yellow',
    difficulty: 5,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: [
      'Frog brain',
      'Goosegrass',
      'Eel eyes',
      'Lovage',
      'Chopped dandelion roots',
      'Standard ingredient'
    ],
    instructions: [
      'Add 1 frog brain, 3 measures of Standard ingredient and a pinch of goosegrass to cauldron.',
      'Heat to low temperature for 5 minutes.',
      'Add 4 dried eel eyes to mortar and crush to fine powder. Add 2 measures to cauldron.',
      'Wave your wand and leave solution to brew for 40 minutes.',
      'Add 3 pinches of lovage and stir 2 times, clockwise.',
      'Add 3 chopped dandelion roots and stir 6 times, counterclockwise.',
      'Wave your wand over cauldron to complete the potion.'
    ],
    imageSrc: '/imgs/potions/HiccoughingSolution.png',
    title: 'Basic hiccoughing solution'
  },
  {
    name: 'Invigoration Potion',
    effect: "Boosts the drinker's energy considerably.",
    color: 'Light blue',
    difficulty: 6,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: [
      'Alihotsy leaves',
      'Dried billywig stings',
      'Peppermint',
      'Stewed mandrake',
      'Infusion of wormwood',
      'Honeywater',
      'Vervain infusion',
      'Scurvy grass',
      'Lovage'
    ],
    instructions: [
      'Add a handful of Alihotsy leaves and stir until they start to dissolve, turning potion a pale green.',
      'Grind dried billywig stings to a fine powder and add to cauldron.',
      'Add 2 sprigs of peppermint.',
      'Stir in stewed mandrake, infusion of wormwood, and honeywater. Potion should turn a pale blue.',
      'Leave potion to simmer on low heat for 90 minutes.',
      'After simmering, pour in a small amount of vervain infusion and add finely chopped scurvy grass and lovage.',
      'Stir potion vigorously for several minutes, before leaving to brew on medium heat for 60 minutes.'
    ],
    imageSrc: '/imgs/potions/InvigoratingPotion.png',
    title: 'Beaker of complete Invigorating solution'
  },
  {
    name: 'General Love Potion',
    effect:
      'Causes the drinker to become infatuated or obsessed with the person who gave it to them.',
    color: 'Pink',
    difficulty: 7,
    restricted: true,
    type: 'potions',
    subject: 'Potions',
    ingredients: [
      'Pearl dust',
      'Ashwinder eggs',
      'Rose petals',
      'Peppermint',
      'Powdered moonstone'
    ],
    instructions: [
      'Sprinkle a small amount of pearl dust into the cauldron, it will give off a faint glow.',
      'Add two Ashwinder eggs. The potion should turn a light shade of pink.',
      'Gradually incorporate rose petals, stirring slowly as each petal is added.',
      'Add a few peppermint leaves for refreshing undertone.',
      'Stir in powdered moonstone in small increments, letting potion shimmer in between stirs.',
      'Allow potion to brew for 60 minutes, stirring occasionally to maintain consistency and color.',
      'Once potion reaches shimmering pink in hue, remove from heat and let cool before bottling.'
    ],
    imageSrc: '/imgs/potions/LovePotion.png',
    title: 'General love potion'
  },
  {
    name: 'Love Potion Antidote',
    effect: 'Cures the symptoms of any love potion in an affected individual.',
    color: 'Clear',
    difficulty: 7,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: ['Licorice roots', 'Castor oil', 'Extract of gurdyroot'],
    instructions: [
      'Add 4 bundles of licorice root, or until potion turns green.',
      'Stir until potion turns orange and then add castor oil.',
      'Stir vigorously until potion turns purple.',
      'Add extract of gurdyroot until the potion turns red.',
      'Add 1 licorice bundle and stir.',
      'Add extract of Gurdyroot until potion turns purple again and then leave to simmer until it turns back red.',
      'Add more gurdyroot extract until potion turns green and stir until it shifts to orange.',
      'Leave potion to simmer for 30 minutes or until it turns clear and colorless.',
      'Remove from heat and allow to cool before bottling.'
    ],
    imageSrc: '/imgs/potions/LovePotionAntidote.png',
    title: 'Basic love potion antidote in unlabeled vial'
  },
  {
    name: 'Memory Potion',
    effect: "Enhances the drinker's memory for a period of time.",
    color: 'Dark gold',
    difficulty: 6,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: [
      'Jobberknoll feathers',
      'Stewed mandrake',
      'Powdered sage',
      'Galanthus Nivalis',
      'Alihotsy',
      'Peppermint',
      'Powdered eel eyes'
    ],
    instructions: [
      'Add small handful of Jobberknoll feathers, which will slowly dissolve and cause the potion to sparkle slightly.',
      'Stir in 1 measure of stewed mandrake; the potion will turn a light brown.',
      'Gradually add powdered sage while stirring continuously; the potion will turn to a light gold color.',
      'Introduce a few undamaged Galanthus Nivalis petals, which are known for memory-enhancing properties.',
      'Sprinkle in added alihotsy and a few peppermint leaves.',
      'Stir in powdered eel eyes until potion reaches dark gold hue.',
      'Allow potion to simmer for 45 minutesm, during which time the potion should darken even more. Bottle with clear glass vials.'
    ],
    imageSrc: '/imgs/potions/MemoryPotion.png',
    title: 'Ornate bottled Memory potion'
  },
  {
    name: 'Pepperup Potion',
    effect:
      'Cures the common cold and raises the body temperature of the drinker. Side-effects include steam emitting from recipients ears for a few hours after dosage.',
    color: 'Red',
    difficulty: 5,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: ['Bicorn horn', 'Mandrake root', 'Jewelweed'],
    instructions: [
      'Grind bicorn horn to fine powder and add to cauldron.',
      'Chop mandrake root into small pieces and add to mixture. Potion will gradually deepen in color.',
      'Stir potion slowly until it becomes a consistent shade of red.',
      'Add a handful of jewelweed to cauldron, which will cause the potion to bubble and emit a slight steam.',
      'Continue to stir for 10 minutes, allowing the ingredients to fully infuse.',
      'Let potion simmer for 30 minutes; color should be bright, vibrant red.',
      'Once potion is ready, remove from heat and allow to cool. Bottle carefully!'
    ],
    imageSrc: '/imgs/potions/PepperupPotion.png',
    title: 'Completed pepperup potion'
  },
  {
    name: 'Polyjuice Potion',
    effect: 'Allows the drinker to assume the form of another human being.',
    color: 'Brown/Multi-colored',
    difficulty: 10,
    restricted: true,
    type: 'potions',
    subject: 'Potions',
    ingredients: [
      'Lacewing flies (stewed for 21 days)',
      'Leeches',
      'Powdered bicorn horn',
      'Knotgrass',
      'Fluxweed (picked at full moon)',
      'Shredded boomslang skin',
      'A bit of the person the drinker intends to turn into'
    ],
    instructions: [
      'Add 3 measures of fluxweed and 2 bundles of knotgrass to cauldron.',
      'Stir 4 times, clockwise.',
      'Wave your wand and then let the potion brew for 80 minutes (68 brass/ 60 copper).',
      'Add 4 leeches to cauldron. The potion should be a thick consistency and bubble slowly, like mud.',
      'Add 2 scoops of lacewing flies to mortar and crush to fine paste. Add 2 measures of the crushed lacewings to cauldron.',
      'Heat for 30 seconds on low heat.',
      'Wave your wand to complete stage 1 of the potion.',
      'Add 3 measures of boomslang skin.',
      'Add 1 measure of bicorn horn to mortar and crush to fine paste. Add one measure of this paste to cauldron.',
      'Heat for 20 seconds at a high temperature.',
      'Wave your wand and then let potion brew for 24 hours (20 hours, 24 minutes for brass/18 hours for copper).',
      'Add 1 additional scoop of lacewings to the cauldron. The potion should be bubbling quicker but still thick.',
      'Stir 3 times, counter-clockwise, which completes the potion.',
      'Split potion into multiple does, if desired. Then add bits of the person the drinker intends to turn into.',
      'The potion should change in color to a reflection of the impersonated individuals character. Taste will vary.'
    ],
    imageSrc: '/imgs/potions/PolyjuicePotion.png',
    title: 'Polyjuice potion, one ingredient away from ready to consume'
  },
  {
    name: 'Shrinking Solution',
    effect: 'Causes the drinker to skrink to a smaller form.',
    color: 'Acid green',
    difficulty: 6,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: [
      'Minced daisy roots',
      'Peeled shrivelfig',
      'Sliced caterpillars',
      '1 rat spleen',
      'Leech juice',
      'Cowbane',
      'Wormwood'
    ],
    instructions: [
      'Juice two shrivelfigs and add juices to cauldron.',
      'Stir slowly, and gently heat the potion.',
      'Finely chop four daisy roots and add to cauldron.',
      'Add fiove hairy caterpillars.',
      'Add well-shaken wormwood, and stir vigorously',
      'Juice four leeches and add to cauldron, stir slowly after and with caution.',
      'Shake rat spleen and add to cauldron.',
      'Add a splash of cowbane and stir slowly.',
      'Heat on high temperature.',
      'Wave your wand over potion and cast the Shrinking charm to finish.'
    ],
    imageSrc: '/imgs/potions/ShrinkingSolution.png',
    title: 'basic shrinking solution'
  },
  {
    name: 'Skele-Gro',
    effect: 'Restores and causes growth to bones in the drinker.',
    color: 'Yellow',
    difficulty: 7,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: [
      'Chinese chomping cabbage',
      'Puffer-fish',
      'Scarab beetles',
      'Fanged Geranium',
      'Arm bone from magical creature',
      'Red spider'
    ],
    instructions: [
      'Finely chop 1 chinese chomping cabbage and add it to cauldron.',
      'Carefully extract essence from 3 pufferfish and add it to mixture.',
      'Crush 5 scarab beetles into a fine powder and sprinkle it into the cauldron.',
      'Gently infuse potion with the extract of Fanged Geranium for regenerative properties.',
      'Take a small arm bone from a magical creature, grind it into a fine dust, and add it to potion.',
      'Carefully place a whole red spider into the potion and stir until it dissolves, giving potion the distinctive yellow color.',
      'Stir potion clockwise for 15 minutes then let simmer for an hour.',
      'Finish potion by casting a mild strengthening charm over the cauldron.',
      'Let potion cool before decanting it into vials.',
      'Potion will cause extreme discomfort as bones regrow. Can take up to 24 hours.'
    ],
    imageSrc: '/imgs/potions/SkeleGro.png',
    title: 'homemade skelegro potion'
  },
  {
    name: 'Sleeping Draught',
    effect:
      'Causes the drinker to fall almost instantaneously into a deep but temporary sleep.',
    color: 'Dark purple',
    difficulty: 3,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: [
      '4 sprigs of Lavender',
      '6 measures of Standard ingredient',
      '2 blobs of Flobberworm mucus',
      '4 Valerian sprigs'
    ],
    instructions: [
      'Add 4 sprigs of Lavender and 2 measures of Standard ingredient to mortar. Crush into a full powder.',
      'Add 2 blobs of Flobberworm mucus and 2 measures of Standard ingredient to cauldron.',
      'Gently heat for 30 seconds.',
      'Add 3 measures of the crushed mixture to the cauldron and wave your wand over the potion.',
      'Leave to brew and return in 70 minutes (62 brass/ 55 copper).',
      'Add 2 measures of Standard ingredient to cauldron and heat on high temperature for 1 minute.',
      'Add Valerian sprigs to cauldron and stir 7 times clockwise.',
      'Wave your wand to complete the potion.'
    ],
    imageSrc: '/imgs/potions/SleepingDraught.png',
    title: 'Sleeping draught in glass stopper'
  },
  {
    name: 'Strengthening Solution',
    effect: 'Grants the drinker immense strength.',
    color: 'Turquoise',
    difficulty: 4,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: ['Salamander saliva', 'Powdered griffin claw'],
    instructions: [
      'Add 3 measures of salamander saliva and add to cauldron. Potion will start to take on blue-ish hue.',
      'Grind griffin claw into a fine powder using mortar and pestle.',
      'Gradually add powdered griffin claw to cauldron while continuously stirring. Color will deepen to vibrant turqoise.',
      'Stir the potion clockwise for 5 minutes, ensuring ingredients are well blended.',
      'Allow the potion to brew for 40 minutes, color should turn to a rich turquoise.',
      'Remove from heat and allow to cool before decanting into glass vials.'
    ],
    imageSrc: '/imgs/potions/StrengtheningSolution.png',
    title: 'Unlabelled strengthening solution'
  },
  {
    name: 'Swelling Solution',
    effect: 'Causes enlargement on contact with an object or creature.',
    color: 'Yellow',
    difficulty: 2,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: ['Pufferfish eyes', 'Dried nettles', 'Bat spleens'],
    instructions: [
      'Add 2 scoops of dried nettles and 3 pufferfish eyes to mortar. Crush to medium-fine powder.',
      'Add 2 measures of crushed powder to cauldron.',
      'Heat on medium heat for 3 hours (2 hours 30 minutes brass/2 hours copper).',
      'Add 1 bat spleen and stir 4 times counterclockwise.',
      'Heat to low for 30 seconds.',
      'Wave your wand over cauldron to complete potion.'
    ],
    imageSrc: '/imgs/potions/SwellingSolution.png',
    title: 'unlabelled Swelling solution'
  },
  {
    name: 'Wit-Sharpening Potion',
    effect: 'Allows the drinker to think more clearly.',
    color: 'Greenish white',
    difficulty: 5,
    restricted: false,
    type: 'potions',
    subject: 'Potions',
    ingredients: [
      'Ground scarab beetles',
      'Cut ginger roots',
      'Armadillo bile',
      'Newt spleens'
    ],
    instructions: [
      'Mix in ginger root to cauldron until potion is lime green.',
      'Add armadillo bile until potion turns blue and begins frothing.',
      'Mix ground scarab beetles in carefully while stirring very slowly. Potion should turn red.',
      'Remix armadillo bile until potion turns yellow.',
      'Remix ginger roots into cauldron until potion turns lime green again.',
      'Remix armadillo bile into potion while stirring slowly while potion gradually turns its final greenish white color.',
      'Wave your wand over the cauldron to finish the potion.'
    ],
    imageSrc: '/imgs/potions/WitSharpeningPotion.png',
    title: 'suspended wit sharpening potion'
  }
]

export default potionbook
