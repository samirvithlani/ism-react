import React, { useContext } from "react";
import { AppContext } from "./context";
import { useForm } from "react-hook-form";
import { ADD_USER } from '../constant'
import { DELETE_USER } from '../constant'

export const AddUser = () => {
  const { userDispatcher } = useContext(AppContext);
  const { register, handleSubmit } = useForm();

  const submit = (data)=>{

    userDispatcher(ADD_USER,data)
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>id</label>
          <input type="text" {...register("id")} />
        </div>
        <div>
          <label>name</label>
          <input type="text" name="name" {...register("name")} />
        </div>
        <div>
          <label>age</label>
          <input type="text" name="name" {...register("age")} />
        </div>
        <div>
            <input type="submit" value="Add User"/>
            </div>
      </form>
    </div>
  );
};
