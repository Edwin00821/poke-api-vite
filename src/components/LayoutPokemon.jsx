import { getPokemonBgColor } from '../libs/getPokemonColor';

const LayoutPokemon = ({ children, type }) => {
  return (
    <div className=' h-[620px] w-[22.5rem] bg-white shadow-2xl p-3 rounded-2xl'>
      <section
        className={`h-full ${getPokemonBgColor(
          type
        )} rounded-2xl pb-2 relative`}
      >
        <img
          src='/images/Pokeball.png'
          alt='Pokeball'
          className='w-[12.5rem] h-[12.5rem] absolute top-3 right-3 z-0'
        />
        {children}
      </section>
    </div>
  );
};

export default LayoutPokemon;
