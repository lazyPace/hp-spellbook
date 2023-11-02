import React, { useEffect } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import SpellTypePage from '../content/SpellTypePage'

function TableOfSpells ({ cardStyles, hover }) {
  const navigate = useNavigate()

  const spellTypes = [
    'Charms',
    'Conjurations',
    'Counter Spells',
    'Curses',
    'Healing Spells',
    'Hexes',
    'Jinxes',
    'Transfigurations'
  ]

  useEffect(() => {
    const abortController = new AbortController()
    const homeTitle = `LazyPace's Book of Spells`

    const handleNav = () => {
      document.title = homeTitle
    }

    return () => {
      handleNav()
      abortController.abort()
    }
  }, [navigate])

  return (
    <>
      <Routes>
        <Route path='/spell-type/:type' element={<SpellTypePage />} />
      </Routes>
      <div className='card-container'>
        {spellTypes.map((spellType, index) => (
          <Link
            to={`/spell-type/${spellType.split(' ').join('').toLowerCase()}`}
            key={index}
          >
            <div
              key={index}
              id={`content-card${index + 1}`}
              style={cardStyles(index)}
              onMouseEnter={() => hover(index)}
              onMouseLeave={() => hover(null)}
            >
              <p>{spellType}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default TableOfSpells
