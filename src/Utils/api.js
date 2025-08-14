import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokemon = async (nameOrId) => {
  const res = await axios.get(`${BASE_URL}/pokemon/${nameOrId}`);
  return res.data;
};
