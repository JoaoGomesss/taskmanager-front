import { useState, useEffect, useMemo } from "react";
import axios from "axios";

import "./Tasks.scss";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

const Task = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const { data } = await axios.get(
                "https://taskmanager-vq5u.onrender.com/tasks"
            );
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    const lastTasks = useMemo(() => {
        return tasks.filter((task) => task.isCompleted === false);
    }, [tasks]);

    const concludedTasks = useMemo(() => {
        return tasks.filter((task) => task.isCompleted === true);
    }, [tasks]);

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="tasks-container">
            <h2>Minhas tarefas</h2>

            <div className="last-tasks">
                <h3>Últimas tarefas</h3>
                <AddTask fetchTasks={fetchTasks} />
                <div className="tasks-list">
                    {lastTasks.map((lastTask) => (
                        <TaskItem
                            key={lastTask._id}
                            task={lastTask}
                            fetchTasks={fetchTasks}
                        />
                    ))}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas Concluídas</h3>
                <div className="tasks-list">
                    {concludedTasks.map((concludedTask) => (
                        <TaskItem
                            key={concludedTask._id}
                            task={concludedTask}
                            fetchTasks={fetchTasks}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Task;
