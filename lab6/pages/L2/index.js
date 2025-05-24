import { L2Component } from "../../components/L2/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";
import {ajax} from "../../modules/ajax.js";
import {l2Urls} from "../../modules/l2Urls.js";


export class L2Page {
    constructor(parent, id) {
        this.parent = parent;
        this.id = id;
    }

    getData(callback) {
        // Делаем прямой запрос к серверу
        ajax.get(l2Urls.getL2ById(this.id), (data, status) => {
            if (status === 200 && data) {
                callback(data);
            } else {
                console.error('Ошибка получения данных карточки:', status);
                callback(null);
            }
        });
    }

    get pageRoot() {
        return document.getElementById('product-page');
    }

    getHTML() {
        return `<div id="product-page"></div>`;
    }

    clickBack() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }
    
    render() {
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());
        
        const backButton = new BackButtonComponent(this.pageRoot);
        backButton.render(this.clickBack.bind(this));
        
        // Получаем данные асинхронно
        this.getData((data) => {
            if (data) {
                const product = new L2Component(this.pageRoot);
                product.render(data);
            } else {
                this.pageRoot.innerHTML = '<p>Карточка не найдена</p>';
            }
        });
    }
}