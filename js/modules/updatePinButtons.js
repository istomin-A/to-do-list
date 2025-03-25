import { outTasks, tasks } from "./constants.js"

export function updatePinButtons() {
    const pinnedTasksCount = tasks.filter(task => task.pin).length
    const buttons = outTasks.querySelectorAll('[data-toggle-pin="pin"]')

    buttons.forEach(button => {
        button.classList.toggle('_none', pinnedTasksCount > 0)
    })
}