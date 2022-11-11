import React from "react";

export const Header = () => {
  var name = "raj";
  var age = 25;
  var isMarried = true;
  var salary = 12345.6;
  var style = {
    color: "red",
    fontSize: "20px",
  };
  return (
    <div>
      {/* <h1 className="header"></h1>
      <h1>Name = {name}</h1>
      <h2>age = {age}</h2>
      <h3 style={style}>isMarried = {isMarried ? "YES" : "NO"}</h3>
      <h4>salary = {salary}</h4> */}
      <h1>
        Header
      </h1>
    </div>
  );
};
