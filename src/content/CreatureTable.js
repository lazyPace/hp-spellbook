import React, { useEffect } from 'react'

function CreatureTable ({ data, type }) {
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
              <th>Creature Name</th>
              <th>Classification</th>
              <th>Physicals</th>
              <th>Properties</th>
            </tr>
          </thead>
          <tbody>
            {data.map((creature, index) => (
              <tr key={index}>
                <td>
                  <em>{creature.name}</em>
                </td>
                <td>{creature.classification}</td>
                <td>
                  <ul>
                    {Object.entries(creature.physicals).map(([key, value]) => (
                      <li key={key}>
                        {key.charAt(0).toUpperCase() +
                          key.slice(1).toLowerCase()}
                        : {value}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className='instruction-field'>
                  {creature.properties && creature.properties.length > 0 ? (
                    <ul>
                      {creature.properties.map((property, index) => (
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

export default CreatureTable
