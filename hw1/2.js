/*  Напишите функцию erase, которая очищает массив от 
    нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
*/ 

function erase(arr) {
    return arr.filter(element => 
      element !== false && 
      element !== undefined && 
      element !== '' && 
      element !== 0 && 
      element !== null
    );
}
  
const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(erase(data));