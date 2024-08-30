import React, { useState, useEffect } from "react";
import "./Dog.css";

function Dog() {
  const [dogImage, setDogImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const api = "https://dog.ceo/api/breeds/image/random";

  const fetchDogImage = async () => {
    // Function to fetch the random dog image
    try {
      const response = await fetch(api);
      const data = await response.json();
      setDogImage(data.message);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching the dog image:", error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDogImage();
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
      <div className="contain">
        <h1 className="h1">Random Dog Image</h1>
      </div>
      <div className="image-container">
        {<img src={dogImage} alt="A Random Dog" />}

        <button className="fg" onClick={fetchDogImage} aria-readonly>
          Fetch Another Image
        </button>
      </div>
    </div>
  );
}

export default Dog;
