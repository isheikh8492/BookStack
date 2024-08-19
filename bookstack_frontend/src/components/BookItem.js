import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function BookItem({ book, onDelete, onToggleRead }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md mb-4">
      <div>
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-sm text-gray-600">{book.author}</p>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={book.isRead}
          onChange={() => onToggleRead(book.id)}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <FaTrashAlt
          className="text-red-500 cursor-pointer"
          onClick={() => onDelete(book.id)}
        />
      </div>
    </div>
  );
}

export default BookItem;
