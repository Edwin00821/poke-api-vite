import { getPokemonBgColor } from "./../libs/getPokemonColor";

export default function PokemonElement({ types }) {
  return (
    <div className="flex justify-center">
      {types.map(({ name_type, id_type }) => {
        return (
          <p
            key={`${id_type}_${name_type}`}
            className={`${getPokemonBgColor(
              name_type
            )} m-1 p-1 px-3 rounded-2xl text-white text-xs font-bold mx-3 first-letter:uppercase`}
          >
            {name_type}
          </p>
        );
      })}
    </div>
  );
}
