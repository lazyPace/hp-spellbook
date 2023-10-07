import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import TangibleTypePage from './TangibleTypePage'
import potionbook from './Potionbook'
import './App.css'

function TableOfTangibles ({ cardStyles, hover }) {
  const categories = [
    'Alchemy',
    'Care of Magical Creatures',
    'Herbology',
    'Muggle Studies',
    'Potions'
  ]

  return (
    <>
      <div className='card-container'>
        {categories.map((tangible, index) => (
          <Link
            to
            {...`/tangibles/${tangible.split(' ').join('').toLowerCase()}`}
            key={index}
          >
            <div
              key={index}
              id={`tangible-card${index + 9}`}
              style={cardStyles(index)}
              onMouseEnter={() => hover(index)}
              onMouseLeave={() => hover(null)}
            >
              <p>{tangible}</p>
            </div>
          </Link>
        ))}
      </div>
      <Routes>
        <Route
          path='/tangibles/:type'
          element={({ match }) => <TangibleTypePage type={match.params.type} />}
        />
      </Routes>
    </>
  )
}

export default TableOfTangibles
