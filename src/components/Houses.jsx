import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Houses = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await axios.get('https://potterapi-fedeperin.vercel.app/en/houses');
        setHouses(response.data);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchHouses();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={styles.container}>
      {houses.map((house, index) => (
        <div key={index} style={styles.card}>
          <h3>{house.emoji} {house.house}</h3>
          <p><strong>Founder:</strong> {house.founder}</p>
          <p><strong>Animal:</strong> {house.animal}</p>
          <p><strong>Colors:</strong> {house.colors.join(', ')}</p>
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
    width: '250px',
    boxShadow: '2px 2px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  cardHover: {
    transform: 'translateY(-5px)',
  },
};

export default Houses;
