import { Link } from "react-router-dom";
import logo from "../assets/images/logo-removebg-preview.png";
import CustomButton from "../components/CustomButton";

import "./Home.scss";

const Home = () => {
    return (
        <div className="home-container">
            <img src={logo} alt="DevJow Logo" />
            <div className="button-container">
                <Link to="/dashboard" className="links">
                    <CustomButton>Entrar</CustomButton>
                </Link>
            </div>
        </div>
    );
};

export default Home;
