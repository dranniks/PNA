export class AddButtonComponet {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(listener) {
        document
            .getElementById("add-button")
            .addEventListener("click", listener);
    }

    getHTML() {
        return (
            `
                <button id="add-button" style="
                    width: 300px;
                    height: 400px;
                    border: 2px solid  #b48ef0;
                    border-radius: 15px;
                    background: #000;
                    color: #FFF;
                    margin: 10px;
                ">Добавить</button>
            `
        )
    }

    render(listener) {
        console.log("AddButtonComponet render called");
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(listener)
    }
}