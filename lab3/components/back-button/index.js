export class BackButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(listener) {
        document
            .getElementById("back-button")
            .addEventListener("click", listener)
    }

    getHTML() {
        return (
           `
                <button id="back-button" style="
                width: 120px;
                height: 40px;
                border: 2px solid #b48ef0;
                border-radius: 20px;
                background: #000;
                color: #FFF;
                margin: 10px;
                font-size: 16px;
                font-weight: 500;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s ease;
            ">
                Назад
            </button>
            `
        )
    }

    render(listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener)
    }
}