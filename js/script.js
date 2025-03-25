import {
    form,
    outTasks,
    completedTasks,
    tasks
} from './modules/constants.js'
import { checkEmptyList } from './modules/checkEmptyList.js'
import { addTask } from './modules/addTasks.js'
import { initSpollers } from './modules/spollers.js'
import { togglePinTasks } from './modules/togglePinTasks.js'
import { doneTasks } from './modules/doneTasks.js'
import { removeTasks } from './modules/removeTaks.js'
import { renderDoneTasks, renderTask } from './modules/renderTask.js'
import { updatePinButtons } from './modules/updatePinButtons.js'

// =======================================================================================================
tasks.forEach(task => {
    if (task.done) {
        renderDoneTasks(task)
    } else {
        renderTask(task)
    }
})

updatePinButtons()
checkEmptyList()

form.addEventListener('submit', addTask)
initSpollers()


outTasks.addEventListener('click', doneTasks)
outTasks.addEventListener('click', removeTasks)
outTasks.addEventListener('click', togglePinTasks)


completedTasks.addEventListener('click', removeTasks)