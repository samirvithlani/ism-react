import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

export const AddDoctor = () => {

    const AddDoctor = async (data) => {

            await axios.post("https://tutorialapi1.herokuapp.com/tutorial",data).then(res=>{
                console.log(res);
            })

    }
    const submit =(data)=>{

        AddDoctor(data);
    }
    const {register,handleSubmit,formState:{errors}} = useForm();

  return (
    <div>
        <h1>Add Doctor</h1>
        <form onSubmit={handleSubmit(submit)}>
        <div>
            <label>Doctor Name</label>
        </div>
        </form>
    </div>
  )
}
