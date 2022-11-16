import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link} from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import Info from "@mui/icons-material/Info";

export const TutorialList = () => {
  const [tutorials, settutorials] = useState([]);

  const showtoast1 = async(data) => {

      toast.info(data, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

  };

  useEffect(() => {
    getAllTutorial();
  }, []);

  const getAllTutorial = async () => {
    await axios
      .get("https://tutorialapi1.herokuapp.com/tutorial")
      .then((res) => {
        //        console.log(res.data);
        settutorials(res.data);
      });
  };

  const deleteTutorial = async (id) => {
    await axios
      .delete("https://tutorialapi1.herokuapp.com/tutorial/" + id)
      .then((res) => {
        if (res.status === 200) {
          showtoast1(res.data);
          getAllTutorial();
        } else {
          //getAllTutorial()
          alert("Error");
        }
      }); 
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
      {/* Same as */}
      <ToastContainer />
      <button onClick={()=>{showtoast1()}}>Show Toast</button>
      {/* <button onClick={()=>{getAllTutorial()}}>
            get
        </button> */}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">TITLE</th>
            {/* <th scope="col">DESCRIPTION</th>
            <th scope="col">FEES</th>
            <th scope="col">Published???</th> */}
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
          {tutorials.map((tut) => {
            return (
              <tr>
                <th scope="row">{tut.id}</th>
                <td>{tut.title}</td>
                {/* <td>{tut.description}</td>
                <td>{tut.fees}</td>
                <td>{tut.published ? "published" : "not published"}</td> */}
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteTutorial(tut.id);
                    }}
                  >
                    <DeleteIcon/>
                  </button>
                  
                  <Link  to= {`/tutorialdetail/${tut.id}`}>
                      <Info/>
                  </Link>
                  <Link className="btn btn-primary" to= {`/tutorialupdate/${tut.id}`}>
                        Update
                  </Link>
                 
                 
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
