'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName} you are ${age} years old, born in ${birthYear}.`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'Steven'; //local scope優先所以可以重複名字
      // var millenial = true;
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      } //strict mode會阻止外面的存取（block scope）
      // const output = 'New output'; //創造全新的output用重複的名字
      output = 'New output'; //更改scope chain上一級的output
    }
    // console.log(add(2, 3));
    // console.log(millenial);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/
console.log(this);
