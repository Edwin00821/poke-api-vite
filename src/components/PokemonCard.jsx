import PokemonCardHeader from './PokemonCardHeader';
import PokemonCardBody from './PokemonCardBody';
import LayoutPokemon from './LayoutPokemon';
import PokemonCardFooter from './PokemonCardFooter';

const PokemonCard = ({
  abilities,
  height,
  id,
  img,
  name,
  stats,
  types,
  weight,
  editable,
}) => {
  return (
    <LayoutPokemon type={types[0].name_type}>
      <PokemonCardHeader
        id={id}
        name={name.toUpperCase()}
        editable={editable}
      />
      <PokemonCardBody img={img} name={name} editable={editable} />
      <PokemonCardFooter
        abilities={abilities}
        height={height}
        stats={stats}
        types={types}
        weight={weight}
        editable={editable}
      />
    </LayoutPokemon>
  );
};

export default PokemonCard;
