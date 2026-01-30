import { Link } from "react-router-dom";

function NavBar(){
    return (
        <>
            <nav>
                <Link to="/">home page</Link>
                <Link to="/about">about page</Link>
            </nav>
        </>
    );
}

export default NavBar;