import React, { useState, useEffect } from "react";
import BookTable from "./BookTable";
import { FaPlus } from "react-icons/fa";
import AddBookModal from "./AddBookModal"; // Import the AddBookModal
import axios from "axios";
import { REACT_APP_DJANGO_URL } from "../../constants/utils";

function BookList({ user }) {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || "toRead"
  );
  const [books, setBooks] = useState([]);

  // Fetch books on component mount
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${REACT_APP_DJANGO_URL}/api/books/`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setBooks(response.data);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };

    fetchBooks();
  }, []); // Empty dependency array ensures this runs once when component mounts

  const addBookAsync = async (newBookDetails) => {
    const response = await axios.post(
      `${REACT_APP_DJANGO_URL}/api/books/`,
      newBookDetails,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    setBooks([...books, response.data]);
  };

  const updateBookAsync = async (id, updatedDetails) => {
    try {
      await axios.patch(`${REACT_APP_DJANGO_URL}/api/books/` + id + "/", updatedDetails, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setBooks(
        books.map((book) =>
          book.id === id ? { ...book, ...updatedDetails } : book
        )
      );
    } catch (error) {
      console.error("Failed to update book:", error);
    }
  };

  const [filter, setFilter] = useState({
    title: "",
    author: "",
    priority: "",
  });

  const [sortField, setSortField] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");

  const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling modal visibility

  const addBook = (newBookDetails) => {
    addBookAsync(newBookDetails); // Store in backend and update state
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const changeStatus = (id, newStatus) => {
    updateBookAsync(id, { status: newStatus });
  };

  const changePriority = (id, newPriority) => {
    updateBookAsync(id, { priority: newPriority });
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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    localStorage.setItem("activeTab", tab); // Save the active tab state to localStorage
  };

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
          onClick={() => handleTabChange("toRead")}
        >
          Books To Read
        </button>
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === "read"
              ? "text-white bg-blue-600"
              : "text-blue-600 bg-white"
          } rounded-md`}
          onClick={() => handleTabChange("read")}
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
