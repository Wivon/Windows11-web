let CURRENT_CONTEXT_MENU = null

DESKTOP.oncontextmenu = (e) => {
    let contextMenu = document.createElement('context-menu')
    document.body.appendChild(contextMenu)
    contextMenu.render(e.clientX, e.clientY)
}

class contextMenu extends HTMLElement {
    constructor() {
        super()
        CURRENT_CONTEXT_MENU = this
    }

    render(x, y) {
        this.innerHTML = `
            <button>Display</button>
            <button>Sort</button>
            <button>refresh</button>
            <hr>
            <button>Cancel delete</button>
            <button>New</button>
            <hr>
            <button>Display settings</button>
            <button>Customize</button>
            <hr>
            <button>Open in terminal</button>
            <hr>
            <button>Show more options</button>
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
        this.remove()
    }
}

customElements.define('context-menu', contextMenu)