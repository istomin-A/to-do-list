import { tasks } from './constants.js'
import { checkEmptyList } from './checkEmptyList.js'
import { saveToLocalStorage } from './saveToLocalStorage.js'
import { updatePinButtons } from './updatePinButtons.js'


export function removeTasks(e) {
    if (e.target.dataset.delete !== 'delete') return

    const parentNode = e.target.closest('[data-spollers]')
    const id = Number(parentNode.id)
    const index = tasks.findIndex((task) => task.id === id)

    if (index === -1) return

    // Updating id in pinned task
    tasks.forEach(task => {
        if (task.pin && task.idPreviousElement == id) {
            task.idPreviousElement = parentNode.previousElementSibling
                ? parentNode.previousElementSibling.id
                : 'first element'
        }
    })

    tasks.splice(index, 1)

    saveToLocalStorage()

    parentNode.remove()

    updatePinButtons()

    checkEmptyList()
}