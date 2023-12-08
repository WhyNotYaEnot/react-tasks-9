import React, { useState } from 'react';
import fetchData from '../utils/api';

const ApiData = () => {
  const [data, setData] = useState([]);

  const handleFetchData = async () => {
    try {
      const apiUrl = 'https://api.artic.edu/api/v1/artworks';
      const result = await fetchData(apiUrl);

      if (Array.isArray(result.data)) {
        setData(result.data);
      } else {
        console.error('Invalid data format:', result);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={handleFetchData}>Fetch Data</button>
      <ul>
        {data.map((item) => (
          <ApiItem key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
};

const ApiItem = ({ data }) => (
  <li>
    <p>ID: {data.id}</p>
    <p>Title: {data.title}</p>
  </li>
);

export default ApiData;
