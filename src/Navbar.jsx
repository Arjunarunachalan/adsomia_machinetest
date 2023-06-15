import React from "react";
import logo from "./resources/logo-01 (1).png";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-slate-50 p-4 h-[75px] drop-shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo w-[75px] ">
            <img src={logo} alt="" />
          </div>
          <ul className="flex items-start space-x-8">
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
