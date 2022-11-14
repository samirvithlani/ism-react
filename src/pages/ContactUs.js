import React from 'react'
import { Link } from 'react-router-dom'

export const ContactUs = () => {
  var urls= [
    {
      name:"iphone"
    },
    {
      name:"samsumg"
    },
    {
      name:"nokia"
    }
  ]
  return (
    <div>
      {
        urls.map(link=>{
          return (
            <ul>
              <li>
                <Link to = {`/contactdetail/${link.name}`}>{link.name}</Link>
              </li>
            </ul>
          )
        })
      }
      
        {/* <li>
          <Link to ={`/contactdetail/${id}`}>id</Link>
        </li>
        <li>
          
          <Link to="/contactdetail/amit">Amit</Link>
        </li>
        <li>
          <Link to="/contactdetail/raj">Raj</Link>
        </li> */}

      
    </div>
  )
}
