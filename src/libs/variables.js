export const apiURL = `https://pokeapi.co/api/v2/pokemon?limit=151`;

export const OPTIONS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const TYPES = {
  NORMAL: 'normal',
  FIGHTING: 'fighting',
  FLYING: 'flying',
  POISON: 'poison',
  GROUND: 'ground',
  ROCK: 'rock',
  BUG: 'bug',
  GHOST: 'ghost',
  STEEL: 'steel',
  FIRE: 'fire',
  WATER: 'water',
  GRASS: 'grass',
  ELECTRIC: 'electric',
  PSYCHIC: 'psychic',
  ICE: 'ice',
  DRAGON: 'dragon',
  DARK: 'dark',
  FAIRY: 'fairy',
  UNKNOWN: 'unknown',
  SHADOW: 'shadow',
};

export const options = [
  { value: '1', label: 'Normal', color: '#AAA67F' },
  { value: '2', label: 'Fire', color: '#F08030' },
  { value: '3', label: 'Water', color: '#6890F0' },
  { value: '4', label: 'Electric', color: '#F8D030' },
  { value: '5', label: 'Grass', color: '#78C850' },
  { value: '6', label: 'Ice', color: '#98D8D8' },
  { value: '7', label: 'Fighting', color: '#C03028' },
  { value: '8', label: 'Poison', color: '#A040A0' },
  { value: '9', label: 'Ground', color: '#E0C068' },
  { value: '10', label: 'Flying', color: '#A890F0' },
  { value: '11', label: 'Psychic', color: '#F85888' },
  { value: '12', label: 'Bug', color: '#A8B820' },
  { value: '13', label: 'Rock', color: '#B8A038' },
  { value: '14', label: 'Ghost', color: '#705898' },
  { value: '15', label: 'Dragon', color: '#7038F8' },
  { value: '16', label: 'Dark', color: '#705848' },
  { value: '17', label: 'Steel', color: '#B8B8D0' },
  { value: '18', label: 'Fairy', color: '#EE99AC' },
];
