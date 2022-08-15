'use strict';
/*
const calcAverage = (num1,num2,num3) => (num1 + num2 + num3) /3;

let scoreDophins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);
console.log(scoreDophins,scoreKoalas);

function checkWinner (scoreDophins,scoreKoalas) {
    if (scoreDophins>=2*scoreKoalas){
      return(`Dophins wins! (${scoreDophins} vs. ${scoreKoalas})`)
    }else if (scoreKoalas>=2*scoreDophins){
      return(`Koalas wins! (${scoreKoalas} vs. ${scoreDophins})`)
    }else{
      return (`No teams wins...`)
    }
}

const firstResault = checkWinner(scoreDophins,scoreKoalas);
console.log(firstResault);

scoreDophins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);

const finalResault = checkWinner(scoreDophins,scoreKoalas);
console.log(finalResault);

function calcTip(value){
  // if (value>=50 && value <= 300){
  //   const tips = value * 0.15
  //   return tips;
  // }else{
  //   const tips = value * 0.2
  //   return tips;
  // }
  return value >= 50 && value <=300 ? value*0.15 : value*0.2;
};

const bills = [125,555,44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(bills,tips,total);

const mark = {
  fullName:'Mark Miller',
  mass:78,
  height:1.69,
  calcBMI:function(){
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
}

const john = {
  fullName:'John Smith',
  mass:92,
  height:1.95,
  calcBMI:function(){
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
}

if (mark.calcBMI() > john.calcBMI()){
  console.log(`${mark.fullName}'s BMI ${mark.BMI} is higher than ${john.fullName}'s BMI ${john.BMI}`)
}else if (john.calcBMI()>mark.calcBMI()){
  console.log(`${john.fullName}'s BMI ${john.BMI} is higher than ${mark.fullName}'s BMI ${mark.BMI}`)
}else{
  console.log(`${mark.clacBMI()} & ${john.calcBMI()}they are eqal!`)
}

const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

function calcTip(value){
  return value >= 50 && value <=300 ? value*0.15 : value*0.2;
};

function calcAverage(arr){
  let sum = 0;
  for(let i = 0;i<arr.length;i++){
    // sum = sum + arr[i];
    sum += arr[i];
  } 
  return sum / arr.length;
}

for (let i = 0 ; i < bills.length; i++){
  tips.push(calcTip(bills[i]));
  totals.push(bills[i]+tips[i]);
}
console.log(bills,tips,totals);
console.log(calcAverage(totals));
console.log(calcAverage(tips));*/
