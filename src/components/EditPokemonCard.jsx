import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { FaWeight, FaRulerVertical } from "react-icons/fa";
import {
  getPokemonBgColor,
  getPokemonTxtColor,
} from "./../libs/getPokemonColor";
import PokemonElement from "./PokemonElement";
import Stats from "./Stats";
import { Link } from "react-router-dom";

export default function EditPokemonCard({
  abilities,
  height,
  id,
  img,
  name,
  stats,
  types,
  weight,
}) {
  return (
    <form action="">
      <div className="h-full w-[22.5rem] bg-white shadow-2xl p-3 rounded-2xl">
        <section
          className={`${getPokemonBgColor(
            types[0].type.name
          )} rounded-2xl pb-2 relative`}
        >
          <div className="font-bold text-center text-white flex p-5 justify-between">
            <input className="text-2xl uppercase">{name}</input>
            <input className="text-2xl uppercase">#{id}</input>
            <Link to={"/newPoke"} className="z-10">
              <AiOutlineEdit color="white" size={32} />
            </Link>
            <Link to={"/newPoke"} className="z-10">
              <AiOutlineDelete color="white" size={32} />
            </Link>
          </div>
          <img
            src="/images/Pokeball.png"
            alt="Pokeball"
            className="w-[12.5rem] h-[12.5rem] absolute top-3 right-3 z-0"
          />
          <div className="flex justify-center">
            <img
              src={img}
              alt={name}
              className="-mt-5 -mb-20 w-[12.5rem] h-[12.5rem] z-10"
            />
          </div>
          <div className="bg-white mx-2 rounded-2xl p-5 pt-20">
            <PokemonElement types={types} />
            <div>
              <h3
                className={`${getPokemonTxtColor(
                  types[0].type.name
                )} font-bold text-center m-3 text-[1rem]`}
              >
                About
              </h3>
              <section className="grid grid-cols-3 text-black text-[0.625rem]">
                <div className="border-r-2">
                  <div className="flex gap-3 items-center justify-center ">
                    <FaWeight />
                    <input>{Number(weight) / 10} kg</input>
                  </div>
                  <h3 className="text-[0.6rem]">Weight</h3>
                </div>
                <div className="border-r-2">
                  <div className="flex gap-3 items-center justify-center ">
                    <FaRulerVertical />
                    <input>{Number(height) / 10} m</input>
                  </div>
                  <h3 className="text-[0.6rem]">Height</h3>
                </div>
                <div>
                  <input className=" first-letter:uppercase">{abilities}</input>
                  <h3 className="text-[0.6rem]">Abilitie</h3>
                </div>
              </section>
            </div>
            <Stats stats={stats} types={types} />
          </div>
        </section>
      </div>
    </form>
  );
}
