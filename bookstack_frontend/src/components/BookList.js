import React, { useState } from "react";
import BookTable from "./BookTable";
import { FaPlus } from "react-icons/fa";
import AddBookModal from "./AddBookModal"; // Import the AddBookModal

function BookList() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Book 1",
      author: "Author 1",
      priority: "High",
      status: "In Queue",
    },
    {
      id: 2,
      title: "Book 2",
      author: "Author 2",
      priority: "Medium",
      status: "Reading",
    },
  ]);

  const [filter, setFilter] = useState({
    title: "",
    author: "",
    priority: "",
  });

  const [activeTab, setActiveTab] = useState("toRead");
  const [sortField, setSortField] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");

  const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling modal visibility

  const addBook = (newBookDetails) => {
    setBooks([...books, { id: Date.now(), ...newBookDetails, isRead: false }]);
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

  const changePriority = (id, newPriority) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, priority: newPriority } : book
      )
    );
  };


  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
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

  const filteredBooks = books.filter((book) => {
    return (
      (filter.title === "" ||
        book.title.toLowerCase().includes(filter.title.toLowerCase())) &&
      (filter.author === "" ||
        book.author.toLowerCase().includes(filter.author.toLowerCase())) &&
      (filter.priority === "" || book.priority === filter.priority) &&
      (activeTab === "toRead"
        ? book.status !== "Completed"
        : book.status === "Completed")
    );
  });

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

      {/* Filters */}
      <div className="flex mb-4 space-x-4 items-center">
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={filter.title}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded-md h-12 flex-grow"
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={filter.author}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded-md h-12 flex-grow"
        />
        <select
          name="priority"
          value={filter.priority}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded-md h-12 text-gray-500"
        >
          <option value="" className="text-gray-400">
            Priority
          </option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        {/* Add New Book Button */}
        <button
          onClick={() => setIsModalOpen(true)} // Open modal on click
          className="bg-blue-500 text-white rounded-md hover:bg-blue-600 w-12 h-12 flex items-center justify-center"
        >
          <FaPlus />
        </button>
      </div>

      {/* Table to display books */}
      <BookTable
        books={sortBooks(filteredBooks)}
        onDelete={deleteBook}
        onChangeStatus={changeStatus}
        onChangePriority={changePriority}
      />

      {/* Add Book Modal */}
      <AddBookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addBook}
      />
    </div>
  );
}

export default BookList;
