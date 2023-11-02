import React, { useEffect } from 'react'

function PlantTable ({ data, type }) {
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
              <th>Plant Name</th>
              <th>Physicals</th>
              <th>Properties</th>
            </tr>
          </thead>
          <tbody>
            {data.map((plant, index) => (
              <tr key={index}>
                <td>
                  <em>{plant.name}</em>
                </td>
                <td>
                  <ul>
                    {Object.entries(plant.physicals).map(([key, value]) => (
                      <li key={key}>
                        {key.charAt(0).toUpperCase() +
                          key.slice(1).toLowerCase()}
                        : {value}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className='instruction-field'>
                  {plant.properties && plant.properties.length > 0 ? (
                    <ul>
                      {plant.properties.map((property, index) => (
                        <li key={index}>{property}</li>
                      ))}
                    </ul>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default PlantTable
