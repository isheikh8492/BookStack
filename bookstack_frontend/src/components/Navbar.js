import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirecting
import logo from "../assets/logo-no-background.png";

function Navbar({ firstName, onLogout }) {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the JWT token from localStorage
    onLogout(); // Call the logout handler to update the app state
    navigate("/login"); // Redirect the user to the login page
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="BookStack Logo" className="h-12 w-auto" />
      </div>
      <div className="flex items-center space-x-6">
        <span className="text-white text-lg font-semibold italic">
          Hello, <span className="text-blue-200">{firstName}</span>
        </span>
        <button
          onClick={handleLogout} // Use the handleLogout function here
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Log Out
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
