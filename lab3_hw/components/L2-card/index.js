export class L2CardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return `
                <div class="l2-card">
                    <img class="l2-card-img" 
                        src="${data.src}" 
                        alt="${data.title}">
                    <div class="l2-card-body">
                        <h5 class="l2-card-title">${data.title}</h5>
                        <p class="l2-card-text">${data.text}</p>
                        <div class="d-flex justify-content-between">
                            <button class="l2-card-button" 
                                    id="click-card-${data.id}" 
                                    data-id="${data.id}">
                                Подробнее
                            </button>
                            <button class="l2-card-button l2-card-delete-btn" 
                                    id="delete-card-${data.id}">
                                Удалить
                            </button>
                        </div>
                    </div>
                </div>
        `;
    }
    
    render(data, listener) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(data, listener);
    }

    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener);

        document
            .getElementById(`delete-card-${data.id}`)
            .addEventListener("click", () => {
                document.dispatchEvent(new CustomEvent("delete-card", { detail: data.id }));
            });
    }
}