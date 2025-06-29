import { Routes, Route } from "react-router-dom";
import Pokedex from "../components/Pokedex/Pokedex";
import PokemonDetails from "../components/PokemonDetails/PokemonDetails";

function CustomRoutes() {
    return (
        <Routes>
             <Route path="/" element={<Pokedex/>} />
             <Route path="/Pokemon/:id" element={<PokemonDetails/>} />
        </Routes>

    );

}

export default CustomRoutes;