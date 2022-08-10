
/*let js = 'amazing';
if (js === 'amazing') alert ('JavaScript is fun!');
      
console.log(10 + 20 + 30 - 1);
console.log("Jonas");
console.log(23)

let firstName = "Bob";
console.log(firstName);

//資料型別
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
//boolean
console.log(typeof javascriptIsFun);
//boolean
// console.log(typeof 23);
//number
// console.log(typeof "javaScript");
//string

//dynamic type 型別不是固定的，會隨資料類型變化
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);
//原本是boolean變成string

//undefined 空值、尚未定義
let year;
console.log(year);
console.log(typeof year);

//null的型別是物件，一個年久失修的bug
console.log(typeof null);
//object


//let是後面會更改內容的variable，也適合用在定義之後才要用的變數
let age = 30;
age = 31;

//const是之後不會改動的variable，比起let可以讓程式碼更整齊更好找，不知道要用什麼就用const多用多健康
// const birthyear = 1991;
// birthyear = 1990;

//比較舊的用法，現已被let取代
var job = "programmer";
job = "teacher";

//不會報錯但是不建議的用法，最好是每個variable都定義好let const 或 var
lastName = "Wayne";
console.log(lastName);

//operator
const now = 2037;
const ageJonas = now-1991;
const ageSarah = now-2019;
console.log(ageJonas, ageSarah);

console.log(ageJonas*2, ageJonas/10, 2**3);

//可以加空白
const firstName = 'Jonas';
const lastName = 'Mayer';
console.log(firstName + ' ' + lastName);

//可以算數學
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x ++; // x = x + 1
x --;// x = x - 1
x --;
console.log(x);

//可以判斷大小
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now -2018);


//operator執行順序
const now = 2037;
const ageJonas = now-1991;
const ageSarah = now-2019;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

//程式執行由右至左（有些運算子是由左至右）
let x,y;
x = y = 25-10-5; //x = y = 10
console.log(x,y);

//https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas,ageSarah, averageAge);

//template literals，用``取代麻煩的空白和加號
const firstName = 'Jonas';
const job = 'teacher';
const birthyear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthyear) + 'years old' + job + '!';
console.log(jonas); 
const jonasNew = `I'm ${firstName} , a ${year - birthyear} years ole ${job}!`
console.log(jonasNew);
console.log(`Just a regular string...`)

//``也可以用在多行
console.log('string with \n\
multiple \n\
lines');

console.log(`string
with
multiple
lines`);


//用if else判斷回應的不同句子
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log('Sarah can start driving license 🚗');
} else{
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
};

const birthyear = 1990;
let century;

if (birthyear <= 2000) {
  century = 20;
}else{
  century = 21;
};

console.log(century);

//2022/08/10


//type conversion 手動轉換型別從字串到數字
const inputyear = '1991';
console.log(Number(inputyear));
console.log(Number(inputyear)+18);
//如果轉換失敗會顯示NaN(not a number)NaN的type也是number
//也可以從數字轉換成字串
console.log(String(30),30)

//type coercion JavaScript會自動轉換型別
console.log("I'm " + 23 + " years old.");
console.log('23' - '10' - 3);
console.log('23' * '2');
//Javascript會自動會把字串轉成數字
let n = '1' + 1;//'11'
n = n - 1;//10
console.log(n);

// 5 falsy values: 0, "", undefined, null, NaN
console.log(Boolean(0)); 
console.log(Boolean(undefined)); 
console.log(Boolean('')); 
console.log(Boolean({})); //true

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
}else{
  console.log("You should get a job!");
}

//注意：如果height = 0 一樣會是false
let height
if (height){
  console.log('YAY! Height is defined!');
}else{
  console.log('Height is not defined.')
}


const age = '18';
//strict eqal 不做type cuercion
if (age === 18) console.log('You just became an adult :D (strict)');
//loose eqal 會自動轉換型別，會有bug不要用，最好用===然後在比較前手動轉換型別
if (age == 18) console.log('You just became an adult :D (loose)');

const favorite = Number(prompt("What's your favourite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 822) { //'23' = 23
  console.log('Cool! 822 is an amazing number!')
}else if (favorite == 822) { 
  console.log('Cool! 822 is an amazing number! (sort of)')
}else{
  console.log(`${favorite} not a cool number`)
}
//不等於加個驚嘆號
if (favorite !== 822) console.log('Why not 822?');

//Basin boolean logic: And Or & Not

//And 要全部都true
//Or 只要有一個true就是true
//Not 變成相反的結果（！）會第一個執行

const hasDriverLicense = true;
const hasGoodVision = true;

//And
console.log(hasDriverLicense && hasGoodVision);

//Or
console.log(hasDriverLicense || hasGoodVision);

//Not
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive){
//   console.log('Sarah is able to drive!')
// } else {
//   console.log('someone else should drive.')
// }

const isTired = false;
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired){
  console.log('Sarah is able to drive!')
} else {
  console.log('someone else should drive.')
}


const day = 'friday';

switch(day){
  case 'monday':
    console.log('Go to coding meetup!');
    break;
  case 'tuesday':
    console.log('Prepare theory vidoes.');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code example');
  break;
  case 'friday':
    console.log('Record videos');
  break;
  case 'saturday':
  case 'sunday':
    console.log('enjoy weekend! :D');
  break;
  default:
    console.log('Not a valid day :(')
}

if (day === 'wednesday'){
  console.log('星期三猴子去爬山');
}else if (day === 'thursday'){
  console.log('星期四猴子逛夜市');
}else if(day === 'monday' || day === 'tuesday' || day === 'friday'){
  console.log('猴子要上班');
}else{
  console.log('猴子放假');
}

//ternary operator (condition operator)
const age = 19;
age >= 18 ? console.log("I like to drink wine 🍷") : console.log("I like to drink water 🥛");

const drink = age >= 18 ? 'wine🍷' : 'water🥛';
console.log(drink);
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 🥛"}`);
*/