let clientVal=prompt("Please enter you\'r value");
let clientDigit= +clientVal;
let clienBolean = Boolean(clientDigit);
let typeDigit = typeof clientDigit; //check digit type
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