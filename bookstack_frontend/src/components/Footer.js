import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 p-4 mt-auto">
      <div className="flex justify-between items-center text-white">
        <span>Created by Imaduddin Sheikh</span>
        <div className="flex space-x-4">
          <a
            href="https://github.com/isheikh8492"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/imaduddin-sheikh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
