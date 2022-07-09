let DESKTOP = document.querySelector('.desktop')

document.oncontextmenu = (e) => {
    e.preventDefault()
}

DESKTOP.onclick = () => {
    document.querySelector('start-menu').show()
}