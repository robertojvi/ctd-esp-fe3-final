import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {
	const { state } = useContext(ContextGlobal);
	const { dispatch } = useContext(ContextGlobal);

	// Función para agregar a favoritos
	const addFav = () => {
		const favs = JSON.parse(localStorage.getItem("favs")) || [];
		const isAlreadyFav = favs.some((fav) => fav.id === id);

		if (isAlreadyFav) {
			alert("Este dentista ya está en favoritos.");
			return;
		}

		const newFav = { name, username, id };
		localStorage.setItem("favs", JSON.stringify([...favs, newFav]));
		dispatch({ type: "ADD_FAV", payload: newFav });

		alert("Dentista agregado a favoritos.");
	};

	// Función para eliminar de favoritos
	const removeFav = () => {
		const favs = JSON.parse(localStorage.getItem("favs")) || [];
		const updatedFavs = favs.filter((fav) => fav.id !== id);

		localStorage.setItem("favs", JSON.stringify(updatedFavs));
		dispatch({ type: "REMOVE_FAV", payload: id });

		alert("Dentista eliminado de favoritos.");
	};

	// Verificar si el dentista está en favoritos
	const isAlreadyFav = JSON.parse(localStorage.getItem("favs") || "[]").some(
		(fav) => fav.id === id
	);

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

				{/* Botones para agregar o eliminar de favoritos */}
				{!isAlreadyFav ? (
					<button onClick={addFav} className="favButton">
						<img
							className="favIcon"
							src="/addFavorite.webp"
							alt="Add to Favorites"
						/>
					</button>
				) : (
					<button onClick={removeFav} className="favButton">
						<img
							className="favIcon"
							src="/removeFavorites-icon.jpg"
							alt="Remove from Favorites"
						/>
					</button>
				)}
			</div>
		</div>
	);
};

export default Card;
