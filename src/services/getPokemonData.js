import { apiURL, OPTIONS } from "../libs/variables.js";

export async function getPokemonData() {
  return fetch(apiURL, OPTIONS)
    .then((res) => res.json())
    .then((response) => {
      const { results = [] } = response;
      if (Array.isArray(results)) {
        return Promise.all(
          results.map(async ({ url }) => await getPokemonDataById(url))
        );
      }
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}

async function getPokemonDataById(url) {
  return fetch(url, OPTIONS)
    .then((res) => res.json())
    .then((response) => {
      // console.log({response});
      const {
        abilities: [{ ability }],
        height,
        id,
        name,
        sprites,
        types,
        stats: [
          { base_stat: hp },
          { base_stat: attack },
          { base_stat: defense },
          { base_stat: specialAttack },
          { base_stat: specialDefense },
          { base_stat: speed },
        ],
        weight,
      } = response;

      const tipo = types.map(({ type: { name } }) => {
        let id_ctype;
        if (name === "normal") id_ctype = 1;
        if (name === "fire") id_ctype = 2;
        if (name === "water") id_ctype = 3;
        if (name === "electric") id_ctype = 4;
        if (name === "grass") id_ctype = 5;
        if (name === "ice") id_ctype = 6;
        if (name === "fighting") id_ctype = 7;
        if (name === "poison") id_ctype = 8;
        if (name === "ground") id_ctype = 9;
        if (name === "flying") id_ctype = 10;
        if (name === "psychic") id_ctype = 11;
        if (name === "bug") id_ctype = 12;
        if (name === "rock") id_ctype = 13;
        if (name === "ghost") id_ctype = 14;
        if (name === "dragon") id_ctype = 15;
        if (name === "dark") id_ctype = 16;
        if (name === "steel") id_ctype = 17;
        if (name === "fairy") id_ctype = 18;

        return {
          id_ctype,
          name_type: name,
        };
      });

      const poke = {
        id_poke: id,
        name_poke: name,
        height_poke: Number(height) / 10,
        weight_poke: Number(weight) / 10,
        ability: ability.name,
        img_poke: sprites.other["official-artwork"].front_default,
        types: tipo,
        stats: [
          { id: 1, name: "hp", base_stat: hp },
          { id: 2, name: "attack", base_stat: attack },
          { id: 3, name: "defense", base_stat: defense },
          { id: 4, name: "special-attack", base_stat: specialAttack },
          { id: 5, name: "special-defense", base_stat: specialDefense },
          { id: 6, name: "speed", base_stat: speed },
        ],
      };
      return poke;
    });
}
