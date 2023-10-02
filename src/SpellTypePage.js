import React from 'react'
import Spellbook from './Spellbook'
import { useParams } from 'react-router-dom'

function SpellTypePage () {
  const { type } = useParams()

  const firstWord = type.split(' ')[0] // get the first word only of the spell type

  const removePlural = word => {
    const pluralSuffixes = ['s', 'es']

    for (const suffix of pluralSuffixes) {
      if (word.endsWith(suffix)) {
        if (suffix === 'es') {
          console.log(word.slice(0, -2))
          return word.slice(0, -2)
        } else {
          return word.slice(0, -1)
        }
      }
    }

    return word
  }

  const formattedWord = removePlural(firstWord)

  return (
    <div>
      <h2>{formattedWord[0].toUpperCase() + formattedWord.slice(1)} Spells</h2>
    </div>
  )
}

export default SpellTypePage
