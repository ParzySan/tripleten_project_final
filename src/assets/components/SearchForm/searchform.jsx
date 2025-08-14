import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchform.css";

function SearchForm() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/pokemon/${query.toLowerCase()}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search__form">
      <input
        type="text"
        placeholder="Buscar Pokémon"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search__button" type="submit">
        Buscar
      </button>
    </form>
  );
}

export default SearchForm;
