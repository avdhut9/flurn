import { Route, Routes } from "react-router-dom";
import SearchPokemon from "../pages/search";
import List from "../pages/pokemons";
import Listbysearch from "../pages/list";
import DetailsPage from "../pages/detailspage";
import Bookmarkpage from "../pages/bookmarkpage";

export default function Allroutes(){
    return(
        <Routes>
            <Route path="/" element={<SearchPokemon/>}/>
            <Route path="/pokemons" element={<List/>}/>
            <Route path="/list" element={<Listbysearch/>}/>
            <Route path="/details/:id" element={<DetailsPage/>}/>
            <Route path="/bookmarks" element={<Bookmarkpage/>}/>
        </Routes>
    )
}