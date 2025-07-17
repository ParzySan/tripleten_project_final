import "./modalwitchpokemon.css";
function ModalWithPokemon({ pokemon, onClose }) {
  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          ✖
        </button>
        <img
          src={
            pokemon.sprites?.other?.["official-artwork"]?.front_default ||
            pokemon.sprites?.front_default
          }
          alt={pokemon.name}
          width="180"
        />
        <h2 className="modal__title">{pokemon.name.toUpperCase()}</h2>
        <p className="modal__number">N.º {pokemon.id}</p>
      </div>
    </div>
  );
}

export default ModalWithPokemon;
