import React from "react";
import BookItem from "./BookItem";

function BookTable({ books, onDelete, onChangeStatus, onChangePriority }) {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6 text-center">
              Title
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              Author
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              Priority
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              Status
            </th>
            <th scope="col" className="py-3 px-6 text-center"></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onDelete={onDelete}
              onChangeStatus={onChangeStatus}
              onChangePriority={onChangePriority}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookTable;
