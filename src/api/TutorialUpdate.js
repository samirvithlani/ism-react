import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TutorialUpdate = () => {

  var id = useParams().id;
  var navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [tutorial, settutorial] = useState({});

  const updateTutorial = async (data) => {
    await axios
      .put("https://tutorialapi1.herokuapp.com/tutorial1/" + id, data)
      .then((res) => {

        toast.info("updated...", {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

            setTimeout(() => {
                navigate("/tutoriallist");
            }, 2500);
        
      });
  };

  const getAllTutorialById = async () => {
    await axios
      .get("https://tutorialapi1.herokuapp.com/tutorial/" + id)
      .then((res) => {
                console.log(res.data);
        settutorial(res.data);
      });
  };

  useEffect(() => {
    getAllTutorialById();
  
    
  }, [])
  


  const submit = (data) => {
    console.log(data);
    var obj = {
      title: data.title,
      description: data.description,
      published: data.published === "true" ? true : false,
      fees: data.fees,
    };

    updateTutorial(obj);
  };
  return (
    <div>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h1>UPDATE TUTORIAL</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>Tutorial Title</label>
          <input type="text" {...register("title")}  defaultValue={tutorial.title}/>
        </div>
        <div>
          <label>Description</label>
          <input type="text" {...register("description")} defaultValue={tutorial.description}/>
        </div>
        <div>
          <label>Published</label>
          <input
            type="radio"
            name="published"
            value="true"
            {...register("published")}
            defaultChecked={tutorial.published}
          />
          TRUE
          <input
            type="radio"
            name="published"
            value="false"
            {...register("published")}
            defaultChecked={!tutorial.published}
          />
          FALSE
        </div>
        <div>
          <label>fees</label>
          <input type="text" {...register("fees")} defaultValue={tutorial.fees}/>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
