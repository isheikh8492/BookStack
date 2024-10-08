import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 p-3 mt-auto text-white">
            <div className="flex justify-between items-center">
                <span>
                    &copy; {currentYear} Imaduddin Sheikh. All rights reserved.
                </span>
                <div className="flex space-x-4">
                    <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


// TODO: Add a button to toggle between ascending and descending order
// TODO: Users should be able to be registered on frontend and Django should have user info on backend
// TODO: Link books to users so that each user can have their own list of books
