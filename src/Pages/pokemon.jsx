import "./pokemon.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPokemon } from "../Utils/api.js";
import Preloader from "../assets/components/Preloader/preloader.jsx";
import NotFound from "../assets/components/Preloader/notfound.jsx";

function Pokemon() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setNotFound(false);

    fetchPokemon(name)
      .then((data) => {
        setPokemon(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setNotFound(true);
        setIsLoading(false);
      });
  }, [name]);

  if (isLoading) return <Preloader />;
  if (notFound) return <NotFound />;

  return (
    <section className="pokemon__detail">
      <div>
        <h2 className="pokemon__name">{pokemon.name}</h2>
        <img
          className="pokemon__img"
          src={pokemon.sprites?.front_default}
          alt={pokemon.name}
        />
        <p className="pokemon__peso">Peso: {pokemon.weight}</p>
        <p className="pokemon__altura">Altura: {pokemon.height}</p>
      </div>
    </section>
  );
}

export default Pokemon;
