import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './App.css'

import Header from './main/Header'
import TableOfSpells from './main/TableOfSpells'
import TableOfTangibles from './main/TableOfTangibles'

function App () {
  const [spellHover, setSpellHover] = useState(null)
  const [tangibleHover, setTangibleHover] = useState(null)

  const cardColors = [
    'rgba(35, 37, 76, 0.75)',
    'rgba(59, 122, 108, 0.75)',
    'rgba(118, 28, 51, 0.75)',
    'rgba(52, 110, 39, 0.75)',
    'rgba(121, 84, 127, 0.75)',
    'rgba(80, 90, 96, 0.75)',
    'rgba(99, 127, 47, 0.75)',
    'rgba(26, 106, 132, 0.75)',
    'red'
  ]

  // Trying pretty hard to use just vanilla CSS
  const generateCardStyle = (index, type) => ({
    flex: '1 0 calc(35% - 80px)',
    fontWeight: 'bold',
    padding: '10px',
    justifyContent: 'space-between',
    border:
      (type === 'tangible' && tangibleHover === index) ||
      (type === 'spell' && spellHover === index)
        ? '2px outset white'
        : '2px outset #000',
    borderRadius: index % 2 === 0 ? '8px 24px' : '24px 8px',
    textAlign: 'center',
    fontSize: '28px',
    color:
      (type === 'tangible' && tangibleHover === index) ||
      (type === 'spell' && spellHover === index)
        ? 'white'
        : 'black',
    backgroundColor:
      (type === 'tangible' && tangibleHover === index) ||
      (type === 'spell' && spellHover === index)
        ? cardColors[index % cardColors.length]
        : 'rgba(254, 241, 193, 0.75)',
    transition:
      'background-color 0.3s ease-in-out, color 0.3s ease-in-out, border 0.3s ease-in-out',
    cursor: 'pointer'
  })

  return (
    <Router>
      <div className='App'>
        <Header />
        <Link to='/'>
          <button type='button' name='home-button' className='home-button'>
            Table of Contents
          </button>
        </Link>
        <div className='spell-header'>
          <h2>Spell Types</h2>
        </div>

        <TableOfSpells
          cardStyles={index => generateCardStyle(index, 'spell')}
          hover={setSpellHover}
        />
        <div className='spell-header'>
          <h2>Tangible Magic</h2>
        </div>

        <TableOfTangibles
          cardStyles={index => generateCardStyle(index, 'tangible')}
          hover={setTangibleHover}
        />
      </div>
    </Router>
  )
}

export default App
