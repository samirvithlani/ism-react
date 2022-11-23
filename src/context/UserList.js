import React, { useContext } from 'react'
import { AppContext } from './context'

export const UserList = () => {
    const {users,userDispatcher} = useContext(AppContext)
  return (
    <div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                {
                    users.map((user)=>{
                        return(
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>
                                    <button onClick={()=>userDispatcher("DELETE_USER",user)}>Delete</button>
                                    </td>
                            </tr>
                        )
                    })
                }
            </table>

    </div>
  )
}

