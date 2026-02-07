import './page_styles/homeCss.css'
import logo from '../assets/images/homepage_imgs/tauficaksa.jpg';
function HomePage(){
    return (
        <>
            <div className="homepage_main_div">
                <div className="left_content inner_blocks">
                    <div className="intro_textbox">
                        <h1>Fauzza Pet Shop</h1>
                        <h4>More than a pet shop — a place where families begin.</h4>
                        <p>We help loving pets find caring homes, making adoption simple, safe, and responsible. Every pet deserves love, care, and a forever home.</p>

                        <div className="btn_div">
                            <button className="explore_btn">
                                Explore Our Pets
                            </button>
                        </div>
                    </div>

                </div>
                <div className="right_content inner_blocks">
                    <div className="image_slidshow_div">
                        <img src={logo}  className="home_images"/>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default HomePage;