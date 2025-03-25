import { outTasks, tasks } from './constants.js'
import { saveToLocalStorage } from './saveToLocalStorage.js'
import { updatePinButtons } from './updatePinButtons.js'

export function togglePinTasks(e) {
    if (!e.target.hasAttribute('data-toggle-pin')) return

    const parentNode = e.target.closest('[data-spollers]')
    const imgHTML = e.target.querySelector('img')

    // Work with task data
    const id = Number(parentNode.id)
    const task = tasks.find(task => task.id === id)

    // Check if task exists
    if (!task) return

    const taskIndex = tasks.indexOf(task)

    if (e.target.dataset.togglePin === 'pin') {
        const idPreviousElement = parentNode.previousElementSibling ? parentNode.previousElementSibling.id : 'first element'

        // Pin & sort task in data
        task.pin = true
        tasks.sort((taskA, taskB) => taskB.pin - taskA.pin)
        task.idPreviousElement = idPreviousElement

        // Pin task
        outTasks.prepend(parentNode)
        e.target.dataset.togglePin = 'unpin'
        imgHTML.src = 'img/unpin.svg'

        updatePinButtons()

    } else {
        if (task.idPreviousElement === 'first element') {
            // Unpin task from the top
            task.pin = false
            delete task.idPreviousElement

            // Reset the button state
            e.target.dataset.togglePin = 'pin'
            imgHTML.src = 'img/pin.svg'
        } else {
            // Move the task back to its original position
            // тут проблема
            const referenceNode = document.getElementById(task.idPreviousElement)
            const position = Array.from(outTasks.children).indexOf(referenceNode)
            tasks.splice(taskIndex, 1)
            tasks.splice(position, 0, task)

            // Unpin task and reset button
            task.pin = false
            delete task.idPreviousElement
            referenceNode.after(parentNode)
            e.target.dataset.togglePin = 'pin'
            imgHTML.src = 'img/pin.svg'
        }

        updatePinButtons()
    }

    saveToLocalStorage()
}