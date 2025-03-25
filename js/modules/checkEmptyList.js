import { outTasks, completedTasks } from './constants.js'

export function checkEmptyList() {
    // tasks
    if (outTasks.children.length === 0) {
        const emptyListHTML = `<div class="to-do-out__no-tasks no-tasks" id="no-tasks">To-do list is empty</div>`

        outTasks.insertAdjacentHTML('afterbegin', emptyListHTML)
    }

    if (outTasks.children.length > 1) {
        const emptyElement = document.querySelector('#no-tasks')
        emptyElement ? emptyElement.remove() : null
    }

    // completed tasks
    if (completedTasks.children.length === 0) {
        const emptyListHTML = `<div class="completed-tasks__no-tasks no-tasks" id="no-completed-tasks">No completed tasks</div>`

        completedTasks.insertAdjacentHTML('afterbegin', emptyListHTML)
    }

    if (completedTasks.children.length > 1) {
        const emptyElement = document.querySelector('#no-completed-tasks')
        emptyElement ? emptyElement.remove() : null
    }
}