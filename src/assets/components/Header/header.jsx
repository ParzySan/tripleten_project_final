import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__img" src="../../../../public/poke.png"></img>
        <h2 className="header__title">PokeParzy</h2>
      </div>
      <nav className="header__nav">
        <a href="/">Inicio</a>
        <a href="/about">Sobre mí</a>
      </nav>
    </header>
  );
}

export default Header;
