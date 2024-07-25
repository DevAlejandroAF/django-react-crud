import { useNavigate } from "react-router-dom";
import type { TaskType } from "../types";

function TaskCard({ id, title, description}: TaskType) {

  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 rounded-md hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate(`/tasks/${id}`)
      }}
    >
      <h1 className="font-bold uppercase text-white">{title}</h1>
      <p className="text-slate-400">{description}</p>
    </div>
  )
}

export default TaskCard
