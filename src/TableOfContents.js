import React, { useState, useEffect } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import SpellTypePage from './SpellTypePage'

function TableOfContents () {
  const navigate = useNavigate()
  const [hoveredIndex, setHoveredIndex] = useState(null)
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

  const cardColors = [
    'rgba(35, 37, 76, 0.75)',
    'rgba(59, 122, 108, 0.75)',
    'rgba(118, 28, 51, 0.75)',
    'rgba(52, 110, 39, 0.75)',
    'rgba(121, 84, 127, 0.75)',
    'rgba(80, 90, 96, 0.75)',
    'rgba(99, 127, 47, 0.75)',
    'rgba(26, 106, 132, 0.75)'
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

  const generateCardStyle = index => ({
    flex: '1 0 calc(35% - 80px)',
    fontWeight: 'bold',
    padding: '10px',
    justifyContent: 'space-between',
    border: hoveredIndex === index ? '2px outset white' : '2px outset #000',
    borderRadius: index % 2 === 0 ? '8px 24px' : '24px 8px',
    textAlign: 'center',
    fontSize: '28px',
    color: hoveredIndex === index ? 'white' : 'black',
    backgroundColor:
      hoveredIndex === index
        ? cardColors[index % cardColors.length]
        : 'rgba(254, 241, 193, 0.75)',
    transition:
      'background-color 0.3s ease-in-out, color 0.3s ease-in-out, border 0.3s ease-in-out',
    cursor: 'pointer'
  })

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '20px',
    maxWidth: '58rem',
    margin: 'auto'
  }

  return (
    <>
      <div style={containerStyle}>
        {spellTypes.map((spellType, index) => (
          <Link
            to={`/spell-type/${spellType.split(' ').join('').toLowerCase()}`}
            key={index}
          >
            <div
              key={index}
              id={`content-card${index + 1}`}
              style={generateCardStyle(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <p>{spellType}</p>
            </div>
          </Link>
        ))}
      </div>
      <Routes>
        <Route
          path='/spell-type/:type'
          element={({ match }) => <SpellTypePage type={match.params.type} />}
        />
      </Routes>
    </>
  )
}

export default TableOfContents
