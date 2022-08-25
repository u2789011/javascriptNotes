'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

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
  openingHours,
};
/*
const rest1 = {
  name: 'Capri',
  // numGuest: 20,
  numGuest: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//Or assignment operator
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

//true 就return、falsy就換下一個
// rest1.owner = rest1.owner && '<anonymous>';
// rest2.owner = rest2.owner && '<anonymous>';

rest1.owner &&= '<anonymous>';
rest2.owner &&= '<anonymous>';

console.log(rest1, rest2);


//use any data type, return any data type
//short-circuiting 只要是true就return（後面的就不會被評估）如果全部都是fales就return最後一個
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

//如果是0的話會return 10
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

//可以改用nullish coalescing operator
//只有要null 或 undefined的時候才會跳下一個
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

//如果遇到false就會直接return false的項目不會評估到後面的
//如果全部都true就會return最後一個

console.log(0 && 'jonas');
console.log(7 && 'jonas');
console.log('Hello' && 23 && null && 'jonas');

//practice example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spanish');
}
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spanish');


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
console.log(p, q, r);

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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}

console.log(...menu.entries());

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//optional chaining
// console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.fri?.open);

//example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'Closed';
//   console.log(`On ${day},we open at ${open}`);
// }

//keys
const properties = Object.keys(openingHours);
console.log(properties);

let openstr = `We are open on ${properties.length} days,`;

for (const day of properties) {
  openstr += `${day},`;
}
console.log(openstr);

//values
const values = Object.values(openingHours);
console.log(values);

//entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}


const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size);


// Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

// Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/
