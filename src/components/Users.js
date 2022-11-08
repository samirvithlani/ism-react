import React, { useState } from "react";
import { UserList } from "./UserList";

export const Users = (props) => {
  var x = 100;

  var userData = [
    {
      name: "ajay",
      age: 20,
      isActive: true,
    },
    {
      name: "raj",
      age: 25,
      isActive: false,
    },
  ]
  var [users, setusers] = useState(userData);

  const deletData = (user) => {
    console.log("before filter", users);

    //2 data --> 1 remove
    
    users = users.filter((u) => {
      return u.name != user.name;
    });
    setusers(users);

    console.log("after filter", users);
  };

  return (
    <div>
      <h1>USER COMPONENT</h1>
      <UserList users={users} t1={props.title} deleteData={deletData} />
    </div>
  );
};
