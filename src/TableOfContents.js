import React, { useState, useEffect } from 'react'

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

  const [hoveredIndex, setHoveredIndex] = useState(null)

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
    document.title = "LazyPace's Book of Spells"
  }, [])

  const generateCardStyle = index => ({
    flex: '1 0 calc(35% - 80px)',
    fontWeight: 'bold',
    margin: '25px',
    padding: '10px',
    border: '1px solid #000',
    borderRadius: index % 2 === 0 ? '8px 24px' : '24px 8px',
    textAlign: 'center',
    fontSize: '28px',
    color: hoveredIndex === index ? 'white' : 'black',
    backgroundColor:
      hoveredIndex === index
        ? cardColors[index % cardColors.length]
        : 'rgba(254, 241, 193, 0.75)',
    transition: 'background-color 0.3s, color 0.3s',
    cursor: 'pointer'
  })

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '20px',
    maxWidth: '58rem'
  }

  return (
    <>
      <div style={containerStyle}>
        {spellTypes.map((spellType, index) => (
          <div
            key={index}
            id={`content-card${index + 1}`}
            style={generateCardStyle(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <p>{spellType}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default TableOfContents
