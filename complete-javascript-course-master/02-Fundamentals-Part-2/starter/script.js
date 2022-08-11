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


//array 可以一次存很多資料 (literal syntax)
const friends = ['Michael','Steven','Peter'];
//另一種array寫法(用array function)
const y = new Array(1991,1984,2008,2020);

//拿到array資料
console.log(friends[0]);
//拿到array總共有幾項
console.log(friends.length);
//拿到array最後一項
console.log(friends[friends.length-1]);
//改array裡的特定項目（不受const限制）
friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'] 但整個重新換過是不行的

//可以放其他variable，字串，數字，和其他array
const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037-1991, friends];
console.log(jonas);
console.log(jonas.length);

//array裡的項目可以個別拿出來放進function裡面
const years = [1990, 1967,2002,2010,2018];
console.log(calcAge(years[0]));
console.log(calcAge(years[years.length-1]));
//會產生值的function也可以放進array裡
const ages = [calcAge(years[0]),calcAge(years[years.length-1])]
console.log(ages);

//array method


const friends = ['Michael','Steven','Peter'];
//.push可以把新項目加進array裡，作為最後一個項目
const newLength = friends.push('Jay');//這功能會return增加後的項目個數
console.log(friends);
console.log(newLength);
//.unshift可以把新項目加進array裡，作為第一個項目
friends.unshift('John');
console.log(friends);
//.pop可以把最後一個項目從array中移除
const poped = friends.pop();
console.log(friends);//這功能會顯示被移除的項目
console.log(poped);
//.shift可以把第一個項目從array中移除
friends.shift();
console.log(friends);
//indexOf可以顯示項目在array中的位置（第幾個）
console.log(friends.indexOf('Steven'));
//如果是不在array中的項目會傳回-1
console.log(friends.indexOf('Bob')); //-1


//include可以顯示該項目有沒有在array裡面（不會自動轉換型別）
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
friends.push(23);
console.log(friends.includes('23'));//false
console.log(friends.includes(23));//true

if (friends.includes('Peter')){
  console.log('You have a friend called Peter!')
}*/