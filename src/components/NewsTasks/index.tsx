import styles from "./styles.module.css";
import { useState } from "react";
import trashFalse from "../../assets/img/hover=false.png";

export function NewsTasks({ task, onDeleteTask, handleTaskCheck }: any) {
    const [taskFinished, setTaskFinished] = useState();

    function handleDeleteTask() {
        onDeleteTask(task);
    }

    function testando() {
        handleTaskCheck(task.id)
    }

    return(
        <div className={styles.newTask}>
            <input
                checked={task.isComplete}
                className={styles.checkBox}
                type={"checkbox"}
                onChange={testando}
            />
            <p onClick={() => setTaskFinished(task)} className={styles.task + ' ' + (task.isComplete ? styles['selecioado'] : '')}>{task?.title}</p>
            <div className={styles.trashIcon}>
                <img onClick={handleDeleteTask} src={trashFalse} alt="" />
            </div>
        </div>
    );
}