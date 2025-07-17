import "./preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
        className="pokeball__spin"
        alt="loading pokeball"
      />
      <p className="loading__text">Cargando Pokémon...</p>
    </div>
  );
}

export default Preloader;
