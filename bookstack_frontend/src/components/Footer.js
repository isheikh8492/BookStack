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

// TODO: Add a search bar to filter books by title or author
// TODO: Add a dropdown to edit priority and status
// TODO: Find a way to make title and author columns have same width despite long content
// TODO: Add a button to toggle between ascending and descending order
// TODO: Find a way to filter book titles or authors(by keyword match) in the table
// TODO: Plus icon should be disabled if title or author is empty
// TODO: There should only be plus icon on the top right column, only when will there will be a form to add a new book
// TODO: Add auth system to the app, Log out button can be on the Navbar on the right
