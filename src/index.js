// index.js
import React from "react";
import { createRoot } from "react-dom/client"; // Importez createRoot
import App from "./App";
import { GlobalProvider } from "./context/GlobalStat";

// Sélectionnez la racine de votre application
const container = document.getElementById("root");
const root = createRoot(container); // Créez une racine

// Rendu de l'application
root.render(
        <GlobalProvider>
            <App />
        </GlobalProvider>


);