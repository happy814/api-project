import { useEffect, useState } from "react";
import "./index.css";
import PokemonCard from "./PokemonCard";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=125";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      // console.log(data);

      const detailedPokemonData = data.results.map(async (currPok) => {
        const res = await fetch(currPok.url);
        const data = await res.json();
        return data;
      });
      console.log(detailedPokemonData);

      const detailedResponses = await Promise.all(detailedPokemonData);
      // console.log(detailedResponses);
      setPokemon(detailedResponses);

      setLoading(false);
    } catch (error) {
      console.log(`somthing is wrong ${error}`);
      setLoading(false);
      setError(error);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

  // search function

  const searchData = pokemon.filter((newPok) =>
    newPok.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <>
        <h1>Loding....</h1>;
      </>
    );
  }

  if (error) {
    return (
      <>
        <h1>{error.message}</h1>
      </>
    );
  }

  return (
    <div>
      <section className="container">
        <header>
          <h1> Lets Catch Pokémon </h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder=" search Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div>
          <ul className="cards">
            {/* {pokemon.map((currPok) => { */}
            {searchData.map((currPok) => {
              return <PokemonCard key={currPok.id} por={currPok}></PokemonCard>;
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Pokemon;
