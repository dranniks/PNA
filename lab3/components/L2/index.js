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
    
            <style>
                .network-card {
                    width: 600px;
                    display: flex;
                    background: #000;
                    color: white;
                    border-radius: 12px;
                    overflow: hidden;
                    border: 2px solid #b48ef0;
                    box-shadow: 0 4px 20px rgba(180, 142, 240, 0.2);
                    margin-bottom: 20px;
                }
    
                .card-image-container {
                    width: 40%;
                    overflow: hidden;
                }
    
                .card-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }
    
                .card-content {
                    width: 60%;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                }
    
                .card-title {
                    color: #b48ef0;
                    font-size: 1.5rem;
                    margin: 0 0 12px 0;
                    font-weight: 600;
                }
    
                .card-description {
                    color: #d0d0d0;
                    margin: 0 0 16px 0;
                    line-height: 1.4;
                }
    
                .divider {
                    height: 1px;
                    background: #b48ef0;
                    opacity: 0.3;
                    margin: 0 0 16px 0;
                }
    
                .card-fulltext {
                    color: #b0b0b0;
                    font-size: 0.9rem;
                    margin: 0 0 20px 0;
                    line-height: 1.5;
                }
    
                .card-details {
                    display: flex;
                    gap: 20px;
                }
    
                .details-column {
                    flex: 1;
                }
    
                .detail-item {
                    margin: 0 0 10px 0;
                    color: white;
                    font-size: 0.9rem;
                    line-height: 1.4;
                }
    
                .detail-label {
                    color: #b48ef0;
                    font-weight: 500;
                    display: inline-block;
                    min-width: 100px;
                }
            </style>
        `;
    }

    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}