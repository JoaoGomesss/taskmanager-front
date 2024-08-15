import CustomButton from "./CustomButton";

import "./SideBar.scss";
import logo from "../assets/images/logo-removebg-preview.png";

const SideBar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="DevJow Logo" />
            </div>
            <CustomButton>Sair</CustomButton>
        </div>
    );
};

export default SideBar;
