DESKTOP.oncontextmenu = (e) => {
    let contextMenu = document.createElement('context-menu')
    document.body.appendChild(contextMenu)
    contextMenu.render(e.clientX, e.clientY)
}

class contextMenu extends HTMLElement {
    constructor() {
        super()
    }

    render(x, y) {
        this.innerHTML = `
            <button>Display</button>
            <button>Sort</button>
            <button>refresh</button>
        `

        this.style.left = x + "px"
        this.style.top = y + "px"
        
        this.closeOthersContextMenu()
    }

    closeOthersContextMenu() {
        document.querySelectorAll('context-menu').forEach(contextMenu => {
            if (contextMenu != this) {
                contextMenu.close()
            }
        })
    }

    close() {
        this.remove
    }
}

customElements.define('context-menu', contextMenu)