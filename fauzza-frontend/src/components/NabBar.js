import { Link } from "react-router-dom";
import './components_styles/navbarCss.css';
import logo from '../assets/images/logos/logo.png';
import { useState } from "react";


function NavBar(){

    const [state,updateState] = useState(false);

    return (
        <>
            <nav className="navBar_bigScreen">

                <div className="navBar_logoDiv">
                    <img src={logo}  className="logo"/>
                </div>
                <div className="navBar_navDiv">
                    <button><Link to="/" className="link">Home</Link></button>
                    <button><Link to="/store" className="link">store</Link></button>
                    <button><Link to="/about" className="link">About Us</Link></button>
                    <button><Link to="/contact" className="link">Contact Us</Link></button>
                    
                </div>
                
            </nav>
            <nav className={`navBar_phoneScreen ${state?"navBar_phoneScreen_open":""}`}>
                <div className="navBar_menuLogoDiv">
                    {
                        state?(
                            <span className="material-symbols-outlined menu_logo" onClick={()=>updateState(!state)}>close</span>
                        ):<span className="material-symbols-outlined menu_logo" onClick={()=>updateState(!state)}>menu</span>
                    }
                    
                </div>
                    
                <div className={`navBar_navDiv ${state?"showMenu":"hideMenu"}`}>
                    <button onClick={()=>updateState(!state)}><Link to="/" className="link">Home</Link></button>
                    <button onClick={()=>updateState(!state)}><Link to="/store" className="link">store</Link></button>
                    <button onClick={()=>updateState(!state)}><Link to="/about" className="link">About Us</Link></button>
                    <button onClick={()=>updateState(!state)}><Link to="/contact" className="link">Contact Us</Link></button>
                </div>
            </nav>
            
        </>
    );
}

export default NavBar;