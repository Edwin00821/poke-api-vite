import { Fragment } from "react";
import {
  getBgGradient,
  getPokemonTxtColor,
  getPokemonBgColorOpacity,
  nameState,
  getWidth,
} from "./../libs/getPokemonColor";

export default function Stats({ stats, types }) {
  return (
    <>
      <h3
        className={`font-bold text-center m-3 text-[1rem] ${getPokemonTxtColor(
          types[0].name_type
        )}`}
      >
        Base Stats
      </h3>
      <div className="grid grid-cols-[50px_30px_minmax(0,_1fr)] gap-3 ">
        {stats.map(({ base_stat, name }) => {
          return (
            <Fragment key={`BaseStats_${name}_${base_stat}`}>
              <h3 className="text-right font-bold text-[0.625rem] w-12 pr-1 border-r-2 ">
                {nameState(name)}
              </h3>

              <h2 className="text-[0.625rem] w-5">{base_stat}</h2>
              <div
                className={` w-ful rounded-full h-2.5 ${getPokemonBgColorOpacity(
                  types[0].name_type
                )} `}
              >
                <div
                  className={`h-full rounded-full ${getBgGradient(
                    types[0].name_type
                  )} ${getWidth(name, Number(base_stat))} `}
                ></div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
