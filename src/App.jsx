import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Layout from "./Layouts/Layout";

const App = () => {
	return (
		<div className="App">
			{/* Contenido principal cambia según la ruta */}
			<div className="content">
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="/home" element={<Home />} />
						<Route path="/contacto" element={<Contact />} />
						<Route path="/favs" element={<Favs />} />
						<Route path="/dentist/:id" element={<Detail />} />
						<Route path="*" element={<Home />} /> {/* Ruta predeterminada */}
					</Route>
				</Routes>
			</div>
		</div>
	);
};

export default App;
