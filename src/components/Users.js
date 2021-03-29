import React, { useState, useEffect } from "react";
import { getUsers } from "../api/index";
import { Link } from "react-router-dom";

const Users = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      props.users(data);
    });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default Users;
