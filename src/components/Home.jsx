import { Link } from "react-router-dom";
import PopularBook from "./PopularBook";
import "./homeStyle.css"

// Images for each category
const categoryImages = {
  Fiction: "https://t3.ftcdn.net/jpg/05/58/40/78/240_F_558407840_csOaCfDNqX8ymd5i4LQchYb3na8HwkQd.jpg",
  "Non-Fiction": "https://t4.ftcdn.net/jpg/07/75/62/31/240_F_775623159_tXldqD9EowsbSmUZeWr4XNBsSOKQX9XD.jpg",
  "Sci-Fi": "https://t4.ftcdn.net/jpg/08/67/14/49/240_F_867144967_Ubx8UjAOzlgH1N18o20dC9SFA4yCfs70.jpg",
  Mystery: "https://t3.ftcdn.net/jpg/07/57/03/54/240_F_757035430_OXt7MVfauTMH7XssE5sQKYMjTlvK6Xdp.jpg",
};

function Home() {
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery'];

  return (
    <div>
      {/* Welcome Message */}
      <h1>Welcome to the Online Library</h1>

      {/* Book Categories */}
      <section>
        <h2>Categories</h2>
        <div className="categories-container">
          {categories.map((category, index) => (
           <div className="category-card" key={index}>
            <img src={categoryImages[category]} alt={category} />
            <div className="category-overlay">{category}</div>
          </div>
          ))}
        </div>
      </section>

      {/* Popular Books */}
      <section>
        <h2>Popular Books</h2>
        <PopularBook />
      </section>
    </div>
  );
};

export default Home;
