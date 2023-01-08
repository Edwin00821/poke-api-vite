import { Link } from 'react-router-dom';

import { usePokemons } from '../context/PokemonProvider';
import { getPokemonBgColor, getPokemonTxtColor } from '../libs/getPokemonColor';

import Stats from './Stats';
import PokemonElement from './PokemonElement';

import { FaWeight, FaRulerVertical } from 'react-icons/fa';

const PokemonCardFooter = ({ abilities, height, stats, types, weight }) => {
  return (
    <div className='bg-white mx-2 rounded-2xl p-5 pt-20'>
      <PokemonElement types={types} />
      <div>
        <h3
          className={`${getPokemonTxtColor(
            types[0].name_type
          )} font-bold text-center m-3 text-[1rem]`}
        >
          About
        </h3>
        <section className='grid grid-cols-3 text-black text-[0.625rem]'>
          <div className='border-r-2'>
            <div className='flex gap-3 items-center justify-center '>
              <FaWeight />
              <p>{weight} kg</p>
            </div>
            <h3 className='text-[0.6rem] text-center'>Weight</h3>
          </div>
          <div className='border-r-2'>
            <div className='flex gap-3 items-center justify-center '>
              <FaRulerVertical />
              <p>{height} m</p>
            </div>
            <h3 className='text-[0.6rem] text-center'>Height</h3>
          </div>
          <div>
            <p className=' first-letter:uppercase text-center'>{abilities}</p>
            <h3 className='text-[0.6rem] text-center'>Abilitie</h3>
          </div>
        </section>
      </div>
      <Stats stats={stats} types={types} />
    </div>
  );
};

export default PokemonCardFooter;
