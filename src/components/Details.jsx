import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./bookdetails.css";

function Details() {
  const location = useLocation();
  const { bookDetails } = location.state || {}; // Get the passed book details
  const params = useParams();

  // Check if bookDetails exists and if the id matches the params
  if (!bookDetails || bookDetails.id != params.id) {
    return <div>No book found with this ID</div>;
  }

  return (
    <div className="detailsDiv">
      <h1 className="detail-heading">{bookDetails.title}</h1>
      <img className="detail-img" src={bookDetails.cover_image} alt={bookDetails.title} />
      <h2 className="detail-author">{bookDetails.author}</h2>
      <h2 className="detail-description"> {`Book Description: ${bookDetails.description}`}</h2>
      <button className="addToCartBtn">Add To Cart</button>
    </div>
  );
}

export default Details;
