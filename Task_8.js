let myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');
function printAll(){
  myMap.forEach((value, key) => {
    console.log (`Ключ- ${key}, значение- ${value}`)
  })
}
printAll();