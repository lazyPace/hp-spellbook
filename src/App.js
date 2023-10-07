import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import TableOfSpells from './TableOfSpells'
import SpellTypePage from './SpellTypePage'
import TableOfTangibles from './TableOfTangibles'

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
        <div className='header'>
          <div className='content-container'>
            <div className='shimmer'>
              <img
                alt='the wand'
                src={process.env.PUBLIC_URL + '/imgs/therealwand.png'}
                className='wand-logo'
              />
            </div>
            <h1 className='contents-heading'>Wizarding World Spellbook</h1>
            <div className='shimmer'>
              <img
                alt='the wand'
                src={process.env.PUBLIC_URL + '/imgs/therealwand.png'}
                className='wand-logo'
              />
            </div>
          </div>

          <ul className='dots'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <Link to='/'>
          <button type='button' name='home-button' className='home-button'>
            Table of Contents
          </button>
        </Link>
        <div className='spell-header'>
          <h2>Spell Types</h2>
        </div>
        <Routes>
          <Route path='/spell-type/:type' element={<SpellTypePage />} />
        </Routes>
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
