import React, { useEffect } from 'react'
import potionbook from './data/Potionbook'
import { useParams } from 'react-router-dom'
import './App.css'

function TangibleTypePage () {
  const { type } = useParams()

  console.log(potionbook)

  return (
    <div className={`tangible-header`}>
      <h2>{type.toUpperCase()}</h2>
    </div>
  )
}

export default TangibleTypePage
