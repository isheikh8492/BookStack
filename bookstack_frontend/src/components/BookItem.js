import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import ConfirmationModal from "./ConfirmationModal"; // Import the modal

const statusColors = {
  "In Queue": "bg-yellow-500",
  Reading: "bg-blue-500",
  Completed: "bg-green-500",
};

const priorityColors = {
  Low: "bg-green-500",
  Medium: "bg-yellow-500",
  High: "bg-red-500",
};

function BookItem({ book, onDelete, onChangeStatus, onChangePriority }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to cycle through statuses
  const cycleStatus = () => {
    const statuses = ["In Queue", "Reading", "Completed"];
    const currentIndex = statuses.indexOf(book.status);
    const nextIndex = (currentIndex + 1) % statuses.length;
    onChangeStatus(book.id, statuses[nextIndex]);
  };

  // Function to cycle through priorities
  const cyclePriority = () => {
    const priorities = ["Low", "Medium", "High"];
    const currentIndex = priorities.indexOf(book.priority);
    const nextIndex = (currentIndex + 1) % priorities.length;
    onChangePriority(book.id, priorities[nextIndex]);
  };

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    onDelete(book.id);
    setIsModalOpen(false);
  };

  const tagStyles =
    "inline-block w-24 p-1 text-center text-white text-sm font-semibold rounded cursor-pointer";

  return (
    <>
      <tr className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-shadow shadow-sm hover:shadow-md rounded-lg">
        <td className="py-4 px-6 text-center text-gray-900 whitespace-nowrap dark:text-white">
          <div
            className="overflow-hidden text-ellipsis whitespace-nowrap max-w-xs"
            title={book.title}
          >
            {book.title}
          </div>
        </td>
        <td className="py-4 px-6 text-center">
          <div
            className="overflow-hidden text-ellipsis whitespace-nowrap max-w-xs"
            title={book.author}
          >
            {book.author}
          </div>
        </td>
        <td className="py-4 px-6 text-center">
          <span
            onClick={cyclePriority}
            className={`${tagStyles} ${priorityColors[book.priority]}`}
          >
            {book.priority}
          </span>
        </td>
        <td className="py-4 px-6 text-center">
          <span
            onClick={cycleStatus}
            className={`${tagStyles} ${
              statusColors[book.status]
            } transition-transform transform hover:scale-105`}
          >
            {book.status}
          </span>
        </td>
        <td className="py-4 px-6 text-right">
          <FaTrashAlt
            className="text-red-500 cursor-pointer hover:scale-105 transition-transform"
            onClick={handleDeleteClick}
          />
        </td>
      </tr>
      {/* Modal for confirming delete */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}

export default BookItem;
