import React, { useContext, useState, useEffect } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavorites(favs);
  }, []);

  // Manejar la eliminación de una tarjeta
  const handleRemove = (id) => {
    const updatedFavs = favorites.filter((fav) => fav.id !== id);
    setFavorites(updatedFavs);
    localStorage.setItem("favs", JSON.stringify(updatedFavs)); 
  };

  return (
    <div className={state.theme}>
      <h1>Fav Dentists</h1>
      <div className="card-grid">
        {favorites.length > 0 ? (
          favorites.map((fav) => (
            <Card key={fav.id} {...fav} onRemove={handleRemove} />
          ))
        ) : (
          <p>No tienes dentistas favoritos.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
