import React from 'react';

const PokemonCardBody = ({ img, name }) => {
  return (
    <div className='flex justify-center'>
      <img
        src={img}
        alt={name}
        className='-mt-5 -mb-20 w-[12.5rem] h-[12.5rem] z-10'
      />
    </div>
  );
};

export default PokemonCardBody;
