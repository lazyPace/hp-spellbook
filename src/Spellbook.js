// List of spells. Add alphabetically

const spellbook = [
  {
    incantation: 'Accio',
    nickname: 'Summoning Charm',
    effect:
      'Summons an object towards the caster. Able to summon objects within line of sight and out of view objects.',
    type: 'charms',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Aguamenti',
    nickname: 'Water-Making Spell',
    effect: 'Produces a clean, drinkable jet of water from the wand tip.',
    type: 'conjurations',
    restricted: false,
    difficulty: 2
  },
  {
    incantation: 'Alohomora',
    nickname: 'Unlocking Charm',
    effect: 'Unlocks doors and other locked objects. Can be bewitched against.',
    type: 'charms',
    restricted: false,
    difficulty: 2
  },
  {
    incantation: 'Anapneo',
    effect: "Clear's the target's airway if they are choking on something.",
    type: 'healing spells',
    restricted: false,
    difficulty: 5
  },
  {
    incantation: 'Anteoculatia',
    effect: 'Causes the target to grow antlers.',
    type: 'jinxes',
    restricted: false,
    difficulty: 4
  },
  {
    nickname: 'Anti-Cheating Spell',
    effect: 'Used to prevent cheating. Typically used on quills and parchment.',
    type: 'charms',
    restricted: false,
    difficulty: 6
  },
  {
    nickname: 'Anti-Disapparition Jinx',
    effect:
      'Prevents Disapparation in an area. It is used to entrap an enemy in an area.',
    type: 'jinxes',
    restricted: false,
    difficulty: 8
  },
  {
    incantation: 'Aparecium',
    nickname: 'Revealing Charm',
    effect:
      'Reveals secret messages written in invisible ink, or any other hidden markings. Works against concealing charms.',
    type: 'charms',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Aqua Eructo',
    effect:
      'Used to create and control a jet of clear water. Related to Aguamenti.',
    type: 'charms',
    restricted: false,
    difficulty: 5
  },
  {
    incantation: 'Arresto Momentum',
    nickname: 'Slowing Charm',
    effect:
      'Decreases the velocity of a moving target. Can be cast on oneself.',
    type: 'charms',
    restricted: false,
    difficulty: 6
  },
  {
    incantation: 'Ascendio',
    effect: 'Lifts the caster high into the air.',
    type: 'charms',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Avada Kedavra',
    nickname: 'Killing Curse',
    effect:
      'Causes instantaneous death with no known counter-curse. Accompanied by a flash of green light and a rushing noise.',
    type: 'curses',
    restricted: true,
    difficulty: 10
  },
  {
    incantation: 'Avifors',
    effect: 'Transforms target into a bird',
    type: 'transfigurations',
    restricted: false,
    difficulty: 5
  },
  {
    incantation: 'Avis',
    nickname: 'Bird-Conjuring Charm',
    effect: 'Conjures a flock of birds from the tip of the wand.',
    type: 'conjurations',
    restricted: false,
    difficulty: 6
  },
  {
    incantation: 'Avenseguim',
    effect: 'Turns an object into a tracking device.',
    type: 'charms',
    restricted: false,
    difficulty: 7
  },
  {
    nickname: 'Babbling Curse',
    effect: 'Caused uncontrolled babbling.',
    type: 'curses',
    restricted: true,
    difficulty: 4
  },
  {
    nickname: 'Bat-Bogey Hex',
    effect:
      "Transforms the target's bogeys into large bats that then fly out of the victim's nose.",
    type: 'hexes',
    restricted: false,
    difficulty: 5
  },
  {
    incantation: 'Bombarda',
    nickname: 'Exploding Charm',
    effect:
      'Provokes a small explosion. Can append Maxima to end of spell to increase strength.',
    type: 'charms',
    restricted: false,
    difficulty: 5
  },
  {
    incantation: 'Calvorio',
    nickname: 'Hair Loss Curse',
    effect: "Removes the victim's hair.",
    type: 'curses',
    restricted: true,
    difficulty: 5
  },
  {
    incantation: 'Cantis',
    effect:
      'Causes the victim to burst into song. Used by Hogwarts professors to enchant suits of armor to sing.',
    type: 'charms',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Capacious extremis',
    nickname: 'Extension Charm',
    effect:
      'Expands the internal dimensions of an object without affecting the external dimensions.',
    type: 'charms',
    restricted: true,
    difficulty: 8
  },
  {
    incantation: 'Cistem aperio',
    nickname: 'Box Blasting Charm',
    effect: 'Blasts open chests and boxes.',
    type: 'charms',
    restricted: false,
    difficulty: 5
  },
  {
    incantation: 'Colloportus',
    nickname: 'Locking Spell',
    effect:
      'Locks doors and all things that could be locked. It is the counter-charm to the Unlocking Charm.',
    type: 'charms',
    restricted: false,
    difficulty: 2
  },
  {
    incantation: 'Colloshoo',
    nickname: 'Stickfast Hex',
    effect: "Sticks the target's shoes to the ground.",
    type: 'jinxes',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Colovaria',
    nickname: 'Colour Change Charm',
    effect: "Changes the target's color.",
    type: 'charms',
    restricted: false,
    difficulty: 5
  },
  {
    incantation: 'Confringo',
    nickname: 'Blasting Curse',
    effect: 'Produces a fiery explosion.',
    type: 'curses',
    restricted: false,
    difficulty: 6
  },
  {
    incantation: 'Confundo',
    nickname: 'Confundus Charm',
    effect: 'Causes the victim to become confused and befuddled.',
    type: 'charms',
    restricted: false,
    difficulty: 6
  },
  {
    incantation: 'Crucio',
    nickname: 'Cruciatus Curse',
    effect:
      'Inflicts intense pain on the recipient of the curse, while not physically harming them. In extreme cases may cause insanity.',
    type: 'curses',
    restricted: true,
    difficulty: 9
  },
  {
    incantation: 'Defodio',
    nickname: 'Gouging Spell',
    effect: 'Allows the caster to dig and carve through the target.',
    type: 'charms',
    restricted: false,
    difficulty: 4
  },
  {
    incantation: 'Deletrius',
    nickname: 'Eradication Spell',
    effect:
      'Counter-Charm to the Reverse Spell, vanishing the image of the last spell cast. Can also disintegrate other certain images.',
    type: 'charms',
    restricted: false,
    difficulty: 2
  },
  {
    incantation: 'Densaugeo',
    effect: "Causes the target's teeth to grow rapidly in size.",
    type: 'hexes',
    restricted: false,
    difficulty: 5
  },
  {
    incantation: 'Deprimo',
    effect: 'Used to blast holes in the ground.',
    type: 'charms',
    restricted: false,
    difficulty: 6
  },
  {
    incantation: 'Depulso',
    nickname: 'Banishing Charm',
    effect:
      'Sends the target away from the caster. Counter-charm to the Summoning Charm.',
    type: 'charms',
    restricted: false,
    difficulty: 4
  },
  {
    incantation: 'Descendo',
    effect: 'Causes an object to fall or move downwards.',
    type: 'charms',
    restricted: false,
    difficulty: 2
  },
  {
    incantation: 'Diffindo',
    nickname: 'Severing Charm',
    effect: 'Used to precisely cut or tear objects.',
    type: 'charms',
    restricted: false,
    difficulty: 2
  },
  {
    incantation: 'Diminuendo',
    effect: 'Forces the target to shrink.',
    type: 'charms',
    restricted: false,
    difficulty: 5
  },
  {
    incantation: 'Draconifors',
    effect: 'Transforms the target into a dragon.',
    type: 'transfigurations',
    restricted: false,
    difficulty: 6
  },
  {
    incantation: 'Duro',
    nickname: 'Hardening Charm',
    effect: 'Turns an object to stone.',
    type: 'charms',
    restricted: false,
    difficulty: 4
  },
  {
    incantation: 'Engorgio',
    nickname: 'Engorgement Charm',
    effect:
      'Causes the target to swell in physical size. Its counter-charm is the Shrinking Charm.',
    type: 'charms',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Entomorphis',
    nickname: 'Insect Hex',
    effect: 'Transforms the target into an insectoid for a short time.',
    type: 'hexes',
    restricted: false,
    difficulty: 5
  },
  {
    incantation: 'Episkey',
    effect:
      'Used to heal relatively minor injuries, such as broken bones and cartilage.',
    type: 'healing spells',
    restricted: false,
    difficulty: 5
  },
  {
    incantation: 'Erecto',
    effect: 'Used to erect a tent or other upright structure.',
    type: 'charms',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Evanesco',
    nickname: 'Vanishing Spell',
    effect: 'Vanishes the target.',
    type: 'transfigurations',
    restricted: false,
    difficulty: 5
  },
  {
    incantation: 'Everte Statum',
    effect: 'Throws the victim backward, similarly to being thrown.',
    type: 'jinxes',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Expecto Patronum',
    nickname: 'Patronus Charm',
    effect:
      "Protective spell which conjures a spirit guardian consisting of the caster's positive emotions.",
    type: 'charms',
    restricted: false,
    difficulty: 7
  },
  {
    incantation: 'Expelliarmus',
    nickname: 'Disarming Charm',
    effect: 'Forces whatever the opponent is holding to fly out of their hand.',
    type: 'charms',
    restricted: false,
    difficulty: 4
  },
  {
    incantation: 'Expulso',
    nickname: 'Expulso Curse',
    effect: 'Produces a pressure induced explosion, as opposed to heat.',
    type: 'curses',
    restricted: false,
    difficulty: 6
  },
  {
    incantation: 'Ferula',
    nickname: 'Bandaging Charm',
    effect:
      'Conjures up bandages and wraps them around a wound, splinting any broken bones.',
    type: 'healing spells',
    restricted: false,
    difficulty: 5
  },
  {
    incantation: 'Finestra',
    effect: 'Shatters glass.',
    type: 'charms',
    restricted: false,
    difficulty: 2
  },
  {
    incantation: 'Finite Incantatem',
    nickname: 'General Counter-Spell',
    effect:
      'Terminates all spell effects within the vicinity of the caster. Does not work on all spell effects.',
    type: 'counter spells',
    restricted: false,
    difficulty: 7
  },
  {
    incantation: 'Flagrate',
    effect: 'Writes in midair with fiery marks.',
    type: 'charms',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Flipendo',
    nickname: 'Knockback jinx',
    effect: 'Knocks objects and creatures backwards.',
    type: 'jinxes',
    restricted: false,
    difficulty: 5
  },
  {
    incantation: 'Fumos',
    nickname: 'Smokescreen Spell',
    effect: 'Produces a defensive smokescreen that hinders visibility.',
    type: 'charms',
    restricted: false,
    difficulty: 4
  },
  {
    incantation: 'Furnunculus',
    nickname: 'Pimple Jinx',
    effect: 'Covers the target in bois (or pimples).',
    type: 'jinxes',
    restricted: false,
    difficulty: 5
  },
  {
    incantation: 'Geminio',
    nickname: 'Doubling Charm',
    effect:
      'Duplicates the target. When used to duplicate objects indefinitely on purpose, is known as the Geminio Curse.',
    type: 'charms',
    restricted: false,
    difficulty: 6
  },
  {
    incantation: 'Glacius',
    nickname: 'Freezing Spell',
    effect: 'Freezes the target with icy-cold air.',
    type: 'charms',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Glisseo',
    effect: 'Causes the steps on a stairway to flatten into a slide.',
    type: 'charms',
    restricted: false,
    difficulty: 2
  },
  {
    incantation: 'Herbifors',
    effect: 'Causes flowers to sprout on the victim.',
    type: 'charms',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Herbivicus',
    nickname: 'Herbivicus Charm',
    effect: 'Rapidly grows plants.',
    type: 'charms',
    restricted: false,
    difficulty: 4
  },
  {
    incantation: 'Homenum Revelio',
    nickname: 'Human-Presence-Revealing Spell',
    effect: 'Reveals human presence in the vicinity of the caster.',
    type: 'charms',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Immobulus',
    nickname: 'Freezing Charm',
    effect:
      'Immobilizes and stops the actions of the target. It works on both living and inanimate things.',
    type: 'charms',
    restricted: false,
    difficulty: 4
  },
  {
    incantation: 'Impedimenta',
    nickname: 'Impediment Jinx',
    effect: 'Slows down or stops the target.',
    type: 'jinxes',
    restricted: false,
    difficulty: 5
  },
  {
    incantation: 'Imperio',
    nickname: 'Imperius Curse',
    effect:
      "Places the victim completely under the caster's control. Places the victim in a trance-like state.",
    type: 'curses',
    restricted: true,
    difficulty: 9
  },
  {
    incantation: 'Impervius',
    nickname: 'Impervius Charm',
    effect:
      'Creates an invisible magical barrier on an object, such as a door. The barrier bounces objects off of it and muffles sound.',
    type: 'charms',
    restricted: false,
    difficulty: 4
  },
  {
    incantation: 'Incarcerous',
    nickname: 'Incarcerous Spell',
    effect: 'Ties up the target with ropes conjured from the wand.',
    type: 'conjurations',
    restricted: false,
    difficulty: 6
  },
  {
    incantation: 'Incendio',
    nickname: 'Fire-Making Spell',
    effect: 'Produces fire from the wand tip.',
    type: 'conjurations',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Locomotor Wibbly',
    nickname: 'Jelly-Legs Curse',
    effect:
      "Causes the victim's legs to collapse as if they were turned to jelly.",
    type: 'jinxes',
    restricted: false,
    difficulty: 4
  },
  {
    incantation: 'Lacarnum Inflamari',
    effect: 'Ignites cloaks.',
    type: 'charms',
    restricted: false,
    difficulty: 1
  },
  {
    incantation: 'Langlock',
    effect: "Sticks a victim's tongue to the roof of their mouth.",
    type: 'jinxes',
    restricted: false,
    difficulty: 4
  },
  {
    incantation: 'Lapifors',
    effect: 'Transforms the target into a rabbit.',
    type: 'transfigurations',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Legilimens',
    nickname: 'Legilimency Spell',
    effect:
      'Allows the caster to delve into the mind of the victim, allowing the caster to see memories, thoughs and emotions.',
    type: 'charms',
    restricted: true,
    difficulty: 8
  },
  {
    incantation: 'Levicorpus',
    effect: 'Hoists people up into the air by their ankle.',
    type: 'jinxes',
    restricted: false,
    difficulty: 5
  },
  {
    incantation: 'Liberacorpus',
    effect: 'Counter-Jinx to Levicorpus.',
    type: 'counter spells',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Locomotor',
    nickname: 'Locomotion Charm',
    effect:
      'Allows the caster to levitate a target a few inches off the ground and them move the object in any given direction.',
    type: 'charms',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Locomotor Mortis',
    nickname: 'Leg-Locker Curse',
    effect: "Sticks the target's legs together.",
    type: 'hexes',
    restricted: false,
    difficulty: 4
  },
  {
    incantation: 'Lumos',
    nickname: 'Wand-Lighting Charm',
    effect:
      "Illuminates the tup of the caster's wand, allowing visibility in darkness.",
    type: 'charms',
    restricted: false,
    difficulty: 1
  },
  {
    incantation: 'Lumos Solem',
    effect: 'Produces a blinding flas of sunlight.',
    type: 'charms',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Meteoloojinx Recanto',
    effect: 'Causes weather effects caused by jinxes to cease.',
    type: 'counter spells',
    restricted: false,
    difficulty: 4
  },
  {
    incantation: 'Mimblewimble',
    nickname: 'Tongue-Tying Curse',
    effect:
      "Ties the target's tongue in a knot, preventing them from making coherent speech or saying incantations correctly.",
    type: 'jinxes',
    restricted: false,
    difficulty: 4
  },
  {
    incantation: 'Mucus ad Nauseam',
    nickname: 'Curse of the Bogies',
    effect:
      'Gives the victim a nasty cold and an extremely runny nose that can cause the victim to collapse if not treated.',
    type: 'jinxes',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Muffliato',
    nickname: 'Muffliato Charm',
    effect:
      'Prevents others from hearing nearby conversations by filling peoples ears with an unidentifiable buzzing.',
    type: 'charms',
    restricted: false,
    difficulty: 4
  },
  {
    incantation: 'Nox',
    nickname: 'Wand-Extinguishing Charm',
    effect: 'Extinguishes wandlight. Counter-charm for Lumos.',
    type: 'charms',
    restricted: false,
    difficulty: 1
  },
  {
    incantation: 'Oculus Reparo',
    effect: 'Mends eyeglasses.',
    type: 'charms',
    restricted: false,
    difficulty: 1
  },
  {
    incantation: 'Obliviate',
    nickname: 'Memory Charm',
    effect: 'Erases specific memories.',
    type: 'charms',
    restricted: true,
    difficulty: 7
  },
  {
    incantation: 'Obscuro',
    effect: 'Blinddfolds the target.',
    type: 'conjurations',
    restricted: false,
    difficulty: 2
  },
  {
    incantation: 'Oppugno',
    nickname: 'Oppugno Jinx',
    effect: 'Causes targeted objects to attack a victim.',
    type: 'jinxes',
    restricted: false,
    difficulty: 5
  },
  {
    incantation: 'Orchideous',
    effect: 'Conjures a bouquet of flowers.',
    type: 'conjurations',
    restricted: false,
    difficulty: 2
  },
  {
    incantation: 'Papyrus Reparo',
    effect: 'Mend torn pieces of paper.',
    type: 'charms',
    restricted: false,
    difficulty: 2
  },
  {
    incantation: 'Partis Temporus',
    effect: 'Creates a temporary gap in the target.',
    type: 'charms',
    restricted: false,
    difficulty: 4
  },
  {
    incantation: 'Periculum',
    effect: 'Produces red sparks from the wand tip.',
    type: 'charms',
    restricted: false,
    difficulty: 1
  },
  {
    incantation: 'Petrificus Totalus',
    nickname: 'Full Body-Bind Curse',
    effect:
      'Used to temporarily bind the victims body in a position much like a soldier at attention. The victim typically falls to the ground.',
    type: 'jinxes',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Piertotum Locomotor',
    effect: 'Brings inanimate objects to life.',
    type: 'charms',
    restricted: false,
    difficulty: 7
  },
  {
    incantation: 'Point Me',
    effect: "Makes the caster's wand point due north.",
    type: 'charms',
    restricted: false,
    difficulty: 1
  },
  {
    incantation: 'Portus',
    effect: 'Turns an object into a portkey.',
    type: 'charms',
    restricted: false,
    difficulty: 6
  },
  {
    incantation: 'Prior Incantato',
    nickname: 'Reverse Spell',
    effect: "Forces a wand to show an 'echo' of the last spell it performed.",
    type: 'charms',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Protego',
    nickname: 'Shield Charm',
    effect:
      'Invisible shield that reflects spells and blocks physical entities.',
    type: 'charms',
    restricted: false,
    difficulty: 4
  },
  {
    incantation: 'Quietus',
    nickname: 'Quetening Charm',
    effect: 'Makes a target sound quieter. Counter-charm to Amplifying Charm.',
    type: 'charms',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Reducio',
    nickname: 'Shrinking Charm',
    effect:
      'Makes an object shrink in size. Its counter-charm is the Engorgement Charm.',
    type: 'charms',
    restricted: false,
    difficulty: 2
  },
  {
    incantation: 'Reducto',
    nickname: 'Reductor Curse',
    effect: 'Breaks objects and in stronger cases, disintegrates them.',
    type: 'curses',
    restricted: false,
    difficulty: 6
  },
  {
    incantation: 'Reverte',
    effect: 'Returns objects to their original positions or states.',
    type: 'charms',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Relashio',
    nickname: 'Revulsion Jinx',
    effect: 'Forces the target to release its grip on whatever it is holding.',
    type: 'jinxes',
    restricted: false,
    difficulty: 4
  },
  {
    incantation: 'Rennervate',
    nickname: 'Reviving Spell',
    effect:
      'Awakens an unconscious victim. Counter-charm to the Stunning Spell.',
    type: 'charms',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Reparo',
    nickname: 'Mending Charm',
    effect: 'Seamlessly repairs broken objects.',
    type: 'charms',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Repello Muggletum',
    nickname: 'Muggle-Repelling Charm',
    effect:
      'Keeps Muggles away from qizarding spaces by causing them to remember important meetings they missed and to forget what they were doing.',
    type: 'charms',
    restricted: false,
    difficulty: 5
  },
  {
    incantation: 'Revelio',
    nickname: 'Revelio Charm',
    effect: 'Reveals secrets about a person or object.',
    type: 'charms',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Rictusempra',
    nickname: 'Tickling Charm',
    effect: 'Tickles the target until they become weak with laughter.',
    type: 'jinxes',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Riddikulus',
    nickname: 'Boggart Banishing Spell',
    effect:
      'A spell used when fighting a Boggart, will force the Boggart to take the appearance of an object the caster is focusing on.',
    type: 'charms',
    restricted: false,
    difficulty: 4
  },
  {
    incantation: 'Salvio hexia',
    effect: 'Protection against hexes.',
    type: 'charms',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Scourgify',
    nickname: 'Scouring Charm',
    effect: 'Cleans objects.',
    type: 'charms',
    restricted: false,
    difficulty: 1
  },
  {
    incantation: 'Sectumsempra',
    effect: 'Lacerates the target, as if they had been slashed by a sword.',
    type: 'curses',
    restricted: true,
    difficulty: 6
  },
  {
    incantation: 'Serpensortia',
    nickname: 'Snake Summons Spell',
    effect: 'Conjures a serpent from the casters wand.',
    type: 'conjurations',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Silencio',
    nickname: 'Silencing Charm',
    effect: 'Makes something silent.',
    type: 'charms',
    restricted: false,
    difficulty: 2
  },
  {
    incantation: 'Sonorous',
    nickname: 'Amplifying Charm',
    effect:
      'Makes the target sound louder. The counter-charm is the Quietening Charm.',
    type: 'charms',
    restricted: false,
    difficulty: 2
  },
  {
    incantation: 'Specialis Revelio',
    effect: 'Reveals spells cast on objects or potions.',
    type: 'charms',
    restricted: false,
    difficulty: 2
  },
  {
    incantation: 'Spongify',
    nickname: 'Softening Charm',
    effect: 'Softens objects, making them rubbery and bouncy.',
    type: 'charms',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Stupefy',
    nickname: 'Stunning Spell',
    effect: 'Stuns the target, rendering them unconscious.',
    type: 'charms',
    restricted: false,
    difficulty: 5
  },
  {
    incantation: 'Tarantallegra',
    nickname: 'Dancing Feet Jinx',
    effect:
      "Makes a target's legs spasm wildly out of control, making it appear as though they are dancing.",
    type: 'jinxes',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Tergeo',
    effect: 'Siphons liquid and cleans objects.',
    type: 'charms',
    restricted: false,
    difficulty: 1
  },
  {
    incantation: 'Verdimillious',
    effect:
      'Produces a jet of green sparks that can be used in duelling, or to reveal things hidden by dark magic.',
    type: 'charms',
    restricted: false,
    difficulty: 2
  },
  {
    incantation: 'Vermillious',
    effect:
      'Produces a jet of red sparks that can used in duelling or to signal an emergency.',
    type: 'charms',
    restricted: false,
    difficulty: 2
  },
  {
    incantation: 'Vipera Evanesca',
    effect: 'Vanishes snakes.',
    type: 'transfigurations',
    restricted: false,
    difficulty: 2
  },
  {
    incantation: 'Vulnera Sanentur',
    effect:
      'Healing spell that slows blood flow, clears residue and knits wounds.',
    type: 'healing spells',
    restricted: false,
    difficulty: 7
  },
  {
    incantation: 'Waddiwasi',
    effect:
      'Used to shoot small, soft masses of whatever the caster desires at the target.',
    type: 'charms',
    restricted: false,
    difficulty: 3
  },
  {
    incantation: 'Wingardium Leviosa',
    nickname: 'Levitation Charm',
    effect: 'Makes objects fly, or levitate.',
    type: 'charms',
    restricted: false,
    difficulty: 1
  }
]

export default spellbook
