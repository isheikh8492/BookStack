import React from "react";
import BookItem from "./BookItem";

function BookTable({ books, onDelete, onChangeStatus }) {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Title
            </th>
            <th scope="col" className="py-3 px-6">
              Author
            </th>
            <th scope="col" className="py-3 px-6">
              Priority
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
            <th scope="col" className="py-3 px-6"></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onDelete={onDelete}
              onChangeStatus={onChangeStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookTable;
