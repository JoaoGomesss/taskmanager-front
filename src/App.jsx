import SideBar from "./components/SideBar";
import Task from "./components/Tasks";

import "./App.scss";

const App = () => {
    return (
        <div className="app-container">
            <SideBar />
            <Task />
        </div>
    );
};

export default App;
