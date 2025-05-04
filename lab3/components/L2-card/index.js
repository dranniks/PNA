export class L2CardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return (
            `
                <div class="card" style="
                    width: 300px;
                    height: 400px;
                    border: 2px solid  #b48ef0;
                    border-radius: 15px;
                    background: #000;
                    color: #FFF;
                    overflow: hidden;
                    margin: 10px;
                    position: relative;
                ">
                    <img class="card-img-top" 
                         src="${data.src}" 
                         alt="картинка"
                         style="
                            height: 200px;
                            object-fit: cover;
                            border-radius: 13px 13px 0 0;
                         ">
                    <div class="card-body" style="
                        padding: 1.25rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;">
                        <h5 class="card-title" style="
                            font-size: 1.25rem;
                            margin-bottom: 0.75rem;
                        ">${data.title}</h5>
                        <p class="card-text" style="
                            font-size: 0.9rem;
                            line-height: 1.4;
                            margin-bottom: 1.25rem;
                        ">${data.text}</p>
                        <div class="d-flex justify-content-between">
                            <button class="btn" 
                                    id="click-card-${data.id}" 
                                    data-id="${data.id}"
                                    style="
                                        background: #b48ef0;
                                        color: #000;
                                        font-weight: 500;
                                    ">
                                Подробнее
                            </button>
                            <button class="btn btn-danger" id="delete-card-${data.id}">
                                Удалить
                            </button>
                        </div>
                    </div>
                </div>
            `
        )
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