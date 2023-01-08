import React from "react";
import PokemonCard from "./PokemonCard";

export default function ListOfPokemons({ pokemons, editable }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 my-10 justify-items-center m-auto w-11/12">
      {pokemons?.map(
        ({
          ability,
          height_poke,
          id_poke,
          img_poke,
          name_poke,
          stats,
          types,
          weight_poke,
        }) => {
          return (
            <PokemonCard
              key={id_poke}
              abilities={ability}
              height={height_poke}
              id={id_poke}
              name={name_poke}
              img={img_poke}
              stats={stats}
              types={types}
              weight={weight_poke}
              editable={editable}
            />
          );
        }
      )}
    </div>
  );
}
