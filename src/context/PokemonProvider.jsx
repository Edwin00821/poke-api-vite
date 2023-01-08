import { useContext, useState } from 'react';

import { PokemonContext } from './PokemonContext';

import { getPokemonData } from '../services/getPokemonData';

export const usePokemons = () => {
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error('usePokemons must be used within a PokemonContextProvider');
  }
  return context;
};

export const PokemonContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  async function loadPokemons() {
    const data = await getPokemonData();
    console.log({ data });
    setPokemons(data);
    // console.log(data);
  }

  const getPoke = async (id) => {
    try {
      const { data } = await getPokeRequest(id);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const createPoke = async (id, poke) => {
    try {
      await createPokeRequest(id, poke);
      // setPokemons([...pokemons, response]);
    } catch (err) {
      console.log(err);
    }
  };

  const deletePoke = async (id) => {
    try {
      // console.log('updatePoke from Provider', id);
      await deletePokemRequest(id);
      setPokemons(pokemons.filter((pokemon) => pokemon.id_poke !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const updatePoke = async (id, poke) => {
    // console.log('updatePoke from Provider', poke);
    const response = await updatePokeRequest(id, poke);
    setPokemons(
      pokemons.map((pokemon) =>
        pokemon.id === response.id ? response : pokemon
      )
    );
  };

  const togglePokeDone = async (id) => {
    try {
      const pokeFound = pokemons.find((poke) => poke.id === id);
      await togglePokeDoneRequest(id, pokeFound.done === 0 ? true : false);
      setTasks(
        pokemons.map((poke) =>
          poke.id === id ? { ...poke, done: !poke.done } : poke
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        loadPokemons,
        getPoke,
        createPoke,
        deletePoke,
        updatePoke,
        togglePokeDone,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
