import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Style } from "./style";
import github from "../../assets/github.png";

const Navbar = ({ state }) => {
  const location = useLocation();

  return (
    <Style style={state === true ? { left: "0%" } : {}}>
      <NavLink to="/" className={"name"}>
       <img style="width:30px; height:30px; border-radius:50%;"

      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      /> Mansur Fayziev
      </NavLink>
      <div className="links">
        <NavLink
          to="/about"
          className={location.pathname === "/about" ? "act" : ""}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={location.pathname === "/projects" ? "act" : ""}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={location.pathname === "/contact" ? "act" : ""}
        >
          Contact
        </NavLink>
      </div>
      <div className="github">
        <a href="https://github.com/mansurfayziev" className="gitlink">
          <img src={github} />
          GitHub
        </a>
      </div>
    </Style>
  );
};

export default Navbar;
