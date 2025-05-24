export class EditFormComponent {
    constructor(parent, data = null) {
        this.parent = parent;
        this.data = data;
        this.isEditMode = !!data;
    }

    getHTML() {
        return `
            <div class="edit-form">
                <form id="l2-form">
                    <div class="form-group">
                        <label>URL изображения:</label>
                        <input type="url" id="src" 
                            value="${this.data?.src || ''}" 
                            required>
                    </div>

                    <div class="form-group">
                        <label>Название:</label>
                        <input type="text" id="title" 
                            value="${this.data?.title || ''}" 
                            required>
                    </div>
                    
                    <div class="form-group">
                        <label>Краткое описание:</label>
                        <textarea id="text" required>${this.data?.text || ''}</textarea>
                    </div>

                    <div class="form-group">
                        <label>Полное описание:</label>
                        <textarea id="fulltext">${this.data?.fulltext || ''}</textarea>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label>Капитализация:</label>
                            <input type="text" id="cap" 
                                value="${this.data?.cap || ''}">
                        </div>

                        <div class="form-group">
                            <label>Популярность:</label>
                            <input type="text" id="popular" 
                                value="${this.data?.popular || ''}">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label>Пользователи:</label>
                            <input type="text" id="users" 
                                value="${this.data?.users || ''}">
                        </div>

                        <div class="form-group">
                            <label>TPS:</label>
                            <input type="number" id="tps" 
                                value="${this.data?.tps || 0}" 
                                min="0">
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Безопасность:</label>
                        <input type="text" id="security" 
                            value="${this.data?.security || ''}">
                    </div>

                    <div class="form-group">
                        <label>Токены (через запятую):</label>
                        <input type="text" id="coins" 
                            value="${this.data?.coins?.join(', ') || ''}">
                    </div>

                    <button type="submit" class="save-btn">
                        ${this.isEditMode ? 'Сохранить' : 'Создать'}
                    </button>
                </form>
            </div>
        `;
    }

    getFormData() {
        return {
            src: document.getElementById('src').value,
            title: document.getElementById('title').value,
            text: document.getElementById('text').value,
            fulltext: document.getElementById('fulltext').value,
            cap: document.getElementById('cap').value,
            popular: document.getElementById('popular').value,
            users: document.getElementById('users').value,
            coins: document.getElementById('coins').value
                .split(',')
                .map(coin => coin.trim())
                .filter(coin => coin),
            tps: Number(document.getElementById('tps').value),
            security: document.getElementById('security').value
        };
    }

    validateForm(data) {
        const errors = [];
        
        if (!data.src.trim()) errors.push('URL изображения обязателен');
        if (!data.title.trim()) errors.push('Название обязательно');
        if (!data.text.trim()) errors.push('Краткое описание обязательно');
        if (isNaN(data.tps)) errors.push('TPS должен быть числом');
        
        if (errors.length > 0) {
            alert(errors.join('\n'));
            return false;
        }
        
        return true;
    }

    render(onSave) {
        const html = this.getHTML();
        this.parent.innerHTML = html;
        
        document.getElementById('l2-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = this.getFormData();
            if (this.validateForm(formData)) {
                onSave(formData);
            }
        });
    }
}