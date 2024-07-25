import axios from "axios";
import { FieldValues } from "react-hook-form";
import type { TaskType } from "../types";

const tasksApi = axios.create({
  baseURL: "http://localhost:8000/tasks/api/v1/tasks/"
})

export const getAllTasks = () => tasksApi.get("/");
export const getTask = (id: TaskType["id"]) => tasksApi.get(`/${id}/`);
export const createTask = (task: FieldValues) => tasksApi.post("/", task);
export const deleteTask = (id: TaskType["id"]) => tasksApi.delete(`/${id}/`);
export const updateTask = (id: TaskType["id"], task: FieldValues) => tasksApi.put(`/${id}/`, task);
