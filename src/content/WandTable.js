import React, { useEffect } from 'react'

function WandTable ({ data, type }) {
  useEffect(() => {
    document.title = `${type.toUpperCase()} - LazyPace's Book of Spells`
  }, [type])

  // Destructure wandbook data
  const { woods, cores } = data[0]

  // Convert data to array for map
  const woodsArr = Object.values(woods)
  const coresArr = Object.values(cores)

  return (
    <>
      <div className={`tangible-header`}>
        <h2>{type.toUpperCase()}</h2>
      </div>
      <div className='spell-table' id='wandwood-table'>
        <div className={`wand-header`}>
          <h2>Wand Woods</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th>Wood</th>
              <th>Description</th>
              <th>Rarity</th>
            </tr>
          </thead>
          <tbody>
            {woodsArr.map((wood, index) => (
              <tr key={index}>
                <td>
                  <em>{wood.name}</em>
                </td>
                <td>{wood.description}</td>
                <td>{wood.probability}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={`wand-header`}>
          <h2>Wand Cores</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th>Core</th>
              <th>Description</th>
              <th>Rarity</th>
            </tr>
          </thead>
          <tbody>
            {coresArr.map((core, index) => (
              <tr key={index}>
                <td>
                  <em>{core.name}</em>
                </td>
                <td>{core.description}</td>
                <td>{core.probability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default WandTable
