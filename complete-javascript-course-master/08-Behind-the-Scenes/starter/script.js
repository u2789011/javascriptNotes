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

console.log(this);

function x() {
  const xx = 22;
  y();
  // console.log(yy);
}

function y() {
  const yy = 23;
  console.log(z(yy));

  function a() {
    const aa = 100;
    console.log(aa);
  }
  a();
  // console.log(x());
}
const z = z => z + 3;
// x();
y();
console.log(aa);


const mark = {
  email: 'markfu@mongodb.com',
  mobile: '0972322805',
  office: '0287291148',
  // print: function () {
  //   console.log(this.email);
  //   console.log(this.mobile);
  //   console.log(this.office);
  // },
};

const kuan = {
  email: 'kuan-chun-chang@mongodb.com',
  mobile: '0958633205',
  office: '0277430622#6222',
};

// console.log(mark.email);

// function print(this) {
//   console.log(this.email);
//   console.log(this.mobile);
//   console.log(this.office);
// }
// mark.print();

const print = function () {
  console.log(this.email);
};
print(mark);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); //window
};
calcAgeArrow(1980);

const mark = {
  email: 'markfu@mongodb.com',
  mobile: '0972322805',
  office: '0287291148',
};

const email = 'markfu@mongodb.com';

console.log(mark.email);
console.log(email);
*/
