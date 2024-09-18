function Home() {
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery'];
  const popularBooks = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'Dune', author: 'Frank Herbert' },
  ];

  return (
    <div>
      {/* Welcome Message */}
      <h1>Welcome to the Online Library</h1>

      {/* Book Categories */}
      <section>
        <h2>Categories</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </section>

      {/* Popular Books */}
      <section>
        <h2>Popular Books</h2>
        <ul>
          {popularBooks.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author}
              {' - '}
              <Link to={`/book/${book.id}`}>View More Details</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
