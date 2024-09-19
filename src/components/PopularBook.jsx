import { PopularBooks } from "../utils/MockData";
import "./bookStyle.css"
import { Link } from "react-router-dom";

function PopularBook() {
  return (
    <div className="book-list-container">
      {PopularBooks.map((book) => (
        <div className="book-card" key={book.id}>
          <img
            src={book.coverImage}
            alt={book.title}
            className="book-cover"
          />
          <div className="book-details">
            <h2 className="book-title">{book.title}</h2>
            <p className="book-author">{book.author}</p>
           <Link  to={`/book/${book.id}`}> <p>view more details</p></Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PopularBook;
