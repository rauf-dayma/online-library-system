import { Link } from "react-router-dom";
import Book from "./Book";

function BookList(props) {
  return (
    <div className="book-list">
      {props.booksData.map((data) => (
        <Book key={data.id} bookDetails={data} />
      ))}
    </div>
  );
}

export default BookList;
