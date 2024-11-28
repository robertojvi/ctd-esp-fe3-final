import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const favs = JSON.parse(localStorage.getItem("favs")) || [];

  return (
    <div className={state.theme}>
      <h1>Fav Dentists</h1>
      <div className="card-grid">
        {favs.map((fav) => (
          <Card key={fav.id} {...fav} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
