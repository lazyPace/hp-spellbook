import React from 'react'
import { useParams } from 'react-router-dom'

import PotionTable from './PotionTable'
import potionbook from '../data/Potionbook'
import WandTable from './WandTable'
import wandbook from '../data/Wandbook'
import CreatureTable from './CreatureTable'
import creaturebook from '../data/Creaturebook'
import MuggleTable from './MuggleTable'
import mugglebook from '../data/Mugglebook'
import PlantTable from './PlantTable'
import plantbook from '../data/Plantbook'

import '../App.css'

function TangibleTypePage () {
  const { type } = useParams()

  // Get the tangible type the user clicked on and pass to proper table
  const getDataForType = () => {
    switch (type) {
      case 'potions':
        return potionbook
      case 'wandcraft':
        return wandbook
      case 'careofmagicalcreatures':
        return creaturebook
      case 'mugglestudies':
        return mugglebook
      case 'herbology':
        return plantbook
      default:
        return []
    }
  }

  const data = getDataForType()
  console.log('the selected data is ', data)
  return (
    <>
      {type === 'potions' && <PotionTable data={data} type={type} />}
      {type === 'wandcraft' && <WandTable data={data} type={type} />}
      {type === 'careofmagicalcreatures' && (
        <CreatureTable data={data} type={type} />
      )}
      {type === 'mugglestudies' && <MuggleTable data={data} type={type} />}
      {type === 'herbology' && <PlantTable data={data} type={type} />}
    </>
  )
}

export default TangibleTypePage
