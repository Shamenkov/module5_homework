let myArr1 = [2, 3, 4, 5, true];
let arrType =typeof(myArr1[0])
console.log(arrType)
let newArr = myArr1.every(item => {
  if (typeof(item) === arrType){
    return true
  }
});
console.log(newArr)