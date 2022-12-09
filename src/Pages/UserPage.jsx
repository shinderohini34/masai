import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
function UserPage()
{
  const [data,setData] = useState({});

  useEffect(()=>{
    fetch(`https://reqres.in/api/users?page=1`)
    .then((res) => res.json())
    .then((res) => setData(res))
    .catch((err) => console.log(err))
  }, [])
  return(
    <>
    <h1>User Page</h1>
    {
      data && data?.data && data?.data?.map((user)=>(
        <p key={user.id}>
          {user.id} - 
          <Link to={`/user/${user.id}`}>{user.first_name} {user.last_name}</Link>
        </p>
      ))
    }
    </>
  )

}
export default UserPage;