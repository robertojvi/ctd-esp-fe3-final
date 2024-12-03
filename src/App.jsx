import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Layout from "./Layouts/Layout";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/home" element={<Home />} />
				<Route path="/contacto" element={<Contact />} />
				<Route path="/favs" element={<Favs />} />
				<Route path="/dentist/:id" element={<Detail />} />
				<Route path="*" element={<Home />} /> {/* Ruta predeterminada */}
			</Route>
		</Routes>
	);
};

export default App;
