import styles from "./styles.module.css";
import { ChangeEvent, FormEvent, useState } from 'react';
import plus from "./assets/img/plus.png";
import noTasks from "./assets/img/Clipboard.png";
import { Header } from './components/Header'
import { NewsTasks } from "./components/NewsTasks";

interface TaskProds {
  id: number;
  title: string;
  isComplete: string;
}

function App() {
  const [fineshed, setFineshed]         = useState(false);
  const [saveTasks, setSaveTasks]       = useState<any>([]);
  const [likeCount, setLikeCount]       = useState(0);
  const [newSaveTasks, setNewSaveTasks] = useState('');


  function handleCreateNewTasks(event: FormEvent) {
    event.preventDefault();

    const max = 100;

    let task = {
      id: Math.random() * max,
      title: newSaveTasks,
      isComplete: fineshed
    };

    if(newSaveTasks.length === 0) {
      alert("Sua tarefa não pode ser vazia")
    } else {
      task
    }

    setSaveTasks([...saveTasks, task]);
    setNewSaveTasks('');
  }

  function handleNewTasksChance(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewSaveTasks(event.target.value);
  }

  function deleteTask(taskToDelete: string) {
    const testeDelete = saveTasks.filter((task: string) => {
      return task != taskToDelete
    })
    setSaveTasks(testeDelete)
  }

  function handleLikeComment() {
      setLikeCount((state) => {
        return state +1
      })
  }

  function handleTaskCheck(id: any) {
    const handleTask = saveTasks.map((task: any) => {
      if(task.id === id) {
        task.isComplete = !task.isComplete
      }

      return task
    }) 

    setFineshed(handleTask)
  }

  const saveTasksCompleted = saveTasks.filter( (taskCompleted: { isComplete: boolean; }) => taskCompleted.isComplete === true ).length

  return (
    <div className={styles.app}>
      <Header />

      <div className={styles.content}>
          <div className={styles.createTask}>
            <form onSubmit={handleCreateNewTasks}>
              <input
                type="text"
                value={newSaveTasks}
                onChange={handleNewTasksChance}
                placeholder='Adicionar uma nova tarefa'
              />
              <button>Criar <img src={plus} alt="" /> </button>
            </form>
          </div>

        <div className={styles.tasksInfo}>
          <div className={styles.tasksTop}>
            <div className={styles.taskRight}>
              <p>Tarefas criadas</p>
              <p className={styles.number}>{saveTasks?.length}</p>
            </div>

            <div className={styles.taskLeft}>
              <p>Concluídas</p>
              <p className={styles.number}>{saveTasksCompleted} de {saveTasks?.length}</p>
            </div>
          </div>

          <div className={styles.tasksAdd}>
            {saveTasks?.length > 0 
              ? <>
                  {saveTasks?.map((task: any, index: any) => (
                    <NewsTasks
                      task={task}
                      key={index}
                      fineshed={fineshed}
                      onDeleteTask={deleteTask}
                      handleTaskCheck={handleTaskCheck}
                      handleLikeComment={handleLikeComment}
                    />
                  ))}
                </>
              : 
                <div className={styles.noTasks}>
                  <img src={noTasks} alt="" />
                  <h1>Você ainda não tem tarefas cadastradas!</h1>
                  <h2>Crie tarefas e organize seus items a fazer.</h2>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
