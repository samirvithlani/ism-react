import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const LoginUser = () => {

    const loginUser = async(user)=>{

        await axios.post("https://tutorialapi1.herokuapp.com/loginuser",user).then(res=>{

            if(res.status===200 && res.data.code==="OK"){
                localStorage.setItem("id",res.data.object.uId)
            }
            
        }).catch(err=>{

            console.log("err",err);
        })
    }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = (data) => {
    console.log(data);
    loginUser(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>EMAIL</label>
          <input
            type="text"
            {...register("userEmail")}
            placeholder="enter email"
          />
        </div>
        <div>
          <label>PASSWORD</label>
          <input
            type="text"
            {...register("userPassword")}
            placeholder="enter password"
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
