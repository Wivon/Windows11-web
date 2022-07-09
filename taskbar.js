const TASKBAR_APPS = [
    {
        "name": "Discord",
        "icon": "assets/discord-icon.png"
    }, {
        "name": "Spotify",
        "icon": "assets/spotify-icon.png"
    }, {
        "name": "Discord2dzq",
        "icon": "assets/discord-icon.png"
    }, {
        "name": "dzqdzqd",
        "icon": "assets/discord-icon.png"
    }, {
        "name": "Sdzjgd",
        "icon": "assets/discord-icon.png"
    }, {
        "name": "Spotifyff",
        "icon": "assets/spotify-icon.png"
    }, {
        "name": "NOPPPE",
        "icon": "assets/spotify-icon.png"
    },
]

class taskbar extends HTMLElement {
    constructor() {
        super()
        this.renderItems()
    }

    renderItems() {
        this.createTaskbarAppItem('Start Menu', 'assets/windows11-icon.png')
        TASKBAR_APPS.forEach(app => this.createTaskbarAppItem(app.name, app.icon))
        this.createTimeAndDateWidget()
    }

    createTaskbarAppItem(name, icon) {
        let newItem = document.createElement('taskbar-item')
        newItem.innerHTML = `
            <img draggable="false" src="${icon}">
        `
        newItem.classList.add('app')
        newItem.setAttribute('app-name', name)
        this.appendChild(newItem)
    }

    createTimeAndDateWidget() {
        let newItem = document.createElement('time-date')
        this.appendChild(newItem)
    }
}

class taskbarItem extends HTMLElement {
    constructor() {
        super()
        this.createMouseEvents()
    }

    createMouseEvents() {
        this.onmouseenter = () => {
            this.showItemTitle()
        }
        this.onmouseleave = () => {
            this.hideTitle()
        }
        this.onclick = () => {
            this.hideTitle()
            // open start menu if it's the right item
            if (this.querySelector('img').getAttribute('src') == 'assets/windows11-icon.png') {
                toggleStartMenu()
            }
        }
    }

    showItemTitle() {
        // get app name
        const titleText = this.getAttribute('app-name')

        // left offset & width
        const width = this.clientWidth
        const rect = this.getBoundingClientRect()
        let left = (rect.left + window.scrollX) - (width / 2)
        // create title
        let title = document.createElement('div')
        title.classList.add('TaskbarItemTitle')
        title.innerHTML = `<span>${titleText}</span>`
        title.style.left = left+ 'px'
        // add title to the DOM
        document.body.appendChild(title)
    }

    hideTitle() {
        if (document.querySelector('.TaskbarItemTitle')) {
            document.querySelector('.TaskbarItemTitle').remove()
        }
    }
}

class timeAndDate extends taskbarItem {
    constructor() {
        super()
        this.innerHTML = "20:31<br>08/07/2022"
        this.setAttribute('app-name', '8th July 2022')
    }
}

customElements.define('task-bar', taskbar)
customElements.define('taskbar-item', taskbarItem)
customElements.define('time-date', timeAndDate)