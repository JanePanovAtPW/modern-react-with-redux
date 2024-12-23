import { useState } from "react";

function BookCreate({ onCreateBook }) {
  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreateBook(title);

    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleTitleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
