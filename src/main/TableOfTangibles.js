import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import PotionPage from '../content/PotionPage'
import potionbook from '../data/Potionbook'
import '../App.css'

function TableOfTangibles ({ cardStyles, hover }) {
  const categories = [
    'Care of Magical Creatures',
    'Herbology',
    'Muggle Studies',
    'Potions',
    'Wand Craft'
  ]

  return (
    <>
      <div className='card-container'>
        {categories.map((tangibles, index) => (
          <Link
            to={`/tangibles/${tangibles.split(' ').join('').toLowerCase()}`}
            key={index}
          >
            <div
              key={index}
              id={`tangibles-card${index + 9}`}
              style={cardStyles(index)}
              onMouseEnter={() => hover(index)}
              onMouseLeave={() => hover(null)}
            >
              <p>{tangibles}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default TableOfTangibles
