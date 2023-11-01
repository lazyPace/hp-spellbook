## Templates for data. Some can be optional (ie. no incantation **OR** nickname for some Spells, no physicals for Herbology).

## **REQUIRED** (except for _Wand Craft_): (difficulty: Number, subject: String, type: String)

## Spells

```javascript
spellbook: [
  {
    incantation: String,
    nickname: String,
    effect: String,
    type: String,
    restricted: Boolean,
    difficulty: Number,
    subject: String
  }
]
```

## Herbology

```javascript
plantbook: [
  {
    name: String,
    physicals: {
      stem: String,
      leaves: String,
      roots: String
    },
    properties: [String, etc],
    difficulty: Number,
    subject: String,
    type: String,
    sentient: Boolean,
    extinct: Boolean
  }
]
```

## Potions

```javascript
potionbook: [
  {
    name: String,
    effect: String,
    color: String,
    difficulty: Number,
    restricted: Boolean,
    type: String,
    subject: String,
    ingredients: [String, String, etc]
  }
]
```

## Care of Magical Creatures

```javascript
creaturebook: [
  {
    name: String,
    spec: String,
    physicals: {
      eyeColor: String,
      hairColor: String,
      skinColor: String,
      height: String,
      length: String
    },
    relatedTo: String,
    nativeTo: String,
    properties: [String, etc],
    classification: String,
    status: String,
    difficulty: Number,
    restricted: Boolean,
    type: String,
    subject: String
  }
]
```

## Wand Craft

```javascript
wandbook: [
  {
    wood: {
      woodName: {
        name: String,
        description: String,
        probability: String,
        users: [String, etc]
      }
    },
    core: {
      coreName: {
        name: String,
        description: String,
        probability: String
      }
    },
    flexibility: [String, String, etc],
    length: [String, String, etc]
  }
]
```
