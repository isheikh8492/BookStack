import React from "react";
import { FaTrashAlt } from "react-icons/fa";

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

function BookItem({ book, onDelete, onChangeStatus }) {
  const cycleStatus = () => {
    const statuses = ["In Queue", "Reading", "Completed"];
    const currentIndex = statuses.indexOf(book.status);
    const nextIndex = (currentIndex + 1) % statuses.length;
    onChangeStatus(book.id, statuses[nextIndex]);
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
        {book.title}
      </td>
      <td className="py-4 px-6">{book.author}</td>
      <td className="py-4 px-6">
        <span
          className={`inline-block px-2 py-1 text-white text-sm font-semibold rounded ${
            priorityColors[book.priority]
          }`}
        >
          {book.priority}
        </span>
      </td>
      <td className="py-4 px-6">
        <span
          onClick={cycleStatus}
          className={`inline-block px-2 py-1 text-white text-sm font-semibold rounded cursor-pointer transition-transform transform hover:scale-105 ${
            statusColors[book.status]
          }`}
        >
          {book.status}
        </span>
      </td>
      <td className="py-4 px-6 text-right">
        <FaTrashAlt
          className="text-red-500 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => onDelete(book.id)}
        />
      </td>
    </tr>
  );
}

export default BookItem;
