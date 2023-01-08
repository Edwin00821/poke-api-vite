import { Link } from 'react-router-dom';

import { usePokemons } from '../context/PokemonProvider';
import Input from './common/Input';

import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const PokemonCardHeader = ({ id, name, editable }) => {
  const { deletePoke } = usePokemons();

  return (
    <div className='font-bold text-center text-white flex relative p-5 justify-between text-2xl '>
      {editable ? (
        <>
          <Input value={name} weight={'w-[160px]'} />
          <div>
            #
            <Input value={'000'} weight={'w-[50px]'} />
          </div>
        </>
      ) : (
        <>
          <h2>{name}</h2>
          <p>#{String(id).padStart(3, 0)}</p>
          <Link to={`/${id}`} className='z-10'>
            <AiOutlineEdit color='white' size={32} />
          </Link>
          <button onClick={() => deletePoke(id)}>
            <AiOutlineDelete color='white' size={32} />
          </button>
        </>
      )}
    </div>
  );
};

export default PokemonCardHeader;
