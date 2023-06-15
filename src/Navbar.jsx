import React from "react";
import logo from "./resources/logo-01 (1).png";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-400 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo w-[100px]">
            <img src={logo} alt="" />
          </div>
          <ul className="flex items-center space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
