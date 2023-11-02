import React, { useEffect } from 'react'
import potionbook from '../data/Potionbook'
import { useParams } from 'react-router-dom'
import '../App.css'

function PotionPage () {
  const { type } = useParams()

  // Filter entries by difficulty
  const sumOfPotions = potionbook.filter(
    potion => potion.subject === 'Potions' && potion.difficulty <= 2
  )

  const selectedSubject = potionbook.filter(potion => potion.type === type)

  useEffect(() => {
    document.title = `${type.toUpperCase()} - LazyPace's Book of Spells`
  }, [type])

  console.log(sumOfPotions)

  return (
    <>
      <div className={`tangible-header`}>
        <h2>{type.toUpperCase()}</h2>
      </div>
      <div className='spell-table'>
        <table>
          <thead>
            <tr>
              <th>Potion</th>
              <th>Ingredients</th>
              <th>Instructions</th>
              <th>Effects</th>
            </tr>
          </thead>
          <tbody>
            {selectedSubject.map((potion, index) => (
              <tr key={index}>
                <td>
                  <em>{potion.name}</em>
                </td>
                <td>
                  <ul>
                    {potion.ingredients.map(ingredient => (
                      <li>{ingredient}</li>
                    ))}
                  </ul>
                </td>
                <td className='instruction-field'>
                  {potion.instructions && potion.instructions.length > 0 ? (
                    <ol>
                      {potion.instructions.map(instruction => (
                        <li key={instruction}>{instruction}</li>
                      ))}
                    </ol>
                  ) : null}
                </td>
                <td>{potion.effect}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default PotionPage
