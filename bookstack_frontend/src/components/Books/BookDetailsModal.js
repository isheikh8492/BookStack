import React from "react";
import { FaTimes } from "react-icons/fa";

function BookDetailsModal({ isOpen, onClose, book }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 transform transition-transform duration-300 ease-in-out scale-105">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-extrabold text-gray-800">
            Book Details
          </h2>
          <FaTimes
            className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors duration-200"
            onClick={onClose}
            size={20}
          />
        </div>
        <div className="mb-6">
          <div className="flex items-center">
            <h3 className="text-base font-semibold text-gray-500 w-20">
              Title:
            </h3>
            <p className="text-xl text-gray-900 font-medium flex-grow">
              {book.title}
            </p>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center">
            <h3 className="text-base font-semibold text-gray-500 w-20">
              Author:
            </h3>
            <p className="text-xl text-gray-900 font-medium flex-grow">
              {book.author}
            </p>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center">
            <h3 className="text-base font-semibold text-gray-500 w-20">
              Priority:
            </h3>
            <p className="text-xl text-gray-900 font-medium flex-grow">
              {book.priority}
            </p>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center">
            <h3 className="text-base font-semibold text-gray-500 w-20">
              Status:
            </h3>
            <p className="text-xl text-gray-900 font-medium flex-grow">
              {book.status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetailsModal;
