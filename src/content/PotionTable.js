import React, { useEffect } from 'react'

function PotionTable ({ data, type }) {
  useEffect(() => {
    document.title = `${type.toUpperCase()} - LazyPace's Book of Spells`
  }, [type])

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
              <th>Active Ingredients</th>
              <th>Difficulty</th>
              <th>Instructions</th>
              <th>Effects</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {data.map((potion, index) => (
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
                <td>
                  {/* Add logic here to display First Year, Second Year, Third Year, etc */}
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
                <td>
                  {potion.imageSrc ? (
                    <img
                      className='potion-picture'
                      src={potion.imageSrc}
                      alt={potion.title}
                      title={potion.title}
                    />
                  ) : (
                    'No image of potion provided...'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default PotionTable
