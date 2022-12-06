function reverseString(str){
    let arr =str.split('');
    arr.reverse();
    let newStr = arr.join('')
    console.log(newStr);
  }
  reverseString("SkillFactory");