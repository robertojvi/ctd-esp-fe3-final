import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id, onRemove }) => {
	const { state, dispatch } = useContext(ContextGlobal);
	const [isFav, setIsFav] = useState(
		JSON.parse(localStorage.getItem("favs") || "[]").some((fav) => fav.id === id)
	);

	// Función para manejar la acción de favoritos
	const toggleFav = () => {
		const favs = JSON.parse(localStorage.getItem("favs")) || [];

		if (isFav) {
			// Remover de favoritos
			const updatedFavs = favs.filter((fav) => fav.id !== id);
			localStorage.setItem("favs", JSON.stringify(updatedFavs));
			dispatch({ type: "REMOVE_FAV", payload: id });

			// Eliminar tarjeta si está en la vista de favoritos
			if (onRemove) {
				onRemove(id);
			}
		} else {
			// Agregar a favoritos
			const newFav = { name, username, id };
			localStorage.setItem("favs", JSON.stringify([...favs, newFav]));
			dispatch({ type: "ADD_FAV", payload: newFav });
		}

		setIsFav(!isFav);
	};

	return (
		<div className={state.theme}>
			<div className="card">
				<Link to={`/dentist/${id}`}>
					<h4>{name}</h4>
					<img
						className="card-img"
						src="/images/doctor.jpg"
						alt="Dr. Image"
					/>
					<p>{username}</p>
					<p> ID: {id}</p>
				</Link>

				{/* Botón para alternar entre agregar y eliminar favoritos */}
				<button onClick={toggleFav} className="favButton">
					<img
						className="favIcon"
						src={isFav ? "/removeFavorites-icon.jpg" : "/addFavorite.webp"}
						alt={isFav ? "Remove from Favorites" : "Add to Favorites"}
					/>
				</button>
			</div>
		</div>
	);
};

export default Card;
