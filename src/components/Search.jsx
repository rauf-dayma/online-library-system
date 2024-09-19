import "./search.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookList from "./BookList";
import { setBooks } from "../utils/bookSlice"; // Import setBooks action

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useDispatch();

  const allBooks = useSelector((state) => state.book.items); // Get books from Redux
  const [filteredBooks, setFilteredBooks] = useState([]); // Filtered books

  const categories = ["Fiction", "Fantasy", "Romance", "Mystery", "Classic"];

  // Handle search logic based on the search query and category
  const handleSearch = () => {
    const matchingBooks = allBooks.filter((book) => {
      const matchesTitle = book.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory
        ? book.genre.some((genre) => genre.toLowerCase() === selectedCategory.toLowerCase())
        : true;
      return matchesTitle && matchesCategory;
    });

    setFilteredBooks(matchingBooks);
  };

  const fetchBooksFromAPI = async () => {
    try {
      const response = await fetch("https://freetestapi.com/api/v1/books");
      const booksData = await response.json();
      dispatch(setBooks(booksData)); // Dispatch the fetched books to Redux
    } catch (error) {
      console.error("Failed to fetch books:", error);
    }
  };

  // Fetch books from the API and dispatch to Redux when the component mounts
  useEffect(() => {
    fetchBooksFromAPI();
  }, [dispatch]);

  // Update filteredBooks whenever allBooks change
  useEffect(() => {
    handleSearch();
  }, [ searchQuery, selectedCategory]);

  return (
    <>
      <div className="search">
        <h1>Search Book</h1>

        <div className="search-input-container">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search Book Here"
            className="search-input"
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          />

          {/* Category Dropdown */}
          <select
            className="category-select"
            onChange={(e) => setSelectedCategory(e.target.value)} // Update selected category
            value={selectedCategory}
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>

          <button className="searchBtn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {/* Pass the filteredBooks array to the BookList component */}
      <BookList booksData={filteredBooks} />
    </>
  );
}

export default Search;
