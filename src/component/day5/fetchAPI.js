
import React, { useState, useEffect } from 'react';

export const FetchAPI = () => {
  // State to hold the fetched data
  const [data, setData] = useState(null);
  // State to indicate loading state
  const [isLoading, setIsLoading] = useState(true);
  // State to handle errors
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Set loading state to true while fetching
        setIsLoading(true);
        // Make a GET request using Fetch API
        const response = await fetch('https://api.example.com/data');
        // Check if the response is successful
        if (!response.ok) {
          // If response is not ok, throw an error
          throw new Error('Failed to fetch data');
        }
        // Parse the JSON response
        const result = await response.json();
        // Update the state with the fetched data
        setData(result);
        // Set loading state to false
        setIsLoading(false);
      } catch (error) {
        // If an error occurs, update the error state
        setError(error);
        // Set loading state to false
        setIsLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Clean up function to cancel any pending requests
    return () => {
      // This will run when the component is unmounted or before the effect runs again
      // Here, you can cancel any ongoing requests or clean up any subscriptions
    };
  }, []); // The empty dependency array ensures that this effect runs only once after the initial render

  // Render loading state if data is still being fetched
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render error message if an error occurred during fetching
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Render the fetched data
  return (
    <div>
      <h1>Fetched Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};


