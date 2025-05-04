/*
    Напишите функцию anagram, которая будет принимать на вход массив слов и группировать его на группы слов-анаграмм. 
    Выводить только группы из двух и более слов. 
    Слова в группах, как и сами группы, должны быть отсортированными
*/

function anagram(words) {
    const groups = {};
  
    // Группируем слова по их "ключу" (отсортированным буквам)
    for (const word of words) {
      const key = [...word].sort().join('');
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(word);
    }
  
    // Фильтруем группы и сортируем результат
    const result = Object.values(groups)
      .filter(group => group.length >= 2) // Оставляем группы из 2+ слов
      .map(group => group.sort()) // Сортируем слова внутри группы
      .sort((a, b) => a[0].localeCompare(b[0])); // Сортируем группы по первому слову
  
    return result;
}

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(anagram(words)); 