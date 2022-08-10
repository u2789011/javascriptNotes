/*
//#1
let markMass, markHeight, johnMass, johnHeight;

markMass = 95;
markHeight = 1.88;

johnMass = 85;
johnHeight = 1.76;

const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);

const markHigherBMI = (markBMI > johnBMI);

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higner than John's (${johnBMI}) !`)
}else{
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}) !`)
}; 

const DolphinsFirst = 97;
const DolphinsSecond = 92;
const DolphinsThird = 91;

const KoalasFirst = 89;
const KoalasSecond = 95;
const KoalasThird = 96;

const finalScoreDolphins = (DolphinsFirst + DolphinsSecond + DolphinsThird) / 3;

const finalScoreKoalas = (KoalasFirst + KoalasSecond + KoalasThird) / 3;

console.log(finalScoreDolphins,finalScoreKoalas);

const minimum100Dolphins = DolphinsFirst>100 || DolphinsSecond>100 || DolphinsThird >100;

const minimum100Koalas = KoalasFirst>100 || KoalasSecond >100 || KoalasThird >100;

// if (finalScoreDolphins > finalScoreKoalas && minimum100Dolphins){
//   console.log("Dolphins wins! 🐬")
// }else if (finalScoreDolphins < finalScoreKoalas && minimum100Koalas){
//   console.log("Koalas wins! 🐨")
// }else if (finalScoreDolphins === finalScoreKoalas && minimum100Dolphins && minimum100Koalas){
//   console.log("It's a draw! 🏆")
// }else{
//   console.log("No teams wins a trophy... 🥀")
// }

if (finalScoreDolphins > finalScoreKoalas && finalScoreDolphins >= 100){
  console.log("Dolphins wins! 🐬")
}else if (finalScoreDolphins < finalScoreKoalas && finalScoreKoalas >= 100){
  console.log("Koalas wins! 🐨")
}else if (finalScoreDolphins === finalScoreKoalas && finalScoreDolphins >= 100 && finalScoreKoalas >= 100){
  console.log("It's a draw! 🏆")
}else{
  console.log("No teams wins a trophy... 🥀")
}

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2;
console.log(`The bill was ${bill} ,the tip was ${tip},and the total value ${bill + tip}`);
*/