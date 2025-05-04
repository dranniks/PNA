export const findL2AnagramsGroups = (eth_data) => {
    const L2titles = eth_data.map(item => item.title);
    const titleMap = new Map();
    
    // Создаем группы анаграмм
    L2titles.forEach(title => {
        const key = [...title.replace(/\s+/g, '').toLowerCase()].sort().join('');
        if (!titleMap.has(key)) titleMap.set(key, []);
        titleMap.get(key).push(title);
    });

    // Фильтруем только группы с анаграммами
    return Array.from(titleMap.values()).filter(group => group.length > 1);
};

export const L2Anagram = (eth_data, buttonContainer, renderCards) => {
    const button = document.createElement('button');
    button.textContent = 'Показать анаграммы';
    button.className = 'l2-button l2-button-anagram';
    
    buttonContainer.appendChild(button);

    let showAnagrams = false;
    
    button.addEventListener('click', () => {
        showAnagrams = !showAnagrams;
        
        if (showAnagrams) {
            const anagramsGroups = findL2AnagramsGroups(eth_data);
            const allAnagramsTitles = anagramsGroups.flat();
            const filteredData = eth_data.filter(item => 
                allAnagramsTitles.includes(item.title)
            );
            renderCards(filteredData);
            button.textContent = 'Показать все';
        } else {
            renderCards(eth_data);
            button.textContent = 'Показать анаграммы';
        }
    });
};

export const L2Search = (eth_data, searchInput, renderCards) => {
    searchInput.className = 'l2-search-input';
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase().trim();
        const filteredData = eth_data.filter(item => 
            item.title.toLowerCase().startsWith(query)
        );
        renderCards(filteredData);
    });
};

export const L2Concatenate = (eth_data, containerSelector) => {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    const wrapper = document.createElement('div');
    const button = document.createElement('button');
    const coinsBox = document.createElement('div');
    
    button.className = 'l2-button l2-button-concat';
    coinsBox.className = 'l2-coins-container';

    const updateCoins = () => {
        const allCoins = [...new Set(eth_data.flatMap(item => item.coins))]
            .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
        coinsBox.innerHTML = `
            <span>Все монеты:</span>
            ${allCoins.join('<span>, </span>')}
        `;
    };

    button.textContent = 'Конкатенация названий монет';
    let isVisible = false;

    button.addEventListener('click', () => {
        isVisible = !isVisible;
        coinsBox.style.display = isVisible ? 'block' : 'none';
        button.textContent = isVisible ? 'Скрыть' : 'Конкатенация названий монет';
        updateCoins();
    });

    wrapper.append(button, coinsBox);
    container.append(wrapper);
};

export const L2Erase = (data) => {
    return data.filter(item => 
        item.title && 
        item.title !== 'Undefined' && 
        item.src && 
        item.text && 
        item.cap !== 0 && 
        item.coins.length > 0
    );
};

export const L2CleanButton = (data, containerSelector, renderCallback) => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const button = document.createElement('button');
    button.textContent = 'Удаление нежелательных значений';
    button.className = 'l2-button l2-button-clean';

    button.addEventListener('click', () => {
        const cleanedData = L2Erase(data);
        data.splice(0, data.length, ...cleanedData);
        renderCallback(cleanedData);
    });

    container.appendChild(button);
};