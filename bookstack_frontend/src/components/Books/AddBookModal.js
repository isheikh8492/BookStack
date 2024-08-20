import React, { useState } from "react";

function AddBookModal({ isOpen, onClose, onSave }) {
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    priority: "",
    status: "In Queue",
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({ ...bookDetails, [name]: value });
  };

  const handleSave = () => {
    onSave(bookDetails);
    onClose(); // Close the modal after saving
  };

  // Check if all fields are filled
  const isSaveDisabled =
    !bookDetails.title || !bookDetails.author || !bookDetails.priority;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-semibold mb-4">Add New Book</h2>
        <div className="mb-4">
          <input
            type="text"
            name="title"
            value={bookDetails.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="w-full p-2 mb-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="author"
            value={bookDetails.author}
            onChange={handleInputChange}
            placeholder="Author"
            className="w-full p-2 mb-2 border border-gray-300 rounded-md"
          />
          <select
            name="priority"
            value={bookDetails.priority}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded-md text-gray-500"
          >
            <option value="" disabled hidden>
              Priority
            </option>
            <option className="text-gray-900" value="Low">
              Low
            </option>
            <option className="text-gray-900" value="Medium">
              Medium
            </option>
            <option className="text-gray-900" value="High">
              High
            </option>
          </select>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className={`px-4 py-2 rounded-md text-white hover:bg-blue-600 ${
              isSaveDisabled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={isSaveDisabled}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddBookModal;
