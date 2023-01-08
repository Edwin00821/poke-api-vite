import { TYPES } from "./variables";

export function getPokemonBgColor(type) {
  type = type.toLowerCase();
  // console.log('function ', type);
  if (type === undefined) return "[#68A090]";
  if (type === TYPES.NORMAL) return "bg-[#AAA67F]";
  if (type === TYPES.FIGHTING) return "bg-[#C12239]";
  if (type === TYPES.FLYING) return "bg-[#A891EC]";
  if (type === TYPES.POISON) return "bg-[#A43E9E]";
  if (type === TYPES.GROUND) return "bg-[#DEC16B]";
  if (type === TYPES.ROCK) return "bg-[#B69E31]";
  if (type === TYPES.BUG) return "bg-[#A7B723]";
  if (type === TYPES.GHOST) return "bg-[#70559B]";
  if (type === TYPES.STEEL) return "bg-[#B7B9D0]";
  if (type === TYPES.FIRE) return "bg-[#F57D31]";
  if (type === TYPES.WATER) return "bg-[#6493EB]";
  if (type === TYPES.GRASS) return "bg-[#74CB48]";
  if (type === TYPES.ELECTRIC) return "bg-[#F9CF30]";
  if (type === TYPES.PSYCHIC) return "bg-[#FB5584]";
  if (type === TYPES.ICE) return "bg-[#9AD6DF]";
  if (type === TYPES.DRAGON) return "bg-[#7037FF]";
  if (type === TYPES.DARK) return "bg-[#75574C]";
  if (type === TYPES.FAIRY) return "bg-[#E69EAC]";
  if (type === TYPES.UNKNOWN) return "bg-gray-400";
  if (type === TYPES.SHADOW) return "bg-gray-700";
}

export function getPokemonTxtColor(type) {
  type = type.toLowerCase();
  if (type === undefined) return "text-[#68A090]";
  if (type === TYPES.NORMAL) return "text-[#AAA67F]";
  if (type === TYPES.FIGHTING) return "text-[#C12239]";
  if (type === TYPES.FLYING) return "text-[#A891EC]";
  if (type === TYPES.POISON) return "text-[#A43E9E]";
  if (type === TYPES.GROUND) return "text-[#DEC16B]";
  if (type === TYPES.ROCK) return "text-[#B69E31]";
  if (type === TYPES.BUG) return "text-[#A7B723]";
  if (type === TYPES.GHOST) return "text-[#70559B]";
  if (type === TYPES.STEEL) return "text-[#B7B9D0]";
  if (type === TYPES.FIRE) return "text-[#F57D31]";
  if (type === TYPES.WATER) return "text-[#6493EB]";
  if (type === TYPES.GRASS) return "text-[#74CB48]";
  if (type === TYPES.ELECTRIC) return "text-[#F9CF30]";
  if (type === TYPES.PSYCHIC) return "text-[#FB5584]";
  if (type === TYPES.ICE) return "text-[#9AD6DF]";
  if (type === TYPES.DRAGON) return "text-[#7037FF]";
  if (type === TYPES.DARK) return "text-[#75574C]";
  if (type === TYPES.FAIRY) return "text-[#E69EAC]";
  if (type === TYPES.UNKNOWN) return "text-gray-400";
  if (type === TYPES.SHADOW) return "text-gray-700";
}

export function getBgGradient(type) {
  type = type.toLowerCase();
  if (type === undefined) return "bg-gradient-to-r from-[#68A090] to-[#68A090]";
  if (type === TYPES.NORMAL)
    return "bg-gradient-to-r from-[#AAA67F] to-[#AAA67F]";
  if (type === TYPES.FIGHTING)
    return "bg-gradient-to-r from-[#C12239] to-[#C12239]";
  if (type === TYPES.FLYING)
    return "bg-gradient-to-r from-[#A891EC] to-[#A891EC]";
  if (type === TYPES.POISON)
    return "bg-gradient-to-r from-[#A43E9E] to-[#A43E9E]";
  if (type === TYPES.GROUND)
    return "bg-gradient-to-r from-[#DEC16B] to-[#DEC16B]";
  if (type === TYPES.ROCK)
    return "bg-gradient-to-r from-[#B69E31] to-[#B69E31]";
  if (type === TYPES.BUG) return "bg-gradient-to-r from-[#A7B723] to-[#A7B723]";
  if (type === TYPES.GHOST)
    return "bg-gradient-to-r from-[#70559B] to-[#70559B]";
  if (type === TYPES.STEEL)
    return "bg-gradient-to-r from-[#B7B9D0] to-[#B7B9D0]";
  if (type === TYPES.FIRE)
    return "bg-gradient-to-r from-[#F57D31] to-[#F57D31]";
  if (type === TYPES.WATER)
    return "bg-gradient-to-r from-[#6493EB] to-[#6493EB]";
  if (type === TYPES.GRASS)
    return "bg-gradient-to-r from-[#74CB48] to-[#74CB48]";
  if (type === TYPES.ELECTRIC)
    return "bg-gradient-to-r from-[#F9CF30] to-[#F9CF30]";
  if (type === TYPES.PSYCHIC)
    return "bg-gradient-to-r from-[#FB5584] to-[#FB5584]";
  if (type === TYPES.ICE) return "bg-gradient-to-r from-[#9AD6DF] to-[#9AD6DF]";
  if (type === TYPES.DRAGON)
    return "bg-gradient-to-r from-[#7037FF] to-[#7037FF]";
  if (type === TYPES.DARK)
    return "bg-gradient-to-r from-[#75574C] to-[#75574C]";
  if (type === TYPES.FAIRY)
    return "bg-gradient-to-r from-[#E69EAC] to-[#E69EAC]";
  if (type === TYPES.UNKNOWN)
    return "bg-gradient-to-r from-gray-400 to-gray-400";
  if (type === TYPES.SHADOW)
    return "bg-gradient-to-r from-gray-700 to-gray-700";
}

export function getPokemonBgColorOpacity(type) {
  type = type.toLowerCase();
  if (type === undefined) return "bg-[#68A090]/[0.2]";
  if (type === TYPES.NORMAL) return "bg-[#AAA67F]/[0.2]";
  if (type === TYPES.FIGHTING) return "bg-[#C12239]/[0.2]";
  if (type === TYPES.FLYING) return "bg-[#A891EC]/[0.2]";
  if (type === TYPES.POISON) return "bg-[#A43E9E]/[0.2]";
  if (type === TYPES.GROUND) return "bg-[#DEC16B]/[0.2]";
  if (type === TYPES.ROCK) return "bg-[#B69E31]/[0.2]";
  if (type === TYPES.BUG) return "bg-[#A7B723]/[0.2]";
  if (type === TYPES.GHOST) return "bg-[#70559B]/[0.2]";
  if (type === TYPES.STEEL) return "bg-[#B7B9D0]/[0.2]";
  if (type === TYPES.FIRE) return "bg-[#F57D31]/[0.2]";
  if (type === TYPES.WATER) return "bg-[#6493EB]/[0.2]";
  if (type === TYPES.GRASS) return "bg-[#74CB48]/[0.2]";
  if (type === TYPES.ELECTRIC) return "bg-[#F9CF30]/[0.2]";
  if (type === TYPES.PSYCHIC) return "bg-[#FB5584]/[0.2]";
  if (type === TYPES.ICE) return "bg-[#9AD6DF]/[0.2]";
  if (type === TYPES.DRAGON) return "bg-[#7037FF]/[0.2]";
  if (type === TYPES.DARK) return "bg-[#75574C]/[0.2]";
  if (type === TYPES.FAIRY) return "bg-[#E69EAC]/[0.2]";
  if (type === TYPES.UNKNOWN) return "bg-gray-400/[0.2]";
  if (type === TYPES.SHADOW) return "bg-gray-700/[0.2]";
}

export function nameState(name) {
  name = name.toLowerCase();
  if (name === "hp") return "HP";
  if (name === "attack") return "ATK";
  if (name === "defense") return "DEF";
  if (name === "special-attack") return "SP. ATK";
  if (name === "special-defense") return "SP. DEF";
  if (name === "speed") return "SPD";
  if (name === undefined || name === "" || name === null) return "Unknown";
}

export function getWidth(statName, base_stat) {
  // console.log({statName, base_stat});
  if (statName === "hp")
    return `w-${Math.round((Number(base_stat) * 100) / 255)}/100`;
  if (statName === "attack")
    return `w-${Math.round((Number(base_stat) * 100) / 190)}/100`;
  if (statName === "defense")
    return `w-${Math.round((Number(base_stat) * 100) / 250)}/100`;
  if (statName === "special-attack")
    return `w-${Math.round((Number(base_stat) * 100) / 194)}/100`;
  if (statName === "special-defense")
    return `w-${Math.round((Number(base_stat) * 100) / 250)}/100`;
  if (statName === "speed")
    return `w-${Math.round((Number(base_stat) * 100) / 180)}/100`;
  if (statName === undefined || statName === "" || statName === null)
    return "Unknown";
}
