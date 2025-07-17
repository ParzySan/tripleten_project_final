import "./main.css";
import { useEffect, useState } from "react";
import SearchForm from "../SearchForm/searchform.jsx";
import PokemonCard from "../PokemonCard/pokemoncard.jsx";
import { fetchPokemon } from "../../../Utils/api.js";
import Preloader from "../Preloader/preloader.jsx";
import ModalWithPokemon from "../ModalWithPokemon/modalwithpokemon.jsx";

function Main() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    async function getPokemons() {
      try {
        const promises = [];
        for (let i = 1; i <= 151; i++) {
          promises.push(fetchPokemon(i));
        }
        const results = await Promise.all(promises);
        setPokemons(results);
      } catch (err) {
        console.error("Error al obtener Pokémon:", err);
      } finally {
        setIsLoading(false);
      }
    }
    getPokemons();
  }, []);

  function handleCardClick(pokemon) {
    setSelectedPokemon(pokemon);
  }

  function closeModal() {
    setSelectedPokemon(null);
  }

  return (
    <main className="main">
      <SearchForm />
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="card__container">
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onClick={() => handleCardClick(pokemon)}
            />
          ))}
        </div>
      )}
      {selectedPokemon && (
        <ModalWithPokemon pokemon={selectedPokemon} onClose={closeModal} />
      )}
    </main>
  );
}

export default Main;
