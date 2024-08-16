import CustomButton from "./CustomButton";

import "./SideBar.scss";
import logo from "../assets/images/logo-removebg-preview.png";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="DevJow Logo" width={120} />
            </div>
            <Link to="/" className="links">
                <CustomButton>Sair</CustomButton>
            </Link>
        </div>
    );
};

export default SideBar;
