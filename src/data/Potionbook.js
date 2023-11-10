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
    imageSrc: '/imgs/potions/ageingpotion.png',
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
    imageSrc: '/imgs/potions/amortentia.png',
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
    imageSrc: '/imgs/potions/antidotetocommonpoisons.png',
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
    imageSrc: '/imgs/potions/antidotetouncommonpoisons.png',
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
    imageSrc: '/imgs/potions/babblingbeverage.png',
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
    imageSrc: '/imgs/potions/beautificationpotion.png',
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
    imageSrc: '/imgs/potions/befuddlementdrought.png',
    title: 'Commercialized Beffudlement drought'
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    name: 'Draught of Living Death',
    effect: 'Causes the drinker to fall into a deep, death-like slumber.',
    color: 'Pale lilac and clear',
    difficulty: 7,
    restricted: false,
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
    ]
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
    ]
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
    ]
  },
  {
    name: 'Erumpent Potion',
    effect:
      'Explodes when touched by an outside source. Methods exist to brew this potion without it exploding.',
    color: 'Green or Orange',
    difficulty: 6,
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
      'Let potion boil for 30 more minutes. The final potion should be either green or orange in color and should appear slightly simmering, even when room temperature.'
    ]
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
      'Add a dash of tincture of thym and stir slowly for 7 minutes.',
      'Leave solution to simmer softly (2-3 bubbles a minute) for at least 30 days. Solution should slowly turn a muted silver color.',
      'Upon returning to cauldron, add ground up Occamy eggshell and stir in slowly. Heat.',
      'Add a sprinkle of powdered common rue over the surface and stir vigorously while heating for 7 minutes.',
      'Let cauldron boil over high heat for at least 150 days. Potion should turn a muted gold color over this time.',
      'Once enough time has elapsed, the potion should exhibit the sloshing characteristics of the final potion. Wave your wand over the potion in a figure of eight and say "Felixempra!" to finish the potion.'
    ]
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
    ]
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
    ]
  }
]

export default potionbook
