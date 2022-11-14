import React from 'react'
import { useParams } from 'react-router-dom'

export const ContactDetaill = () => {
    var data = useParams().id
  return (
    <div>
        <h1>
            ContactDetaill
        </h1>
        <h2>
            {data}
        </h2>
    </div>
  )
}
