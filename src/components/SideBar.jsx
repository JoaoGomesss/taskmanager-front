import CustomButton from "./CustomButton";

import "./SideBar.scss";
import logo from "../assets/images/logo-removebg-preview.png";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo">
                <Link to="https://portfolio-bzs.pages.dev/">
                    <img src={logo} alt="DevJow Logo" width={120} />
                </Link>
            </div>
            <Link to="/" className="links">
                <CustomButton>Sair</CustomButton>
            </Link>
        </div>
    );
};

export default SideBar;
