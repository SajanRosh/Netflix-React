import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homes"
import Detail from "./pages/Detail";
import Popular from "./pages/Popular";
import Navbar from "./componenets/Navbar";
import MovieType from "./pages/MovieType";

function App(){
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home/>}></Route> 
                <Route path="/detail/:slug" element={<Detail></Detail>}></Route>
                <Route path="/popular" element={<Popular></Popular>}></Route>  
                <Route path="/movietype/:type" element={<MovieType></MovieType>}></Route>
            </Routes> 
        </>
    )
}

export default App;