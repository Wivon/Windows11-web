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

class startMenu extends HTMLElement {
    constructor() {
        super()
        this.renderPinnedApps()
    }

    renderPinnedApps() {
        PINNED_APPS.forEach(app => {
            let newItem = document.createElement('div')
            let container = this.querySelector('.pinned .container')
            newItem.innerHTML = `
                <img src="${app.icon}">
                <span>${app.name}</span>
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