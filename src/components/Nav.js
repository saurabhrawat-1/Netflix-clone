import React, { useState, useEffect } from "react";
import pic from "../Assets/Netflix-logo.png";
import img from "../Assets/avatar.png";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__dark"}`}>
      <img className="nav__logo" src={pic} alt="Netflix Logo" />
      <img className="nav__avatar" src={img} alt="User Profile" />
    </div>
  );
}

export default Nav;
