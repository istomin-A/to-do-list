const form = document.querySelector('#to-do-form')
const inputTitleTask = document.querySelector('#input-title-task')
const textareaDescriptionTask = document.querySelector('#textarea-description-task')
const outTasks = document.querySelector('#out-task')
const error = document.querySelector('.error')
const popup = document.querySelector('.popup')
const completedTasks = document.querySelector('#completed-tasks')

// if true get data
let tasks = JSON.parse(localStorage.getItem('tasks')) || []

export {
    form,
    inputTitleTask,
    textareaDescriptionTask,
    outTasks,
    error,
    popup,
    completedTasks,
    tasks
}