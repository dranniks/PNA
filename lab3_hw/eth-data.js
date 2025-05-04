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
    },
    {
        id: 8,
        title: "Undefined",
        src: undefined,
        text: "",
        fulltext: null,
        cap: 0,
        popular: false,
        users: null,
        coins: [],
        tps: undefined,
        security: ""
    }
]

export default eth_data;