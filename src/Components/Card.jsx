import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  const { dispatch } = useContext(ContextGlobal);

  const addFav = () => {
    dispatch({ type: "ADD_FAV", payload: { name, username, id } });
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    localStorage.setItem("favs", JSON.stringify([...favs, { name, username, id }]));
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <h3>{name}</h3>
        <p>{username}</p>
        <p>ID: {id}</p>
      </Link>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
