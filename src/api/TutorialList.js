import axios from "axios";
import React, { useEffect, useState } from "react";

export const TutorialList = () => {
  const [tutorials, settutorials] = useState([]);

  
  useEffect(() => {
    getAllTutorial();

  }, [])
  



  const getAllTutorial = async () => {
    await axios
      .get("https://tutorialapi1.herokuapp.com/tutorial")
      .then((res) => {
        //        console.log(res.data);
        settutorials(res.data);
      });
  };

  const deleteTutorial = async(id)=>{

    await axios.delete("https://tutorialapi1.herokuapp.com/tutorial/"+id).then(res=>{
        if(res.status=== 200){
            getAllTutorial()
        }
        else{
            //getAllTutorial()
            alert("Error")
        }
    })
  }
  return (
    <div>   
        {/* <button onClick={()=>{getAllTutorial()}}>
            get
        </button> */}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">TITLE</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">FEES</th>
            <th scope="col">Published???</th>
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
                <td>{tut.description}</td>
                <td>{tut.fees}</td>
                <td>
                    {
                        tut.published ? "published" : "not published"
                    }
                </td>
                <td>
                    <button className="btn btn-danger" onClick={()=>{deleteTutorial(tut.id)}}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
