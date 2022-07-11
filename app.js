let DESKTOP = document.querySelector('.desktop')
let TASKBAR = document.querySelector('task-bar')
let START_MENU = document.querySelector('start-menu')

document.oncontextmenu = (e) => {
    e.preventDefault()
}

DESKTOP.onclick = () => {
    START_MENU.hide()
    if (CURRENT_CONTEXT_MENU) {
        CURRENT_CONTEXT_MENU.close()
    }
}

TASKBAR.onclick = () => {
    if (CURRENT_CONTEXT_MENU) {
        CURRENT_CONTEXT_MENU.close()
    }
}