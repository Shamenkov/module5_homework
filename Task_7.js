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