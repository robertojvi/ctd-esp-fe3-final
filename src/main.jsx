import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./Components/utils/global.context";
import { BrowserRouter } from "react-router-dom";
import "./index.css"; // Asegúrate de incluir estilos, si los tienes

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<ContextProvider>
			<App />
		</ContextProvider>
	</BrowserRouter>
);
