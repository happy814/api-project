import React, { useState, useEffect } from "react";
import "./Harry.css";

function Harry() {
  const [Harry, setHarry] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const api = "https://potterapi-fedeperin.vercel.app/en/spells";

  const fetchHarry = async () => {
    // Function to fetch the random dog image
    try {
      const response = await fetch(api);
      const data = await response.json();

      setHarry(data);
      // console.log(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching the dog image:", error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHarry();
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
      <div className="spell-card">
        <h1 className="head">Harry Potter Spells</h1>
        {Harry.map((spell) => (
          <div className="spell-card" key={spell.id}>
            <h2 className="id" key={spell.id}>
              {spell.spell}
            </h2>
            <p>
              <strong>index</strong> {spell.index}
            </p>
            <p>
              <strong>Effect:</strong> {spell.use}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Harry;
