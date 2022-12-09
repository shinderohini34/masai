import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";

function SingleUser() {
  const { id } = useParams();
  const [userDetails, setuserDetails] = useState({});

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((res) => setuserDetails(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const { first_name, last_name, email, avatar } = userDetails;

  return (
    <>
      <h1>Single User Page</h1>
      <img src={avatar} alt={first_name} />
      <p>
        {first_name} {"--"} {last_name}
      </p>
      <p>{email}</p>
    </>
  );
}
export default SingleUser;
