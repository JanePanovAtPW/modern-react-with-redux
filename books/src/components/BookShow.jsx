import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDeleteBook, onEditBook }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteBook = () => {
    onDeleteBook(book.id);
  };

  const handleEditBook = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEditBook(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditBook}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteBook}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
