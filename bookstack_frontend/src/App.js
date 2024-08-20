import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import BookList from "./components/Books/BookList";
import Footer from "./components/Footer";
import LoginPage from "./components/Auth/LoginPage";
import RegisterPage from "./components/Auth/RegisterPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Optionally, fetch user info from your API
      const fetchUserInfo = async () => {
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/user/", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(response.data); // Update with actual user data
        } catch (err) {
          console.error("Failed to fetch user info", err);
          setUser(null);
        }
      };
      fetchUserInfo();
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null); // Reset the user state
  };

  if (!user) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route
            path="/signup"
            element={<RegisterPage onRegister={handleLogin} />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar firstName={user.first_name} onLogout={handleLogout} />
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
