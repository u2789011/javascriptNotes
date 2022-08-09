
/*let js = 'amazing';
if (js === 'amazing') alert ('JavaScript is fun!');
      
console.log(10 + 20 + 30 - 1);
console.log("Jonas");
console.log(23)

let firstName = "Bob";
console.log(firstName);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "javaScript");

//dynamic type
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

//undefined
let year;
console.log(year);
console.log(typeof year);

//null的bug
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

//不會報錯但是不好的用法
lastName = "zeng";
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

//可以判斷條件
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

*/
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