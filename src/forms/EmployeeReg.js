import React from "react";
import {useForm} from "react-hook-form";

export const EmployeeReg = () => {
    //register,error,handlesubmit
    //arrat,object,function
    const {register,handleSubmit,formState:{errors}} = useForm({
        //mode:"onBlur"
        mode:"onChange"
    });

    const submit = (data)=>{

        console.log(data);
        console.log(errors);
    }
    console.log(errors)
    const validationSchema = {
        name:{
            required:{
                value:true,
                message:"Name is required"
            },
            maxLength:{
                value:8,
                message:"Name should be less than 8 characters"
            }
        },
        password:{
            
            minLength:{
                value:6,
                message:"Password should be minimum 6 characters"
            }
        },
        phone:{
            pattern:{
                value:/[6-9]{1}[0-9]{9}/,
                message:"Phone number is not valid...."
            }
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
      <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            {...register("name",validationSchema.name)}
          />
          {
            errors.name && <span className="text-danger">{errors.name.message}</span>
          }
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            {...register("email")}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            {...register("password",validationSchema.password)}
          />
          {
            errors.password && <span className="text-danger">{errors.password.message}</span>
          }
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Phone</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            {...register("phone",validationSchema.phone)}
          />
          {
            errors.phone && <span className="text-danger">{errors.phone.message}</span>
          }
        </div>
        

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
