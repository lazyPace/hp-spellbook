// Flexibility and length properties require a bell curve algorithm.

// Wand wood and core probabilities in decreasing rate of appearance: (abundant, high, medium, low, scarce)

const wandbook = {
  woods: {
    acacia: {
      name: 'Acacia',
      description:
        'Unusual wand wood which creates tricky wands that often refuse to operate for anyone other than their rightful owner. Withholds its best effects from all but the most gifted witches and wizards, which results in their low usage in modern wand-making.',
      probability: 'scarce',
      users: []
    },
    alder: {
      name: 'Alder',
      description:
        'An unyielding wood, well suited for making flutes and pipes. Alder people are adventurous travellers and confident decision makers.',
      probability: 'medium',
      users: ['Quirinus Quirrell', 'Lottie Turner']
    },
    apple: {
      name: 'Apple',
      description:
        'Rare and powerful wand wood best suited for an owner of high aims and ideals. Does not mix well with Dark magic. The possessor of an apple wand is said to be well-loved and has a talent for conversing with other magical beings in their own tongue.',
      probability: 'scarce',
      users: ['Dylan Marwood', 'Ollivander family heirloom']
    },
    ash: {
      name: 'Ash',
      description:
        'Ash wands are best suited for witches and wizards who are steadfast in their beliefs and courageous but not arrogant; they bond strongly to their one true master and lose power if passed on, especially if the core is unicorn hair.',
      probability: 'medium',
      users: [
        'Cedric Diggory',
        'Charlie Weasley',
        'Ron Weasley (broken)',
        'Colby Frey',
        'Fischer Frey'
      ]
    },
    aspen: {
      name: 'Aspen',
      description:
        'Aspen wand owners are typically strong-minded, drawn to quests and revolutions, and are often skilled duellists; the wand is especially suited for martial magic and excels in charmwork.',
      probability: 'medium',
      users: []
    },
    beech: {
      name: 'Beech',
      description:
        'Beech wands are best suited for those wise beyond their years or rich in experience and understanding, performing poorly for the narrow-minded; when matched correctly, they offer unparalleled subtlety and artistry.',
      probability: 'scarce',
      users: []
    },
    birch: {
      name: 'Birch',
      description:
        'Unused by Ollivander, the specifics of this wand wood remain unknown.',
      probability: 'scarce',
      users: ['Dolores Umbridge']
    },
    blackthorn: {
      name: 'Blackthorn',
      description:
        'Blackthorn wands are best suited for warriors and bond deeply with their owners after facing danger or hardship, resulting in a remarkably loyal wand.',
      probability: 'scarce',
      users: ['Unknown Snatcher', 'Sir Cadogan']
    },
    blackWalnut: {
      name: 'Black Walnut',
      description:
        'Black walnut wands, rarer and handsome, seek owners with good instincts and strong insight but falter with self-deceptive users; when paired with an honest, self-aware individual, they excel in charmwork and show impressive loyalty.',
      probability: 'scarce',
      users: []
    },
    cedar: {
      name: 'Cedar',
      description:
        'Cedar wands are best suited for those with perspicacity, perception, strong character, and deep loyalty; their owners can become formidable adversaries, especially when defending loved ones.',
      probability: 'abundant',
      users: ['Horace Slughorn']
    },
    cherry: {
      name: 'Cherry',
      description:
        'Cherry wood, although rare and often misjudged due to its pink blossom, produces wands of potent and sometimes lethal power; when paired with dragon heartstring, it requires a wizard of great self-control. The wood is especially valued among Mahoutokoro students in Japan and is considered expensive.',
      probability: 'scarce',
      users: [
        'Gilderoy Lockhart',
        'Mary Cattermole',
        'Neville Longbottom',
        'Ivy Warrington'
      ]
    },
    chestnut: {
      name: 'Chestnut',
      description:
        "Chestnut wands are versatile, adapting to their core and owner's personality, and are drawn to those skilled in magical beast taming, Herbology, and flying. With a dragon heartstring core, they may attract those desiring luxury and possibly with dubious morals, while with a unicorn hair core, they favor those dedicated to justice.",
      probability: 'medium',
      users: ['Peter Pettigrew', 'Professor Kettleburn']
    },
    cypress: {
      name: 'Cypress',
      description:
        'Cypress wands align with the noble and are best suited for the brave, bold, and self-sacrificing, particularly those willing to face the darker aspects of themselves and others, and who might embrace a heroic death.',
      probability: 'medium',
      users: ['Remus Lupin']
    },
    dogwood: {
      name: 'Dogwood',
      description:
        "Dogwood wands are playful and seek fun-loving owners but are also capable of serious magic, especially with an inventive partner. However, they don't perform non-verbal spells and tend to be rather loud in nature.",
      probability: 'low',
      users: ['Robyn Thistlethwaite']
    },
    ebony: {
      name: 'Ebony',
      description:
        'Ebony wands, known for combat and Transfiguration magic, best match with courageous individuals who are non-conformist, steadfast in their beliefs, and resistant to external pressures.',
      probability: 'medium',
      users: ['Leta Lestrange', 'Aurelius Dumbledore (Credence Barebone)']
    },
    elder: {
      name: 'Elder',
      description:
        'Elder wands, the rarest and considered unlucky, are challenging to master and demand exceptional owners. They possess potent magic and typically pair with uniquely remarkable individuals marked for a special destiny.',
      probability: 'scarce',
      users: ['Elder Wand']
    },
    elm: {
      name: 'Elm',
      description:
        'Elm wands gravitate towards owners with presence, magical skill, and dignity, producing the least errors and most elegant magic. They are sophisticated wands, especially sought after by those valuing pure-blood lineage.',
      probability: 'low',
      users: ['Lucius Malfoy']
    },
    englishOak: {
      name: 'English Oak',
      description:
        "English oak wands require partners with strength, courage, and loyalty, being especially loyal themselves. Owners often have strong intuition and a connection to nature's magical creatures and plants.",
      probability: 'low',
      users: ['Rubeus Hargrid', 'Merlin (rumored)']
    },
    fir: {
      name: 'Fir',
      description:
        "Fir wands, from resilient trees, seek owners with determination, focus, and often an intimidating presence. Ill-suited for the indecisive, they're known as 'the survivor's wand' due to their owners' knack for evading mortal danger and are especially adept at Transfiguration.",
      probability: 'low',
      users: ['Minerva McGonagall']
    },
    hawthorn: {
      name: 'Hawthorn',
      description:
        'Hawthorn wands are paradoxical and best suit complex or conflicted owners, especially those in turmoil. They excel in healing magic and curses but require a skilled hand, as they can be difficult to master and their spells can backfire if mishandled.',
      probability: 'low',
      users: ['Draco Malfoy']
    },
    hazel: {
      name: 'Hazel',
      description:
        "Hazel wands are emotionally sensitive, reflecting their owner's feelings and working best for those who manage their emotions. While they can discharge energy unpredictably after their owner's distress, they can produce exceptional magic, are deeply devoted, often 'wilting' with their master's end, and uniquely detect underground water, signaling with silvery smoke.",
      probability: 'low',
      users: ['Sybill Trelawney']
    },
    holly: {
      name: 'Holly',
      description:
        'Traditionally seen as protective, holly wands best suit those needing assistance with anger and impetuosity. They often choose owners on dangerous or spiritual quests and vary greatly in performance based on the wand core.',
      probability: 'low',
      users: ['Harry Potter', 'Cassandra Vole']
    },
    hornbeam: {
      name: 'Hornbeam',
      description:
        "Hornbeam wands, highly sentient, select wizards with a singular passion or vision. They adapt swiftly to their owner's magic, becoming so personalized that others find them hard to use. These wands also absorb their owner's code of honour, refusing actions misaligned with their master's principles.",
      probability: 'low',
      users: ['Vikktor Krum', 'Garrick Ollivander']
    },
    larch: {
      name: 'Larch',
      description:
        'Larch wands instill confidence and courage but are selective about their ideal owners and challenging to handle. Often revealing hidden talents and unexpected effects, a witch or wizard might not recognize their potential until paired with a larch wand, leading to an extraordinary partnership.',
      probability: 'low',
      users: ['Celestina Warbeck', 'Kevin Farrell']
    },
    laurel: {
      name: 'Laurel',
      description:
        "Laurel wands, said to be incapable of dishonourable acts, can perform potent, even lethal, magic in pursuit of glory. Unique in defending against theft with spontaneous lightning strikes, they're deemed 'fickle' because they reject lazy possessors, but otherwise remain loyally attached to their initial owner.",
      probability: 'low',
      users: []
    },
    maple: {
      name: 'Maple',
      description:
        'Maple wands are best suited for travellers and explorers, becoming lacklustre without ambitious owners. They thrive on new challenges and changing scenes, shining brighter as they and their wielder grow in ability and stature.',
      probability: 'medium',
      users: []
    },
    pear: {
      name: 'Pear',
      description:
        'Pear wands are powerful, excelling in the hands of the warm-hearted, generous, and wise; their owners are typically well-respected and never aligned with dark magic. Notably resilient, these wands maintain a like-new appearance even after years of use.',
      probability: 'scarce',
      users: []
    },
    pine: {
      name: 'Pine',
      description:
        'Pine wands are drawn to independent and possibly enigmatic individuals, often perceived as loners. They are adaptable to creative uses and new spells, and are particularly receptive to non-verbal magic. Notably, those chosen by pine wands are often destined for long lives, as such wands are believed to prefer owners who will live a long time.',
      probability: 'low',
      users: []
    },
    poplar: {
      name: 'Poplar',
      description:
        "Poplar wands are consistent and strong, often choosing individuals of great integrity. They perform best in the hands of those with clear moral vision. Notably, some of the Ministry's most accomplished Ministers for Magic possessed Ollivander-made poplar wands.",
      probability: 'medium',
      users: ['Eldritch Diggory', 'Evangeline Orpington']
    },
    redOak: {
      name: 'Red Oak',
      description:
        'Red oak wands, while mistakenly thought by some to signal a hot temper in its owner, were actually best suited to those with swift reactions, making them exceptional for duelling. The ideal red oak wand owner was agile-minded, innovative with spells, and a dependable ally in conflict. Ollivander considered them to be particularly striking in appearance.',
      probability: 'scarce',
      users: []
    },
    redwood: {
      name: 'Redwood',
      description:
        'Redwood wands gravitate towards those who naturally turn situations to their advantage. This has led to a mistaken belief that the wands themselves bring good fortune. The true magic resides in the wielder, not the wand.',
      probability: 'low',
      users: []
    },
    reed: {
      name: 'Reed',
      description:
        "Reed wands favor the bold and articulate, offering strong protection. When paired with a dragon heartstring core, the wand enhances the wielder's admirable loyalty.",
      probability: 'medium',
      users: []
    },
    rosewood: {
      name: 'Rosewood',
      description:
        'Rosewood is a rare wand wood in the wizarding realm, distinct for its enduring sweet aroma. Its specific magical properties remain a mystery.',
      probability: 'scarce',
      users: ['Fleur Delacour']
    },
    rowan: {
      name: 'Rowan',
      description:
        'Rowan wands are known for potent Defensive Charms and resistance to the Dark Arts, making them highly valued. Best suited for the clear-headed and pure-hearted, they often excel in duels.',
      probability: 'low',
      users: []
    },
    silverLime: {
      name: 'Silver Lime',
      description:
        'Silver lime wands are very rare, favored by Seers and Legilimens, bestowing significant status on their owner. Highly sought after in the nineteenth century, some wandmakers even dyed other woods to mimic its appearance.',
      probability: 'scarce',
      users: []
    },
    spruce: {
      name: 'Spruce',
      description:
        'Spruce wands are challenging, best suited for bold, humorous spell-casters. They can be dangerous in uncertain hands but, when matched correctly, are loyal and produce flamboyant magic.',
      probability: 'abundant',
      users: []
    },
    sycamore: {
      name: 'Sycamore',
      description:
        'Sycamore wands are prone to combust if bored, especially during mundane tasks. Ideally suited for curious, adventurous owners, they adapt well and are highly prized when paired correctly.',
      probability: 'low',
      users: []
    },
    vine: {
      name: 'Vine',
      description:
        "Vine wands are uncommon and drawn to individuals with hidden depths. They resonate with those seeking a greater purpose and can magically react when their ideal owner is near. This wand's unique nature is valued in ancient druidic traditions.",
      probabililty: 'low',
      users: ['Hermione Granger']
    },
    walnut: {
      name: 'Walnut',
      description:
        "Walnut wands favor magical innovators due to their adaptability. They're ideal for highly intelligent users and, once mastered, perform any task. However, in the hands of the unscrupulous, they can form a dangerous bond with their owner.",
      probability: 'low',
      users: ['Bellatrix Lestrange']
    },
    willow: {
      name: 'Willow',
      description:
        "Willow wands, known for healing, often chose users with hidden insecurities. They excelled in non-verbal magic and were drawn to those with untapped potential. It's believed they best assist those with a long journey ahead.",
      probability: 'low',
      users: ['Lily Evans', 'Ron Weasley (2nd Wand)', 'Scorpius Malfoy']
    },
    yew: {
      name: 'Yew',
      description:
        "Yew wands, rare and potent, have a reputation in duelling and curses. While often associated with the dark, they equally serve protectors. They've been wielded by both heroes and villains. These wands sprout into trees over a wizard's grave, and they never choose a mediocre or timid owner.",
      probability: 'low',
      users: ['Lord Voldemort', 'Ginny Weasley']
    }
  },
  cores: {
    dragonHeartstring: {
      name: 'Dragon Heartstring',
      description:
        'Dragon heartstring wands produce the most powerful and flamboyant magic and learn spells faster and easier, albeit more accident prone. They are most likely to change loyalty and the easiest to turn to the dark arts, though it would not turn on its own.',
      probability: 'abundant',
      users: [
        'Hermione Granger',
        'Viktor Krum',
        'Bellatrix Lestrange',
        'Gilderoy Lockhart',
        'Lucius Malfoy',
        'Minerva McGonagall',
        'Garrick Ollivander',
        'Peter Pettigrew',
        'Dolores Umbridge',
        'Horace Slughorn',
        'Gormlaith Gaunt'
      ]
    },
    phoenixFeather: {
      name: 'Phoenix Feather',
      description:
        "Phoenix feather wands have a wide magic range but take time to reveal it. They can act independently, making some wizards wary. They're choosy about owners and hard to tame.",
      probability: 'medium',
      users: ['Harry Potter', 'Lord Voldemort', 'Celestina Warbeck']
    },
    unicornHair: {
      name: 'Unicorn Hair',
      description:
        'Unicorn hair wands were not very powerful, but they were the least prone to accidents and the least likely to change loyalties. They were also the most difficult to turn to the dark art. They were prone to wilting if mishandled.',
      probability: 'abundant',
      users: [
        'Ron Weasley (2nd Wand)',
        'Charlie Weasley',
        'Draco Malfoy',
        'Cedric Diggory',
        'Neville Longbottom',
        'Remus Lupin',
        'Mary Cattermole',
        'Quirinus Quirrell',
        'Sybill Trelawney'
      ]
    },
    veelaHair: {
      name: 'Veela Hair',
      description:
        "Veela hair cores made for 'temperamental' wands, and was not a standard core material for contemporary wandmakers. Nonetheless, artisan and independent wand makers are known to fabricate wands using this material. The wider magical effects of the core material remain unknown.",
      probability: 'scarce',
      users: ['Fleur Delacour']
    },
    thestralHair: {
      name: 'Thestral Hair',
      description:
        'Thestral tail hair was regarded as an unstable, if not the most difficult, substance to use in wand-making. It was potent, but a tricky core to master; only a witch or wizard who was capable of accepting death could do so.',
      probability: 'scarce',
      users: ['Elder Wand']
    },
    thunderbirdFeather: {
      name: 'Thunderbird Feather',
      description:
        'Thunderbird feather wands are powerful and challenging to master. They sense danger, can cast proactive curses, and excel in Transfiguration. American wandmakers are known to fashion wands from this material.',
      probability: 'low',
      users: []
    }
  },
  flexibility: [
    'Very flexible',
    'Quite flexible',
    'Surprisingly swishy',
    'Swishy',
    'Quite bendy',
    'Fairly bendy',
    'Whippy',
    'Pliant',
    'Supple',
    'Reasonably supple',
    'Slightly springy',
    'Slightly yielding',
    'Solid',
    'Stiff',
    'Hard',
    'Rigid',
    'Unbending',
    'Unyielding',
    'Brittle'
  ],
  length: [
    '7 1/2"',
    '7 3/4"',
    '8"',
    '8 1/4"',
    '8 1/2"',
    '8 3/4"',
    '9"',
    '9 1/4"',
    '9 1/2"',
    '9 3/4"',
    '10"',
    '10 1/4"',
    '10 1/2"',
    '10 3/4"',
    '11"',
    '11 1/4"',
    '11 1/2"',
    '11 3/4"',
    '12"',
    '12 1/4"',
    '12 1/2"',
    '12 3/4"',
    '13"',
    '13 1/4"',
    '13 1/2"',
    '13 3/4"',
    '14"',
    '14 1/4"',
    '14 1/2"',
    '14 3/4"',
    '15"',
    '15 1/4"',
    '15 1/2"',
    '15 3/4"',
    '16"',
    '16 1/4"',
    '16 1/2"',
    '16 3/4"',
    '17"'
  ]
}

export default wandbook
