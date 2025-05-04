export class L2Component {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        return `
                <div class="network-card">
                    <div class="card-image-container">
                        <img src="${data.src || 'default-image.png'}" 
                            class="card-image" 
                            alt="${data.title || 'Без названия'}">
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">${data.title || 'Без названия'}</h3>
                        <p class="card-description">${data.text || 'Описание отсутствует'}</p>
                        <div class="divider"></div>
                        <p class="card-fulltext">${data.fulltext || 'Полное описание отсутствует'}</p>
                        
                        <div class="card-details">
                            <div class="details-column">
                                <p class="detail-item"><span class="detail-label">Капитализация:</span> ${data.cap || 'Нет данных'}</p>
                                <p class="detail-item"><span class="detail-label">Популярность:</span> ${data.popular || 'Нет данных'}</p>
                                <p class="detail-item"><span class="detail-label">Пользователи:</span> ${data.users || 'Нет данных'}</p>
                            </div>
                            <div class="details-column">
                                <p class="detail-item"><span class="detail-label">TPS:</span> ${data.tps || 'Нет данных'}</p>
                                <p class="detail-item"><span class="detail-label">Безопасность:</span> ${data.security || 'Нет данных'}</p>
                                <p class="detail-item"><span class="detail-label">Токены:</span> ${data.coins ? data.coins.join(', ') : 'Нет данных'}</p>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    }

    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}