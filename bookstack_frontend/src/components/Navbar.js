import React from "react";
import logo from "../assets/logo-no-background.png";

function Navbar({ firstName, onLogout }) {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="BookStack Logo" className="h-12 w-auto" />
      </div>
      <div className="flex items-center space-x-6">
        <span className="text-white text-lg font-semibold italic">
          Hello, <span className="text-blue-200">Imaduddin</span>
        </span>
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Log Out
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
