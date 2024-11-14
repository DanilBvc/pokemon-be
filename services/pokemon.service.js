const { pokedex } = require("../static/pokedex");

exports.getAllTypes = () => {
  const types = new Set();
  pokedex.forEach((pokemon) => {
    pokemon.type.forEach((t) => types.add(t));
  });
  return Array.from(types);
};

exports.getAllPokemon = (page = 1, pageSize = 10) => {
  const start = (page - 1) * pageSize;
  return pokedex.slice(start, start + pageSize);
};

exports.getPokemonCount = () => {
  return pokedex.length;
};
