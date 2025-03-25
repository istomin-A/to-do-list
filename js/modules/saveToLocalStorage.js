import { tasks } from "./constants.js";

export function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}