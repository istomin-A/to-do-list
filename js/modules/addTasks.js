import {
    inputTitleTask,
    textareaDescriptionTask,
    outTasks,
    error,
    popup,
    tasks
} from './constants.js'
import { checkEmptyList } from './checkEmptyList.js'
import { initSpoller } from './spollers.js'
import { saveToLocalStorage } from './saveToLocalStorage.js'
import { renderTask } from './renderTask.js'
import { updatePinButtons } from './updatePinButtons.js'

export function addTask(e) {
    e.preventDefault()

    const titleTask = inputTitleTask.value
    const descriptionTask = textareaDescriptionTask.value

    // wrong task
    const taskTitle = titleTask.trim().replace(/\s+/g, ' ')
    if (!taskTitle) {
        inputTitleTask.classList.add('_error')
        error.classList.add('_active')
        error.innerHTML = 'The field must not be empty'
        return
    }

    // work for data
    const newTask = {
        id: Date.now(),
        title: titleTask,
        description: descriptionTask ? descriptionTask : 'no description',
        done: false,
        pin: false
    }
    tasks.push(newTask)

    // save data
    saveToLocalStorage()

    // add task
    inputTitleTask.classList.remove('_error')
    error.classList.remove('_active')
    popup.classList.add('_active')
    setTimeout(() => popup.classList.remove('_active'), 3000)

    renderTask(newTask)

    updatePinButtons()

    initSpoller(outTasks.lastElementChild)

    inputTitleTask.value = ''
    textareaDescriptionTask.value = ''
    inputTitleTask.focus()

    // render empty list
    checkEmptyList()
}