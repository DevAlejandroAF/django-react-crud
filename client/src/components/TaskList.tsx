import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import type { TaskType } from '../types';
import TaskCard from "./TaskCard";

function TaskList() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks();
      setTasks(res.data);
    }
    loadTasks();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {
        tasks.map((task: TaskType) => (
          <TaskCard key={task.id} id={task.id} title={task.title} description={task.description} done={task.done}/>
        ))
      }
    </div>
  )
}

export default TaskList
