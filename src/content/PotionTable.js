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
              <th>Ingredients</th>
              <th>Instructions</th>
              <th>Effects</th>
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

export default PotionTable
