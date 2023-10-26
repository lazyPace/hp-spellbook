import React from 'react'

function Header () {
  return (
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
  )
}

export default Header
