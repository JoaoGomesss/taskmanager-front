import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";

const AddTask = ({ fetchTasks }) => {
    const [task, setTask] = useState("");

    const handleTaskAddition = (e) => {
        setTask(e.target.value);
    };

    const notify = () => {
        toast.error("Descrição da tarefa é necessária!");
    };

    const handleAddTaskToDatabase = async () => {
        try {
            if (task.length === 0) {
                notify();
                return;
            }

            await axios.post("https://taskmanager-vq5u.onrender.com/tasks", {
                description: task,
                isCompleted: false,
            });

            await fetchTasks();

            setTask("");
        } catch (error) {
            console.log("Aldo deu errado");
        }
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={task}
                handleTaskAddition={handleTaskAddition}
            />
            <CustomButton onClick={handleAddTaskToDatabase}>
                <FaPlus size={14} color="#eee" />
            </CustomButton>
        </div>
    );
};

export default AddTask;
