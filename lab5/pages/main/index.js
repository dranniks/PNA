import {L2Page} from "../L2/index.js";
import { L2CardComponent } from "../../components/L2-card/index.js";
import { AddButtonComponet } from "../../components/add-button/index.js";
import { L2Anagram, L2Search, L2Concatenate, L2CleanButton } from "../../hw/hw-utils.js";
import {ajax} from "../../modules/ajax.js";
import {l2Urls} from "../../modules/l2Urls.js";
import {EditPage} from "../edit/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.currentData = []; // Храним текущие данные
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return `
            <div>
                <div class="main-controls">
                    <input type="text" 
                        id="search-input" 
                        class="main-search-input"
                        placeholder="Поиск названия по префиксу">
                    <div id="add-button-container"></div>
                </div>
                <div class="coins-container"></div>
                <div id="main-page" class="main-page-container"></div>
            </div>
        `;
    }
    
    getData(callback) {
        ajax.get(l2Urls.getL2(), (data, status) => {
            if (status === 200 && Array.isArray(data)) {
                this.currentData = data;
                this.renderCards(data);
                if (callback) callback();
            } else {
                console.error('Ошибка получения данных:', status);
            }
        });
    }

    clickCard(e) {
        const cardId = e.target.dataset.id;
        const productPage = new L2Page(this.parent, cardId);
        productPage.render();
    }

    addL2Card() {
        // Перенаправляем на страницу создания
        const editPage = new EditPage(this.parent);
        editPage.render();
    }

    DeleteL2Card() {
        document.addEventListener("delete-card", (e) => {
            const id = e.detail;
            ajax.delete(l2Urls.getL2ById(id), (data, status) => {
                if (status === 200) {
                    this.getData(); // Обновляем данные после удаления
                }
            });
        });
    }

    renderCards(data) {
        const cardContainer = this.pageRoot;
        if (!cardContainer) {
            console.error('Container not found');
            return;
        }
        cardContainer.innerHTML = "";
        
        data.forEach((item) => {
            const productCard = new L2CardComponent(cardContainer);
            productCard.render(item, this.clickCard.bind(this));
        });
        
        new AddButtonComponet(cardContainer).render(this.addL2Card.bind(this));
    }

    setupEditListener() {
        document.addEventListener("edit-card", (e) => {
            const id = e.detail;
            const editPage = new EditPage(this.parent, id);
            editPage.render();
        });
    }

    setupEventListeners() {
        document.addEventListener("delete-card", (e) => {
            const id = e.detail;
            this.handleDeleteCard(id);
        });

        document.addEventListener("edit-card", (e) => {
            const id = e.detail;
            this.handleEditCard(id);
        });
    }

    handleDeleteCard(id) {
            ajax.delete(l2Urls.removeL2ById(id), (data, status) => {
                if (status === 200) {
                    this.currentData = this.currentData.filter(item => item.id !== id);
                    this.renderCards(this.currentData);
                }
            });
    }

    handleEditCard(id) {
        const editPage = new EditPage(this.parent, id);
        editPage.render();
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
        
        this.setupEventListeners();
        this.getData(() => {
            L2Anagram(this.currentData, document.querySelector('.main-controls'), this.renderCards.bind(this));
            L2Search(this.currentData, document.getElementById("search-input"), this.renderCards.bind(this));
            L2Concatenate(this.currentData, '.coins-container');
            L2CleanButton(this.currentData, '.main-controls', this.renderCards.bind(this));
        });
    }
}
