import { completedTasks, outTasks } from "./constants.js"

// render initial task
function renderTask(task) {
    const taskHTML = `
            <div id="${task.id}" class="task-spoller" data-spollers>
                <button class="task-spoller__button" data-spoller-button>
                    ${task.title}
                    <img class="task-spoller__icon" data-spoller-icon src="img/arrow.svg" alt="" width="18" height="18">
                </button>
                <div class="task-spoller__body out" data-spoller-body>
                    <div class="task-spoller__inner">
                        ${task.description}
                    </div>
                </div>
                <div class="actions">
                    <button type="button" class="actions__button" data-done="done">
                        <img class="actions__check-mark" src="img/check-mark.svg" alt="done" width="35" height="35">
                    </button>
                    <button type="button" class="actions__button" data-toggle-pin="${task.pin ? 'unpin' : 'pin'}">
                        <img class="actions__pin" src="${task.pin ? 'img/unpin.svg' : 'img/pin.svg'}" alt="pin" width="35" height="35">
                    </button>
                    <button type="button" class="actions__button" data-delete="delete">
                        <img class="actions__delete" src="img/delete.svg" alt="delete" width="35" height="35">
                    </button>
                </div>
            </div>
    `

    outTasks.insertAdjacentHTML('beforeend', taskHTML)
}

// render done task
function renderDoneTasks(task) {
    const doneTaskHTML = `
    <div id="${task.id}" class="task-spoller" data-spollers>
        <button class="${task.done ? 'task-spoller__button _completed' : 'task-spoller__button'}" data-spoller-button>
            ${task.title}
            <img class="${task.done ? 'task-spoller__icon _completed' : 'task-spoller__icon'}" data-spoller-icon src="img/arrow.svg" alt="" width="18" height="18">
        </button>
        <div class="task-spoller__body out" data-spoller-body>
            <div class="task-spoller__inner">
                ${task.description}
            </div>
        </div>
        <div class="actions">
            <button type="button" class="actions__button" data-delete="delete">
                <img class="actions__delete" src="img/delete.svg" alt="delete" width="35" height="35">
            </button>
        </div>
    </div>`

    completedTasks.insertAdjacentHTML('beforeend', doneTaskHTML)
}

export { renderTask, renderDoneTasks }