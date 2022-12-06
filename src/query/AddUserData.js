import React from 'react'
import { useAddData } from './Query'

export const AddUserData = () => {

    const res = useAddData()

    const submit = ()=>{
        var data = {
            name:"amit",
            job:"leader"
        }
        res.mutate(data)
    }
  return (
    <div>

            <button onClick={()=>{submit()}}>submit</button>
    </div>
  )
}
