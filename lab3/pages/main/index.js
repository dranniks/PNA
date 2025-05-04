import {L2Page} from "../L2/index.js";
import { L2CardComponent } from "../../components/L2-card/index.js";
import { AddButtonComponet } from "../../components/add-button/index.js";

let eth_data = [
    {
        id: 1,
        src: "https://public.bnbstatic.com/image/pgc/202303/169822b9ac5b69e5e3bda831ee2c6381.jpg",
        title: "Arbitrum One",
        text: "Лидер среди L2 решений с оптимистичными роллапами",
        fulltext: "Первый в мире оптимистический rollup с EVM-совместимостью. Обрабатывает >40% всего L2 трафика Ethereum. Использует многопроходную систему валидации.",
        cap: "$2.5B",
        popular: "87%",
        users: "2.1M",
        coins: ["ETH", "ARB", "USDC"],
        tps: 40,
        security: "Ethereum-level"
    },
    {
        id: 2,
        src: "https://public.bnbstatic.com/image/pgc/202306/422063ecc222465df031e7c900647856.jpg",
        title: "Optimism",
        text: "Пионер Optimistic Rollup технологий",
        fulltext: "Вторая по величине L2 сеть с собственной экосистемой DeFi. Реализует концепцию Ethereum Virtual Machine (EVM) equivalence. Основной компонент Superchain экосистемы.",
        cap: "$1.8B",
        popular: "79%",
        users: "1.8M",
        coins: ["ETH", "OP", "DAI"],
        tps: 35,
        security: "Fraud proofs"
    },
    {
        id: 3,
        src: "https://public.bnbstatic.com/image/pgc/202305/a4429c7f0e95eef777fdadb08a3063c5.jpg",
        title: "Polygon zkEVM",
        text: "ZK-Rollup с полной EVM совместимостью",
        fulltext: "Первая в мире zero-knowledge L2 с полной эквивалентностью EVM. Использует революционные zkSNARKs для мгновенных выводов средств. Часть экосистемы Polygon 2.0.",
        cap: "$1.2B",
        popular: "68%",
        users: "950K",
        coins: ["MATIC", "ETH", "USDT"],
        tps: 150,
        security: "ZK proofs"
    },
    {
        id: 4,
        src: "https://public.bnbstatic.com/image/pgc/202402/60ae2d8e905d76ebefe3fa8a9a3afb0f.jpeg",
        title: "StarkNet",
        text: "ZK-STARK технология от StarkWare",
        fulltext: "Платформа общего назначения с поддержкой Cairo VM. Обеспечивает невероятную пропускную способность за счет криптографии следующего поколения. Используется для сложных DeFi операций.",
        cap: "N/A",
        popular: "54%",
        users: "620K",
        coins: ["ETH", "STRK"],
        tps: 3000,
        security: "STARK proofs"
    },
    {
        id: 5,
        src: "https://public.bnbstatic.com/image/cms/crawler/COINCU_NEWS/image-231-1024x512.png",
        title: "Base",
        text: "L2 решение от Coinbase на OP Stack",
        fulltext: "Официальная L2 сеть Coinbase, построенная на модифицированной версии OP Stack. Интегрирована с Coinbase Exchange для мгновенных трансакций. Основной хаб для CBDC экспериментов.",
        cap: "$900M",
        popular: "63%",
        users: "1.3M",
        coins: ["ETH", "USDC", "CBETH"],
        tps: 45,
        security: "Hybrid rollup"
    },
    {
        id: 6,
        src: "https://repository-images.githubusercontent.com/815726688/97688683-ee6b-449b-afed-9809c3005611",
        title: "zkSync Era",
        text: "ZK-Rollup с нативой аккаунт абстракцией",
        fulltext: "Третья версия zkSync с поддержкой Volition режима и смарт-контрактов LLVM-совместимых. Основной фокус - массовая адаптация через UX улучшения. Планирует децентрализованную sequencing сеть.",
        cap: "N/A",
        popular: "71%",
        users: "890K",
        coins: ["ETH", "ZK"],
        tps: 2000,
        security: "zkSync Prover"
    },
    {
        id: 7,
        src: "https://repository-images.githubusercontent.com/815726688/97688683-ee6b-449b-afed-9809c3005611",
        title: "Era Synczk",
        text: "ZK-Rollup с нативой аккаунт абстракцией",
        fulltext: "Третья версия zkSync с поддержкой Volition режима и смарт-контрактов LLVM-совместимых. Основной фокус - массовая адаптация через UX улучшения. Планирует децентрализованную sequencing сеть.",
        cap: "N/A",
        popular: "71%",
        users: "890K",
        coins: ["ETH", "ZK"],
        tps: 2000,
        security: "zkSync Prover"
    }
]

export default eth_data;

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
                <div class="controls" style="
                    display: flex;
                    gap: 15px;
                    margin-bottom: 20px;
                    padding: 10px;
                    background: #000;
                    border-bottom: 1px solid #b48ef0;
                ">
                    <input type="text" 
                        id="search-input" 
                        placeholder="Search by title"
                        style="
                            flex-grow: 1;
                            max-width: 400px;
                            padding: 10px 15px;
                            border: 2px solid #b48ef0;
                            border-radius: 20px;
                            background: #000;
                            color: #fff;
                            font-size: 16px;
                            outline: none;
                            transition: all 0.3s ease;
                        "
                        onfocus="this.style.boxShadow='0 0 0 2px rgba(180, 142, 240, 0.5)';"
                        onblur="this.style.boxShadow='none';">
                    <div id="add-button-container"></div>
                </div>
                <div id="main-page" style="
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    padding: 10px;
                "></div>
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

    findL2Anagrams() {
        const L2titles = eth_data.map(item => item.title);
        
        const L2groups = {};
        
        for (const L2title of L2titles) {
            const L2normalized = L2title.replace(/\s+/g, '').toLowerCase();
            const L2key = [...L2normalized].sort().join('');
            
            if (!L2groups[L2key]) {
                L2groups[L2key] = [];
            }
            L2groups[L2key].push(L2title);
        }
        
        const L2result = Object.values(L2groups)
            .filter(L2group => L2group.length >= 2)
            .map(L2group => L2group.sort())
            .sort((a, b) => a[0].localeCompare(b[0]));
        
        return L2result;
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
    
        const L2anagramButton = document.createElement('button');
        L2anagramButton.textContent = 'Find L2 Anagrams';
        L2anagramButton.style.cssText = `
            padding: 10px 15px;
            background: #b48ef0;
            color: #000;
            border: none;
            border-radius: 20px;
            cursor: pointer;
            font-weight: bold;
            margin-left: 10px;
        `;
        document.querySelector('.controls').appendChild(L2anagramButton);

        L2anagramButton.addEventListener('click', () => {
            const L2anagrams = this.findL2Anagrams();
            if (L2anagrams.length > 0) {
                alert('Найдены L2 анаграммы:\n' + 
                    L2anagrams.map(L2group => L2group.join(' ↔ ')).join('\n'));
            } else {
                alert('L2 анаграммы среди названий сетей не найдены');
            }
        });

        const searchInput = document.getElementById("search-input");
        const cardContainer = this.pageRoot;
    
        const renderAll = () => {
            cardContainer.innerHTML = "";
            const query = searchInput.value.toLowerCase();
            const data = query ? eth_data.filter(item => 
                item.title.toLowerCase().includes(query)
            ) : eth_data;
            
            data.forEach((item) => {
                const productCard = new L2CardComponent(cardContainer);
                productCard.render(item, this.clickCard.bind(this));
            });
    
            // Всегда добавляем кнопку после карточек
            const addButton = new AddButtonComponet(cardContainer);
            addButton.render(this.addL2Card.bind(this));
        };
    
        searchInput.addEventListener("input", renderAll);
        document.addEventListener("delete-card", (event) => {
            eth_data = eth_data.filter(card => card.id !== event.detail);
            renderAll();
        });
        
        renderAll();
    }
}