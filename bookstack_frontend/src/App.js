import "./App.css";
import Navbar from "./components/Navbar";
import BookList from "./components/Books/BookList";
import Footer from "./components/Footer";
import LoginPage from "./components/Auth/LoginPage";
import RegisterPage from "./components/Auth/RegisterPage";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "flowbite/dist/flowbite.min.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Optionally, fetch user info from your API
      setUser({ name: "User Name" }); // Replace with actual user data
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleRegister = (userData) => {
    setUser(userData);
  };

  if (!user) {
    return (
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-100">
          <Routes>
            <Route
              path="/signup"
              element={<RegisterPage onRegister={handleRegister} />}
            />
            <Route
              path="/login"
              element={<LoginPage onLogin={handleLogin} />}
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/books" element={<BookList user={user} />} />
          <Route path="*" element={<Navigate to="/books" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
