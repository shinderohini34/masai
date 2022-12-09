import {Link,NavLink} from "react-router-dom"

const links = [
  { path:"/", text:"Home"},
  { path:"/about", text:"About"},
  { path:"/contact", text:"Contact"},
  {path:"/user", text:"User"}
];


function Navbar()
{
  const defaultStyle = {
    color:"red",
    textDecoration:"none"
  };

  const activeStyle = {
    color:"green",
    textDecoration:"none"
  }
  return(
    <div
    style={
      {
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
      }
      }>
      {links.map((link)=>(
          <NavLink
          style={({isActive})=>{
            return isActive ? activeStyle : defaultStyle;
          }} 
          
          key={link.path} to={link.path}>
            {link.text}
          </NavLink>
        ))
      }
      

    </div>
    )
}
export default Navbar;


/*
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
*/