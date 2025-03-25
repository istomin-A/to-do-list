import { completedTasks, tasks } from './constants.js'
import { checkEmptyList } from './checkEmptyList.js'
import { saveToLocalStorage } from './saveToLocalStorage.js'
import { updatePinButtons } from './updatePinButtons.js'

export function doneTasks(e) {
    if (e.target.dataset.done !== 'done') return

    const parentNode = e.target.closest('[data-spollers]')
    const buttonSpoller = parentNode.querySelector('[data-spoller-button]')
    const iconSpoller = parentNode.querySelector('[data-spoller-icon]')

    // find task in array
    const id = Number(parentNode.id)
    const task = tasks.find((task) => task.id === id)

    if (!task) return

    // Updating id in pinned task
    tasks.forEach(t => {
        if (t.pin && t.idPreviousElement == id) {
            t.idPreviousElement = parentNode.previousElementSibling
                ? parentNode.previousElementSibling.id
                : 'first element'
        }
    })

    // unpin if task pin
    if (task.pin) {
        task.pin = false
        delete task.idPreviousElement
    }

    // task done
    task.done = true
    task.completedAt = Date.now()

    // sorted tasks
    tasks.sort((a, b) => {
        if (b.done !== a.done) return b.done - a.done
        return (b.completedAt || 0) - (a.completedAt || 0)
    })

    saveToLocalStorage()

    // task done
    buttonSpoller.classList.add('_completed')
    iconSpoller.classList.add('_completed')
    e.target.nextElementSibling.remove()
    e.target.remove()

    completedTasks.prepend(parentNode)

    updatePinButtons()

    checkEmptyList()
}