import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom';

export const AddTutorial = () => {

    var navigate = useNavigate();

  const addTutorial = async (data) => {
    await axios
      .post("https://tutorialapi1.herokuapp.com/tutorial", data)
      .then((res) => {
        console.log(res);
        navigate("/tutoriallist");
        //redirect list
      });
  };
  const submit = (data) => {

    var tutorial = {
        title: data.title,
        description: data.description,
        published: data.published === "true" ? true : false,
        fees: data.fees,
    }
    addTutorial(tutorial);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>Tutorial Title</label>
          <input type="text" {...register("title")} />
        </div>
        <div>
          <label>Description</label>
          <input type="text" {...register("description")} />
        </div>
        <div>
          <label>Published</label>
          <input type="radio" name = "published" value="true" {...register("published")} />TRUE
          <input type="radio" name = "published" value="false" {...register("published")} />FALSE
        </div>
        <div>
          <label>fees</label>
          <input type="text" {...register("fees")} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
