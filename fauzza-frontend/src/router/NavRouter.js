import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import StorePage from "../pages/store";
import ContactPage from "../pages/contect";

function NavRouter()
{
    return(
        <>
            <Routes>
                <Route path="/"  element = {<HomePage />}/>
                <Route path="/about"  element = {<AboutPage />}/>
                <Route path="/store" element = {<StorePage />}/>
                <Route path="/contact" element = {<ContactPage />}/>
            </Routes>
        </>
    );
}

export default NavRouter;