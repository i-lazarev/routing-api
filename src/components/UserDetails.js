import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = (props) => {
  const { id } = useParams(id);
  console.log(id);
  return <div></div>;
};

export default UserDetails;
