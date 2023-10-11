import React, { useEffect } from 'react'
import potionbook from './Potionbook'
import { useParams } from 'react-router-dom'
import './App.css'

function TangibleTypePage () {
  const { type } = useParams()

  console.log(type)
}

export default TangibleTypePage
