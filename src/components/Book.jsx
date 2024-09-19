import "./book.css"
import { Link } from "react-router-dom";
import Details from "./details";

function Book(props) {
  return (
      <div className="book-card">
        <img
          src={props.bookDetails.cover_image}
          alt=""
          width="200px"
          height="200px"
          className="book-cover"
        />
        <div className="book-details">
          <h2 className="book-title">{props.bookDetails.title}</h2>
          <p className="book-author">{props.bookDetails.author}</p>
          <Link to={`/details/${props.bookDetails.id}`} state={{ bookDetails: props.bookDetails }}>
          <p>View more details</p>
        </Link>

        </div>
      </div>
  );
}
export default Book;
