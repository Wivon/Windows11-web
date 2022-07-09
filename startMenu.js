const PINNED_APPS = [
    { name: 'Discord', icon: 'assets/discord-icon.png'},
    { name: 'Discord', icon: 'assets/discord-icon.png'},
    { name: 'Discord', icon: 'assets/discord-icon.png'},
    { name: 'Spotify', icon: 'assets/spotify-icon.png'},
    { name: 'Spotify', icon: 'assets/spotify-icon.png'},
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
    { name: 'Spotify', icon: 'assets/spotify-icon.png', time: '25min ago'},
    { name: 'Segoe UI', icon: 'assets/discord-icon.png', time: 'Yesterday at 17:18'}
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
                    <span>${app.time}</span>
                </div>
            `
            container.appendChild(newItem)
        })
    }

    show() {
        this.classList.add('active')
        this.querySelector('.search').focus()
    }

    hide() {
        this.classList.remove('active')
    }
}

function toggleStartMenu() {
    let startMenu = document.querySelector('start-menu')

    if (!startMenu.classList.contains('active')) {
        startMenu.show()
        this.classList.add('active')
    } else {
        startMenu.hide()
        this.classList.remove('active')
    }
}

customElements.define('start-menu', startMenu);