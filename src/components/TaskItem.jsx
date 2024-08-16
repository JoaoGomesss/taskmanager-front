import axios from "axios";
import { FaTrashCan } from "react-icons/fa6";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./TaskItem.scss";

const notify = (message, type) => {
    if (type === "success") {
        toast.success(message);
    } else if (type === "error") {
        toast.error(message);
    }
};

const TaskItem = ({ task, fetchTasks }) => {
    const handleTaskDeletion = async () => {
        try {
            await axios.delete(
                `https://taskmanager-vq5u.onrender.com/tasks/${task._id}`
            );

            await fetchTasks();

            notify("Tarefa apagada com sucesso!", "success");
            return;
        } catch (_error) {
            toast.error("Erro ao apagar mensagem", "error");
        }
    };

    const handleTaskCompletionChange = async (e) => {
        const isCompleted = e.target.checked;
        try {
            await axios.patch(
                `https://taskmanager-vq5u.onrender.com/tasks/${task._id}`,
                {
                    isCompleted: isCompleted,
                }
            );

            await fetchTasks();
            const message = isCompleted
                ? "Tarefa concluída!"
                : "Tarefa desmarcada!";
            notify(message, "success");

            return;
        } catch (_error) {
            toast.error("Erro ao concluir tarefa", "error");
        }
    };

    return (
        <div className="task-item-container">
            <div className="task-description">
                <label
                    className={
                        task.isCompleted
                            ? "checkbox-container-completed "
                            : "checkbox-container"
                    }
                >
                    {task.description}
                    <input
                        type="checkbox"
                        defaultChecked={task.isCompleted}
                        onChange={(e) => handleTaskCompletionChange(e)}
                    />
                    <span
                        className={
                            task.isCompleted
                                ? "checkmark completed"
                                : "checkmark"
                        }
                    ></span>
                </label>
            </div>
            <div className="delete">
                <FaTrashCan
                    size={15}
                    color="red"
                    onClick={handleTaskDeletion}
                />
            </div>
        </div>
    );
};

export default TaskItem;
