import "./notfound.css";

function NotFound() {
  return (
    <div className="not__found">
      <h2 className="not__title">¡Pokémon no encontrado!</h2>
      <img
        className="not__img"
        src="https://cdn-icons-png.flaticon.com/512/188/188987.png"
        alt="Not found"
        width="120"
      />
    </div>
  );
}
export default NotFound;
