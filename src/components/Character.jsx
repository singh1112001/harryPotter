import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Character = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://potterapi-fedeperin.vercel.app/en/characters');
        setCharacters(response.data);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={styles.container}>
      {characters.map((character, index) => (
        <div key={index} style={styles.card}>
          <img src={character.image} alt={character.fullName} style={styles.image} />
          <h3>{character.fullName}</h3>
          <p><strong>Nickname:</strong> {character.nickname}</p>
          <p><strong>House:</strong> {character.hogwartsHouse}</p>
          <p><strong>Interpreted by:</strong> {character.interpretedBy}</p>
          <p><strong>Birthdate:</strong> {character.birthdate}</p>
          {/* <p><strong>Children:</strong> {character.children.join(', ')}</p> */}
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
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  },
};

export default Character;
