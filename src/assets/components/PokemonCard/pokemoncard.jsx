import "./pokemoncard.css";
function PokemonCard({ pokemon, onClick }) {
  if (!pokemon || !pokemon.name || !pokemon.sprites) {
    return <div className="pokemon-card">Cargando datos...</div>;
  }

  return (
    <div className="pokemon__card" onClick={onClick}>
      <img
        className="pokemon__card__img"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <h3 className="pokemon__title">{pokemon.name}</h3>
    </div>
  );
}

export default PokemonCard;
