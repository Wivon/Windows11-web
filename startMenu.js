const PINNED_APPS = [
    { name: 'Discord', icon: 'assets/discord-icon.png'},
    { name: 'Discord', icon: 'assets/discord-icon.png'},
    { name: 'Explorer', icon: 'assets/explorer-icon.png'},
    { name: 'Wallpaper', icon: 'assets/wallpaper-icon.png'},
    { name: 'Notepad', icon: 'assets/notepad-icon.png'},
    { name: 'Discord', icon: 'assets/discord-icon.png'},
    { name: 'Spotify', icon: 'assets/spotify-icon.png'},
    { name: 'Spotify', icon: 'assets/spotify-icon.png'},
    { name: 'Spotify', icon: 'assets/spotify-icon.png'},
    { name: 'Spotify', icon: 'assets/spotify-icon.png'},
    { name: 'Spotify', icon: 'assets/spotify-icon.png'},
    { name: 'Discord', icon: 'assets/discord-icon.png'},
    { name: 'Spotify', icon: 'assets/spotify-icon.png'},
    { name: 'Discord', icon: 'assets/discord-icon.png'},
    { name: 'Spotify', icon: 'assets/spotify-icon.png'},
    { name: 'Discord', icon: 'assets/discord-icon.png'},
    { name: 'Spotify', icon: 'assets/spotify-icon.png'},
    { name: 'Discord', icon: 'assets/discord-icon.png'}
]

RECOMENDED_ITEMS = [
    { name: 'Discord', icon: 'assets/discord-icon.png', time: '4min ago'},
    { name: 'Spotify', icon: 'assets/spotify-icon.png', time: '25min ago'},
    { name: 'Segoe UI fonts', icon: 'assets/folder-icon.png', time: 'Yesterday at 17:18'},
    { name: 'style.css', icon: 'assets/notepad-icon.png', time: 'Monday at 14:27'},
    { name: 'startMenu.js', icon: 'assets/notepad-icon.png', time: 'Saturday at 13:44'},
    { name: 'SurvivalGame.lua', icon: 'assets/notepad-icon.png', time: '4 weeks ago'}
]

class startMenu extends HTMLElement {
    constructor() {
        super()
        this.renderPinnedApps()
        this.renderRecommendedItems()
    }

    renderPinnedApps() {
        PINNED_APPS.forEach(app => {
            let newItem = document.createElement('div')
            let container = this.querySelector('.pinned .container')
            newItem.innerHTML = `
                <img draggable="false" src="${app.icon}">
                <span>${app.name}</span>
            `
            container.appendChild(newItem)
        })
    }

    renderRecommendedItems() {
        RECOMENDED_ITEMS.forEach(app => {
            let newItem = document.createElement('div')
            let container = this.querySelector('.recommendations .container')
            newItem.innerHTML = `
                <img draggable="false" src="${app.icon}">
                <div class="infos">
                    <span>${app.name}</span>
                    <span class="secondary">${app.time}</span>
                </div>
            `
            container.appendChild(newItem)
        })
    }

    show() {
        this.classList.add('active')
        this.querySelector('.search').focus()
        document.querySelector("task-bar > taskbar-item:nth-child(1)").classList.add('active')
    }

    hide() {
        this.classList.remove('active')
        document.querySelector("task-bar > taskbar-item:nth-child(1)").classList.remove('active')
    }
}

function toggleStartMenu() {
    let startMenu = document.querySelector('start-menu')

    if (!startMenu.classList.contains('active')) {
        startMenu.show()
        document.querySelector("task-bar > taskbar-item:nth-child(1)").classList.add('active')
    } else {
        startMenu.hide()
        document.querySelector("task-bar > taskbar-item:nth-child(1)").classList.remove('active')
    }
}

customElements.define('start-menu', startMenu);