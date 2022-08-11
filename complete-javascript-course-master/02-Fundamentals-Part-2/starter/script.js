'use strict';
//strict mode幫助我們避免去做會導致JavaScript出錯的事情，會把出錯的部分顯示出來
/*
let hasDriverLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log('I can drive!');

// const interface = '543'; 會提醒預留字不可用來命名

//function 可以用來打包許多expression跟statement(詞跟句子)變成步驟重複使用，可以傳入資料也可以輸出資料，像一台小機器，括號裡面是parameters(function裡面用的local variable)
function logger() {
  //function body
  console.log('My name is Jonas');
}
//calling / running / invoking function
logger();
logger();
logger();

//function declaration 還沒被定義就能被呼叫
function fruitProcessor(apples, oranges){
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleMoreJuice = fruitProcessor(5,2);
console.log(appleMoreJuice);
console.log(fruitProcessor(5,2));

const orangeMoreJuice = fruitProcessor(2,5);
console.log(orangeMoreJuice);
//don't repeat yourself(keep your code dry)

function calcAge(birthYear){
  return 2037 - birthYear;
}

const age1 = calcAge(1991);
console.log(age1);

//function expressions 會產生值，要定義後才能用
const calcAge2 = function (birthYear){
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);

//arrow function，沒有this可以用

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstname) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstname} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1991, 'Jonas'));

function cutFruitPieces(fruit){
  return fruit *4;
}

function fruitProcessor(apples, oranges){
  console.log(apples, oranges);

  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2,3));
//括號裡面是argument，把資料放進function裡
//console.log不算是有return，要存到variable裡面才算執行function


const calcAge = function(birthyear) {
  return 2037 - birthyear;
}

const yearsUntilRetirement = function(birthYear, firstname) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0 ){
    return `${firstname} retires in ${retirement} years.`//return之後的程式碼都不會被執行
  } else{
    console.log(`${firstname} already retired.`); 
    return -1;
  }

  // return retirement;
  
}

console.log(yearsUntilRetirement(1950,'Jonas'));
*/