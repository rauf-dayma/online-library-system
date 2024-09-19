import { useParams } from "react-router-dom";
import { PopularBooks } from "../utils/MockData";
import "./bookdetails.css";

function BookDetails() {
  const params = useParams();
  const book = PopularBooks.filter((Book) => Book.id == params.id);

 
  console.log("title", book);
  console.log(params.id);

  return book.map((book) => {
    return (
      <div className="detailsDiv">
        <h1 className="detail-heading">{book.title}</h1>
        <img className="detail-img" src={book.coverImage} alt="" />
        <h2 className="detail-author">{book.author}</h2>
        <h2 className="detail-description"> {`Book Description: ${book.description}`}</h2>

        <button className="addToCartBtn" >Add To Cart</button>
      </div>
    );
  });
}

export default BookDetails;
