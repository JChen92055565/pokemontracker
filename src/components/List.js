import React, { useState, useEffect } from 'react';

const List = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/items'); // Update with your endpoint
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div>
      <h2>List of Items</h2>
      {items.map((item) => (
        <div key={item._id}>{/* Display your item data here */}</div>
      ))}
    </div>
  );
};

export default List;