import React, { useState } from 'react'
import { Users } from './Users'

export const RegisterUser = (props) => {
    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const [isActive, setisActive] = useState('')
    
    const nameHandeler =(e)=>{
        //console.log(e.target.value);
        setname(e.target.value);
    }

    const submit =(e)=>{

        e.preventDefault();

        var user = {
            name:name,
            age:age,
            isActive:isActive === "true"? true : false

        }

        props.addUser(user);
    }

  return (
    <div>
        <h1>Register User</h1>
        <form onSubmit={submit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" onChange={(e)=>{nameHandeler(e)}}/>
            </div>
            <div>
                <label>Age</label>
                <input type="text" name="age" onChange={(e)=>{setage(e.target.value)}}/>
            </div>
            <div>
                <label>isActive</label>
                <input type="radio" name ="isActive" value ="true" onChange={(e)=>{setisActive(e.target.value)}}/>True
                <input type="radio" name ="isActive" value ="false" onChange={(e)=>{setisActive(e.target.value)}}/>False
            </div>
            <div>
                <input type="submit" value="Register"/>
            </div>
        </form>
        
    </div>
  )
}
