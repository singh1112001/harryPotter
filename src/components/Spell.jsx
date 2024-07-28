import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Spell = () => {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await axios.get('https://potterapi-fedeperin.vercel.app/en/spells');
        setSpells(response.data);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchSpells();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={styles.container}>
      {spells.map((spell, index) => (
        <div key={index} style={styles.card}>
          <h3>{spell.spell}</h3>
          <p>{spell.use}</p>
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
    width: '200px',
    boxShadow: '2px 2px 12px rgba(0,0,0,0.1)',
  },
};

export default Spell;

