import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/App.tsx";
import "src/index.scss";
import { BrowserRouter } from "react-router-dom";
import { PokemonProvider } from "src/components/PokeList/PokeListContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonProvider>
        <App />
      </PokemonProvider>
    </BrowserRouter>
  </React.StrictMode>
);
