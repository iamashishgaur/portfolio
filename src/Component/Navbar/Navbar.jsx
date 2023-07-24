import React, { useState } from "react";
import "./Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { MenuData } from "./MenuData";
import logo from "../../Assets/Image/logo.png";

const Navbar = () => {
  const [isMobile, setMobile] = useState(false);

  const handleclick = () => setMobile(!isMobile);
  return (
    <>
      <nav className="NavbarItems">
        <h1 className="logo">
          <NavLink className="logolink" to="/">
            Ashish <span>Kumar</span>
          </NavLink>
        </h1>
        <div className="menu-icons" onClick={handleclick}>
          {isMobile ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
        <ul className={isMobile ? "nav-menu active" : "nav-menu"}>
          {MenuData.map((item, index) => {
            return (
              <li key={index} onClick={handleclick}>
                <NavLink className={item.cName} to={item.path}>
                  {item.icon}
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
