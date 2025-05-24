export class L2CardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return `
            <div class="l2-card" data-card-id="${data.id}">
                <img class="l2-card-img" 
                    src="${data.src}" 
                    alt="${data.title}">
                <div class="l2-card-body">
                    <h5 class="l2-card-title">${data.title}</h5>
                    <p class="l2-card-text">${data.text}</p>
                    <div class="d-flex justify-content-between">
                        <button class="l2-card-button details-btn" 
                                data-id="${data.id}">
                            Подробнее
                        </button>
                        <div class="btn-group">
                            <button class="l2-card-button edit-btn" 
                                    data-id="${data.id}">
                                ✏️
                            </button>
                            <button class="l2-card-button delete-btn" 
                                    data-id="${data.id}">
                                🗑️
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    render(data, listener) {
        const html = this.getHTML(data);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        this.parent.appendChild(tempDiv.firstElementChild);
        this.addListeners(data, listener);
    }

    addListeners(data, listener) {
        const cardElement = this.parent.lastElementChild;
        
        cardElement.querySelector('.details-btn').addEventListener('click', listener);
        
        cardElement.querySelector('.delete-btn').addEventListener('click', () => {
            document.dispatchEvent(new CustomEvent("delete-card", { 
                detail: data.id 
            }));
        });
        
        cardElement.querySelector('.edit-btn').addEventListener('click', () => {
            document.dispatchEvent(new CustomEvent("edit-card", { 
                detail: data.id 
            }));
        });
    }
}