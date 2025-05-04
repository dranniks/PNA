import {L2Page} from "../L2/index.js";
import { L2CardComponent } from "../../components/L2-card/index.js";
import { AddButtonComponet } from "../../components/add-button/index.js";
import eth_data from "../../eth-data.js";
import { L2Anagram, L2Search, L2Concatenate, L2CleanButton } from "../../hw/hw-utils.js";




export class MainPage {
    constructor(parent) {
        this.parent = parent;
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
    
    getData() {
        return eth_data;
    }

    clickCard(e) {
        const cardId = e.target.dataset.id
    
        const productPage = new L2Page(this.parent, cardId)
        productPage.render()
    }

    addL2Card() {
        const newId = Math.max(...eth_data.map(c => c.id), 0) + 1;
        const newCard = {
            id: newId,
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
            title: "Ethereum Mainnet",
            text: "Ведущий смарт-контракт блокчейн с переходом на PoS",
            fulltext: "Основной блокчейн Ethereum, совершивший переход с Proof-of-Work на Proof-of-Stake в 2022 году (The Merge). Поддерживает полную EVM-совместимость и является фундаментом для всех L2 решений. Планирует дальнейшие масштабируемость через протоколы Danksharding.",
            cap: "$400B", 
            popular: "95%",
            users: "250M+",
            coins: ["ETH", "USDT", "USDC", "DAI", "WBTC"],
            tps: 15,
            security: "Proof-of-Stake",
        };
        eth_data.push(newCard);
        this.render();
    }

    // удаление
    DeleteL2Card() {
        document.addEventListener("delete-card", (e) => {
            const index = eth_data.findIndex(card => card.id === e.detail);
            if (index !== -1) {
                eth_data.splice(index, 1);
            }
            this.renderCards(eth_data); // Обновляем отображение
        });
    }

    // рендер карточек при любых изменениях
    renderCards(data) {
        const cardContainer = this.pageRoot;
        cardContainer.innerHTML = "";
        
        data.forEach((item) => {
            const productCard = new L2CardComponent(cardContainer);
            productCard.render(item, this.clickCard.bind(this));
        });
        
        new AddButtonComponet(cardContainer).render(this.addL2Card.bind(this));
    }

    renderAllCards() {
        this.renderCards(eth_data);
    }


    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
    
        // функции из домашнего задания
        L2Anagram(eth_data, document.querySelector('.main-controls'), this.renderCards.bind(this));
        L2Search(eth_data, document.getElementById("search-input"), this.renderCards.bind(this));
        L2Concatenate(eth_data, '.coins-container');
        L2CleanButton(eth_data, '.main-controls', this.renderCards.bind(this));

        this.DeleteL2Card();
        this.renderAllCards();
    }

}