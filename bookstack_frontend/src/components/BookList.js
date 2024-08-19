import React, { useState } from "react";
import BookItem from "./BookItem";
import { FaPlus } from "react-icons/fa";

function BookList() {
  const [books, setBooks] = useState([
    // Example books, you can start with an empty array
    { id: 1, title: "Book 1", author: "Author 1", isRead: false },
    { id: 2, title: "Book 2", author: "Author 2", isRead: false },
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const addBook = () => {
    setBooks([...books, { id: Date.now(), ...newBook, isRead: false }]);
    setNewBook({ title: "", author: "" });
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const toggleRead = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, isRead: !book.isRead } : book
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Books To Read</h2>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            placeholder="Title"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
            className="p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Author"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
            className="p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={addBook}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            <FaPlus />
          </button>
        </div>
        {books
          .filter((book) => !book.isRead)
          .map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onDelete={deleteBook}
              onToggleRead={toggleRead}
            />
          ))}
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Books Read</h2>
        {books
          .filter((book) => book.isRead)
          .map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onDelete={deleteBook}
              onToggleRead={toggleRead}
            />
          ))}
      </div>
    </div>
  );
}

export default BookList;
