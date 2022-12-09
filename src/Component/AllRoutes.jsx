import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import { Routes, Route } from "react-router-dom";
import SingleUser from "../Pages/SingleUserPage";
import UserPage from "../Pages/UserPage";
import NotFound from "../Pages/NotFound";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/:id" element={<SingleUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default AllRoutes;
