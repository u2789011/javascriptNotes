
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