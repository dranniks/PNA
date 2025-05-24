class L2Urls {
    constructor() {
        this.baseUrl = 'http://localhost:3000';
    }

    getL2() {
        return `${this.baseUrl}/l2`;
    }

    getL2ById(id) {
        return `${this.baseUrl}/l2/${id}`;
    }

    createL2() {
        return `${this.baseUrl}/l2`;
    }

    removeL2ById(id) {
        return `${this.baseUrl}/l2/${id}`;
    }

    updateL2ById(id) {
        return `${this.baseUrl}/l2/${id}`;
    }
}

export const l2Urls = new L2Urls();