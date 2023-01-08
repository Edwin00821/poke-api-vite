import React, { useEffect, useState } from 'react';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import ListOfPokemons from './components/ListOfPokemons';
import Layout from './components/common/Layout/Layout';
import { Link } from 'react-router-dom';
import { usePokemons } from './context/PokemonProvider';
import { FaSortAmountDown } from 'react-icons/fa';
import { FaSortAmountUpAlt } from 'react-icons/fa';
import Loading from './components/Loading';

function App() {
  const { pokemons, loadPokemons } = usePokemons();
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState(false);

  useEffect(() => {
    setLoading(true);
    loadPokemons();
    setLoading(false);
  }, []);

  const handleSort = () => {
    pokemons.reverse();
    setSort(!sort);
  };

  return (
    <Layout>
      <div className='bg-[#282c34] min-h-screen '>
        <div className='p-4 flex gap-5 items-center justify-items-center justify-center'>
          <div className='p-4 flex gap-9 items-center justify-items-center justify-center rounded-lg border-white border-2 hover:bg-green-700'>
            {sort ? (
              <FaSortAmountDown color='white' size={40} onClick={handleSort} />
            ) : (
              <FaSortAmountUpAlt color='white' size={40} onClick={handleSort} />
            )}
          </div>
          <Link to='/newPoke' className='text-white  '>
            <div className='p-4 flex gap-5 items-center justify-items-center justify-center rounded-lg border-white border-2 hover:bg-green-700'>
              <h2 className='text-lg font-bold'>Add Pokemon</h2>
              <AiOutlinePlusSquare color='white' size={40} />
            </div>
          </Link>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <ListOfPokemons pokemons={pokemons} />
        )}
      </div>
    </Layout>
  );
}

export default App;
