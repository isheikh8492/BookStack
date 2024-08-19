import React from "react";
import logo from "../assets/logo-no-background.png";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center">
        <img src={logo} alt="BookStack Logo" className="h-12 w-auto" />
        {/* <span className="text-white text-2xl ml-4">BookStack</span> */}
      </div>
    </nav>
  );
}

export default Navbar;
