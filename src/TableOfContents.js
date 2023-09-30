import React from 'react'

function TableOfContents () {
  const spellTypes = [
    'Charms',
    'Conjurations',
    'Counter-Spells',
    'Curses',
    'Healing Spells',
    'Hexes',
    'Jinxes',
    'Transfigurations'
  ]

  return (
    <>
      <div id='content-card'>
        <p>Charms</p>
      </div>
      <div id='content-card2'>
        <p>Conjurations</p>
      </div>
    </>
  )
}

export default TableOfContents
