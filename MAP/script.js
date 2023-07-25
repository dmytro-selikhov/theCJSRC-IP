'use strict';

// const user = {
//   name: 'Alex',
//   surname: 'Smith',
//   birthday: '20/04/2021',
//   showMyPublicData: function () {
//     console.log(`${this.name} ${this.surname}`);
//   }
// }

// const userMap = new Map(Object.entries(user));
// console.log(userMap);

// const newUserObject = Object.fromEntries(userMap);
// console.log('------', newUserObject);


// // console.log(user);
// console.log(typeof (Object.keys(user)[0]));

// const shops = [
//   { rise: 500 },
//   { oil: 200 },
//   { bread: 50 }
// ];

// const budget = [5000, 15000, 25000];

// const map = new Map([
//   [{ paper: 400 }, 8000]
// ]);

// shops.forEach((shop, i) => {
//   map.set(shop, budget[i]);
// })

// // map.set(shops[0], 5000).set(shops[1], 15000).set(shops[2], 25000);

// console.log(map);
// console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
// map.size;
// map.keys()

// 1)
// const goods = [];
// for (let shop of map.keys()) {
//   goods.push(Object.keys(shop)[0])
// }
// console.log(goods);


// 2)
// for (let price of map.values()) {
//   console.log(price);
// }


// 3)
// for (let [shop, price] of map.entries()) {
//   console.log(price, shop);
// }


// 4)
// map.forEach((value, key, map) => {
//   console.log(key, value);
// })



////////////////////////////////////////////$Recycle.Bin
// Set
const arr = ['Alex', 'Ann', 'Oleg', 'Alex', 'Alex', 'Ann', 'Alex'];

function unique(arr) {
  return Array.from(new Set(arr));
}

console.log(unique(arr));
// const set = new Set(arr);
// set.add('Dimas');
// set.add('Oleg');

// console.log(set);



// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// for (let value of set) console.log(value);
// set.forEach((value, valueAgaing, set) => {
//   console.log(value, valueAgaing);
// });

// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());

