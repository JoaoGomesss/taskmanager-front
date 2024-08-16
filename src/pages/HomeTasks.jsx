import SideBar from "../components/SideBar";
import Task from "../components/Tasks";

import "./HomeTasks.scss";

const HomeTasks = () => {
    return (
        <div className="home-tasks-container">
            <SideBar />
            <Task />
        </div>
    );
};

export default HomeTasks;
