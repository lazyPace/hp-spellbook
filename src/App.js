import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import TableOfContents from './TableOfContents'
import SpellTypePage from './SpellTypePage'

function App () {
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
        <TableOfContents />
        <div className='spell-header'>
          <h2>Tangible Magic</h2>
        </div>
      </div>
    </Router>
  )
}

export default App
