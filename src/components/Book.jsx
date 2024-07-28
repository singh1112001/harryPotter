import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Book = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://potterapi-fedeperin.vercel.app/en/books');
        setBooks(response.data);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={styles.container}>
      {books.map((book, index) => (
        <div key={index} style={styles.card}>
          <img src={book.cover} alt={book.title} style={styles.cover} />
          <h3>{book.title}</h3>
          <p><strong>Original Title:</strong> {book.originalTitle}</p>
          <p><strong>Release Date:</strong> {book.releaseDate}</p>
          {/* <p>{book.description}</p>
          <p><strong>Pages:</strong> {book.pages}</p> */}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px',
    width: '300px',
    boxShadow: '2px 2px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  cover: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  },
};

export default Book;
