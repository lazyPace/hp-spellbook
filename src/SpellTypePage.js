import React, { useEffect } from 'react'
import spellbook from './Spellbook'
import { useParams } from 'react-router-dom'

function SpellTypePage () {
  const { type } = useParams()

  console.log(type)
  const selectedSpells = spellbook.filter(spell => spell.type === type)
  useEffect(() => {
    document.title = `${type.toUpperCase()} - LazyPace's Book of Spells`
  }, [type])
  console.log(selectedSpells)
  return (
    <>
      <div className='spell-header'>
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
                <td>{spell.incantation || 'No standard incantation'}</td>
                <td>{spell.nickname || 'N/A'}</td>
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
