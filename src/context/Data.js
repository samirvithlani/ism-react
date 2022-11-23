import React, { useState } from 'react'
import { AddUser } from './AddUser'
import { AppContext } from './context'
import { UserList } from './UserList'
import { ADD_USER } from '../constant'
import { DELETE_USER } from '../constant'

export const Data = () => {

    const [users, setusers] = useState([
        {
            id: 1,
            name:"sachin",
            age: 20
        },
        {
            id: 2,
            name:"raj",
            age: 25
        }
    ])

    const userDispatcher =(action,payload) =>{

        switch(action){
            case ADD_USER:
                setusers([...users,payload])
                return
            case DELETE_USER:
                setusers(users.filter(user => user !== payload))    
                return
            default:
                return                
        }



    }


  return (
    <div>
        
            <AppContext.Provider value ={{users,userDispatcher}}>
                <AddUser/>
                <UserList/>
            </AppContext.Provider>

    </div>
  )
}

