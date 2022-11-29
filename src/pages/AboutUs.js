import React, { useContext } from 'react'
import { AppContext } from '../context/context'

export const AboutUs = () => {
  const student = useContext(AppContext)
  console.log(student)
  return (
    <div>AboutUs</div>
  )
}
