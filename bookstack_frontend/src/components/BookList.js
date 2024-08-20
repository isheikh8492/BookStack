import React, { useState } from "react";
import BookTable from "./BookTable";
import { FaPlus } from "react-icons/fa";

function BookList() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Book 1",
      author: "Author 1",
      isRead: false,
      priority: "High",
      status: "In Queue",
    },
    {
      id: 2,
      title: "Book 2",
      author: "Author 2",
      isRead: true,
      priority: "Medium",
      status: "Reading",
    },
  ]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    priority: "Low",
    status: "In Queue",
  });
  const [activeTab, setActiveTab] = useState("toRead");
  const [sortField, setSortField] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");

  const addBook = () => {
    setBooks([...books, { id: Date.now(), ...newBook, isRead: false }]);
    setNewBook({ title: "", author: "", priority: "Low", status: "In Queue" });
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const changeStatus = (id, newStatus) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, status: newStatus } : book
      )
    );
  };

  const sortBooks = (books) => {
    return books.sort((a, b) => {
      const aValue = a[sortField].toLowerCase();
      const bValue = b[sortField].toLowerCase();

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  };

  const filteredBooks =
    activeTab === "toRead"
      ? books.filter((book) => book.status !== "Completed")
      : books.filter((book) => book.status === "Completed");

  return (
    <div className="container mx-auto p-4">
      {/* Tabs */}
      <div className="flex mb-4">
        <button
          className={`px-4 py-2 mr-2 font-semibold ${
            activeTab === "toRead"
              ? "text-white bg-blue-600"
              : "text-blue-600 bg-white"
          } rounded-md`}
          onClick={() => setActiveTab("toRead")}
        >
          Books To Read
        </button>
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === "read"
              ? "text-white bg-blue-600"
              : "text-blue-600 bg-white"
          } rounded-md`}
          onClick={() => setActiveTab("read")}
        >
          Books Read
        </button>
      </div>

      {/* Input for adding a new book */}
      {activeTab === "toRead" && (
        <div className="mb-4">
          <div className="flex space-x-2 mb-4">
            <input
              type="text"
              placeholder="Title"
              value={newBook.title}
              onChange={(e) =>
                setNewBook({ ...newBook, title: e.target.value })
              }
              className="p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Author"
              value={newBook.author}
              onChange={(e) =>
                setNewBook({ ...newBook, author: e.target.value })
              }
              className="p-2 border border-gray-300 rounded-md"
            />
            <select
              value={newBook.priority}
              onChange={(e) =>
                setNewBook({ ...newBook, priority: e.target.value })
              }
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <button
              onClick={addBook}
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-10 h-10 flex items-center justify-center"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      )}

      {/* Table to display books */}
      <BookTable
        books={sortBooks(filteredBooks)}
        onDelete={deleteBook}
        onChangeStatus={changeStatus}
      />
    </div>
  );
}

export default BookList;
