import React from 'react';

export default function PokemonList({ pokemon }) {
  console.log(pokemon);
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
}
