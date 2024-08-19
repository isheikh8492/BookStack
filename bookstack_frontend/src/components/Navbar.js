import React from "react";
// import { ReactComponent as Logo } from "../assets/logo-no-background.svg";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        {/* <Logo className="h-8 w-auto" /> */}
        <div className="text-white">BookStack</div>
      </div>
    </nav>
  );
}

export default Navbar;
