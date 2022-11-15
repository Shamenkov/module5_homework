//1 Task
let clientVal=prompt("Please enter you\'r value");
console.log(clientVal);
let clientDigit= +clientVal;
console.log(clientDigit);
let clienBolean = Boolean(clientDigit);
console.log(clienBolean);
let typeDigit = typeof clientDigit;
console.log(typeDigit);
let countDigit = clientDigit % 2;
if (clienBolean === true){
  if (countDigit === 0){
    console.log("Четное")
  }else{
    console.log("Нечетное")
  }
}else if(clienBolean === false){
  console.log("Упс, кажется, вы ошиблись")
}


//2 Task
let x = 2;
let typeX = typeof x;
if(typeX === "number"){
  console.log('x - число')
}else if(typeX === "string"){
  console.log('x - строка')
}else if(typeX === "boolean"){
  console.log('x - логический тип')
}


//3 Task
function reverseString(str){
  let arr =str.split('');
  arr.reverse();
  let newStr = arr.join('')
  console.log(newStr);
}
reverseString("SkillFactory");

//4 Task
function randomDigit(max) {
  return Math.floor(Math.random() * max);
}
console.log(randomDigit(100));

//5 Task
let myArr = [2, 0, 'S', 'k', 'l', 'l', 'f', 'c', 't', 'r', 2, 2];
console.log(myArr.length)
for (let i= 0; i<myArr.length; i++){
  console.log(myArr[i]);
}

//6 Task
let myArr1 = [2, 3, 4, 5, true];
let arrType =typeof(myArr1[0])
console.log(arrType)
let newArr = myArr1.every(item => {
  if (typeof(item) === arrType){
    return true
  }
});
console.log(newArr)

//7 Task
let arrCounterChet = 0;
let arrCounterNeChet = 0;
let arrZero = 0;
let myArr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < myArr2.length; i = i + 1) {
  if(i === 0 || typeof(i) !== "number"){
    arrZero +=1
  }
  else if(i%2 !== 0){
    arrCounterNeChet += 1
  }
  else if(i%2 === 0){
    arrCounterChet += 1
  }
}
console.log(arrZero)
console.log(arrCounterChet)
console.log(arrCounterNeChet)

//8 Task ШАБЛОННЫЕ СТРОКИ
let myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

let keyCount = myMap.keys()
let valueCount = myMap.values()
console.log (`Ключ- ${keyCount}, значение- ${valueCount}`)
