import React from "react";

const Users = () => {
  let userArray;
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => (userArray = users));

  return (
    <div>
      {userArray.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  );
};

export default Users;
