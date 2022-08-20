'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} on ${time} to ${address}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here us your delicious pasta with ${ing1},${ing2},${ing3}.`);
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole ,21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Via del Sole ,21',
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested hours
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//可以用來把array合併
const arr = [3, 4, 5];
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
// console.log(1, 2, 3, 4, 5);
// 跟destructring很像，差異在於他是把全部的array項目都拿出來而且不會創造新的variable

const newMenu = [...restaurant.mainMenu, 'Gnoocci'];
console.log(newMenu);
//the spread operator

//usecase

//create shallow copy
const mainMenuCopy = [...restaurant.mainMenu];

//join two array
const menuJoin = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuJoin);

//Iterables: array,strings.maps.sets. Not object
const str = 'jonas';
const letters = [...str, '', 's.'];
console.log(letters);

console.log(...str);
// console.log(`${...str}`);//會壞掉
//通常被逗號分開的多個值是用在function的arrgument或者是兩個都是新的array的狀況

const orderPasta = function (ing1, ing2, ing3) {
  console.log(`Here us your delicious pasta with ${ing1},${ing2},${ing3}.`);
};

// real world example
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Let's make pasta! Ingredient 2?"),
  prompt("Let's make pasta! Ingredient 3?"),
];

// console.log(orderPasta(...ingredients));

//objects也可以用...
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristoeante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Nested destructuring
const [starter, mainDish] = restaurant.order(0, 0);
console.log(starter, mainDish);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;

const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);*/

//spread,because in the right side og =
const arr = [1, 2, ...[3, 4]];
console.log(arr); //[1,2,3,4]

//rest,because on the left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); //1 2 [3,4,5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]; //跳過中間把後面其他放到同個variable裡面

console.log(pizza, risotto, otherFood);

//object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
console.log(sat);

//function
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

// orderPizza: function (mainIng, ...otherIng) {
//   console.log(mainIng);
//   console.log(otherIng);
// },

//real life usecase
restaurant.orderPizza('mushroom', 'onion', 'simon', 'olives');

restaurant.orderPizza('mushroom');
