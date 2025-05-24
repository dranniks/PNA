class Ajax {
    /**
     * GET запрос
     * @param {string} url - Адрес запроса
     * @param {function} callback - Функция обратного вызова (data, status)
     */
    async get(url, callback) {
        try {
            const response = await fetch(url);
            await this._handleFetchResponse(response, callback);
        } catch (error) {
            this._handleError(error, callback);
        }
    }

    /**
     * POST запрос
     * @param {string} url - Адрес запроса
     * @param {object} data - Данные для отправки
     * @param {function} callback - Функция обратного вызова (data, status)
     */
    async post(url, data, callback) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            await this._handleFetchResponse(response, callback);
        } catch (error) {
            this._handleError(error, callback);
        }
    }

    /**
     * PATCH запрос
     * @param {string} url - Адрес запроса
     * @param {object} data - Данные для обновления
     * @param {function} callback - Функция обратного вызова (data, status)
     */
    async patch(url, data, callback) {
        try {
            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            await this._handleFetchResponse(response, callback);
        } catch (error) {
            this._handleError(error, callback);
        }
    }

    /**
     * DELETE запрос
     * @param {string} url - Адрес запроса
     * @param {function} callback - Функция обратного вызова (data, status)
     */
    async delete(url, callback) {
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            await this._handleFetchResponse(response, callback);
        } catch (error) {
            this._handleError(error, callback);
        }
    }

    /**
     * Обработчик ответа (приватный метод)
     * @param {Response} response - Объект ответа
     * @param {function} callback - Функция обратного вызова
     */
    async _handleFetchResponse(response, callback) {
        try {
            const contentType = response.headers.get('content-type');
            const status = response.status;
            let data = null;

            // Обработка пустых ответов
            if (status === 204 || response.headers.get('content-length') === '0') {
                callback(null, status);
                return;
            }

            // Парсинг только для JSON
            if (contentType && contentType.includes('application/json')) {
                data = await response.json();
            } else {
                data = await response.text();
            }

            callback(data, status);
        } catch (error) {
            console.error('Response handling error:', error);
            callback(null, response.status);
        }
    }

    /**
     * Обработчик ошибок (приватный метод)
     * @param {Error} error - Объект ошибки
     * @param {function} callback - Функция обратного вызова
     */
    _handleError(error, callback) {
        console.error('Network error:', error);
        callback(null, 0);
    }
}

export const ajax = new Ajax();