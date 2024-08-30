import React from "react";

export default function ({ por }) {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={por.sprites.other.dream_world.front_default}
          alt={por.name}
          className="pokemon-image"
        ></img>
      </figure>

      <h2 className="pokemon-name"> {por.name}</h2>

      <div className="pokemon-info pokemon-highlight">
        <p>{por.types.map((curType) => curType.type.name).join(", ")}</p>
      </div>

      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span> Height:</span> {por.height}
        </p>

        <p className="pokemon-info">
          <span> Weight:</span> {por.weight}
        </p>

        <p className="pokemon-info">
          <span> speed:</span> {por.stats[5].base_stat}
        </p>
      </div>

      <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>{por.base_experience}</p>
          <span> Experience:</span>
        </div>
        <div className="pokemon-info">
          <p>{por.stats[1].base_stat}</p>
          <span>Attack:</span>
        </div>

        <div className="pokemon-info">
          <p>
            {por.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
          <span> Abilities: </span>
        </div>
      </div>
    </li>
  );
}
