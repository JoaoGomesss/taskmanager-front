import { useState } from "react";
import TaskItem from "./components/TaskItem";

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            description: "malhar",
            isCompleted: false,
        },
        {
            id: 2,
            description: "cardio",
            isCompleted: true,
        },
    ]);

    return (
        <>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </>
    );
};

export default App;
