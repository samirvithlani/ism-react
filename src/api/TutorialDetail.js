import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const TutorialDetail = () => {
  var id = useParams().id;
  
  const [tutorial, settutorial] = useState();

  const getAllTutorialById = async () => {
    await axios
      .get("https://tutorialapi1.herokuapp.com/tutorial/" + id)
      .then((res) => {
        settutorial(res.data);
      });
  };

  useEffect(() => {
    getAllTutorialById();
  }, []);
var style = {
    width: "18rem"
}
  return (
    <div>
      {tutorial && tutorial !== undefined ? (
        <div class="card" style={style}>
          <div class="card-body">
            <h5 class="card-title">TITLE = {tutorial.title}</h5>
            <p class="card-text">DESCRIPTION = {tutorial.description}</p>
            <p class="card-text">FEES = {tutorial.fees}</p>
            <p class="card-text">PUBLISHED {tutorial.published?"TRUE":"FALSE"}</p>
          </div>
        </div>
      ) : (
        "NO DATA"
      )}
    </div>
  );
};
