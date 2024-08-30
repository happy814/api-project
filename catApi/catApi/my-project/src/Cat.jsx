import React, { useState, useEffect } from "react";
import "./Cat.css";

function Cat() {
  const [catImage, setCatImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const api = "https://api.thecatapi.com/v1/images/search";

  const fetchCatImage = async () => {
    // Function to fetch the random dog image
    try {
      const response = await fetch(api);
      const data = await response.json();

      setCatImage(data[0].url);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching the dog image:", error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatImage();
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return (
      <>
        <h1>{error.message}</h1>
      </>
    );
  }

  return (
    <div className="App">
      <h1 className="h1">Random Cat Image</h1>
      <div className="image-container">
        {<img src={catImage} alt="A Random Dog" />}

        <button className="Botton" onClick={fetchCatImage} aria-readonly>
          Fetch Another Image
        </button>
      </div>
    </div>
  );
}

export default Cat;
