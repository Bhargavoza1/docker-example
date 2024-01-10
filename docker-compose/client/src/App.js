import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/');
        setApiData(response.data);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchData();
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <h1>{apiData ? apiData : 'Loading...'}</h1>
        </header>
      </div>
  );
}

export default App;
