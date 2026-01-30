import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";

function NavRouter()
{
    return(
        <>
            <Routes>
                <Route path="/"  element = {<HomePage />}/>
                <Route path="/about"  element = {<AboutPage />}/>
            </Routes>
        </>
    );
}

export default NavRouter;