import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../utils/bookSlice"; // Import action to add a book
import "./AddBookCom.css"; // Import the CSS file

function AddBookCom() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !genre || !description) {
      setError("All fields are required.");
      return;
    }
  
    const newBook = {
      id: Math.random(), // Generate a unique ID
      title,
      author,
      genre: [genre],
      description,
      cover_image: "https://via.placeholder.com/200",
    };
  
    // Dispatch action to add the new book to Redux store
    dispatch(addItem(newBook)); // Assuming `addItem` action adds to Redux store
  
    // Redirect to Browse Books page
    navigate("/browse");
  
    // Clear the form
    setTitle("");
    setAuthor("");
    setGenre("");
    setDescription("");
  };
  
  

  return (
    <div className="add-book">
      <h1>Add New Book</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="book-form">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter book title"
          />
        </div>

        <div className="form-group">
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter book author"
          />
        </div>

        <div className="form-group">
          <label>Genre:</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="Enter book genre"
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter book description"
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Add Book</button>
      </form>
    </div>
  );
}

export default AddBookCom;
