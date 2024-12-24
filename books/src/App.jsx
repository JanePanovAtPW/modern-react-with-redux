import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const handleCreateBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });
    const updatedBooks = [...books, response.data];

    setBooks(updatedBooks);
    // const updatedBooks = [
    //   ...books,
    //   { id: Math.round(Math.random() * 9999), title: title },
    // ];

    // setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList
        books={books}
        onDeleteBook={deleteBookById}
        onEditBook={editBookById}
      />
      <BookCreate onCreateBook={handleCreateBook} />
    </div>
  );
}

export default App;
