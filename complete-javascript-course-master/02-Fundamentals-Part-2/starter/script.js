'use strict';
//strict mode幫助我們避免去做會導致JavaScript出錯的事情，會把出錯的部分顯示出來

let hasDriverLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log('I can drive!');

// const interface = '543'; 會提醒預留字不可用來命名

//function 可以用來打包許多expression跟statement(詞跟句子)變成步驟重複使用，可以傳入資料也可以輸出資料，像一台小機器
function logger() {
  //function body
  console.log('My name is Jonas');
}
//calling / running / invoking function
logger();
logger();
logger();

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