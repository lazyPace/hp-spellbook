import React, { useEffect } from 'react'
import spellbook from './data/Spellbook'
import { useParams } from 'react-router-dom'
import './App.css'

function SpellTypePage () {
  const { type } = useParams()

  // use below var to check how many classes for a given subject in the log
  const sumOfClasses = spellbook.filter(
    spell => spell.subject === 'Transfiguration' && spell.difficulty <= 2
  )

  const selectedSpells = spellbook.filter(spell => spell.type === type)

  useEffect(() => {
    document.title = `${type.toUpperCase()} - LazyPace's Book of Spells`
  }, [type])
  //console.log(selectedSpells)
  return (
    <>
      <div className={`${type}-header`}>
        <h2>{type.toUpperCase()}</h2>
      </div>
      <div className='spell-table'>
        <table>
          <thead>
            <tr>
              <th>Incantation</th>
              <th>Nickname</th>
              <th>Effect</th>
            </tr>
          </thead>
          <tbody>
            {selectedSpells.map(spell => (
              <tr key={spell.incantation}>
                <td className={spell.restricted ? 'restricted-spell' : ''}>
                  <em> {spell.incantation || 'No standard incantation'}</em>
                </td>
                <td>{spell.nickname || '-'}</td>
                <td>{spell.effect}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default SpellTypePage
