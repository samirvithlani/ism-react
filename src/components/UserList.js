import React from "react";

export const UserList = (props) => {
  return (
    <div>
      <h1>USER LIST</h1>

      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">age</th>
            <th scope="col">isActive</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
          props.users ? (
            props.users.map((user) => {
              return (
                <tr>
                  <th scope="row">{user.name}</th>
                  <td>{user.age}</td>
                  <td>{user.isActive ? "Yes" : "No"}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        props.deleteData(user);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <h1>NO data</h1>
          )}
        </tbody>
      </table>
    </div>
  );
};
