// const btn = document.querySelector('.btn');
// let timerId,
//   i = 0;

// function myAnimation() {
//   const elem = document.querySelector('.box');
//   let pos = 0;

//   const id = setInterval(frame, 10);
//   function frame() {
//     if (pos === 300) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + 'px';
//       elem.style.left = pos + 'px';
//     }
//   }
// }

// btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
//   // const timerId = setTimeout(logger, 2000);
//   timerId = setInterval(logger, 500);
// });

// function logger() {

//   if (i === 3) {
//     clearInterval(timerId);
//   }
//   console.log('text');
//   i++;

// };

// let id = setTimeout(function log() {
//   console.log('Hello');
//   id = setTimeout(log, 500);
// }, 500);

// lesson 67. (*) WeakMap и WeakSet
// let user = {name: 'Ivan'};

// let map = new WeakMap();
// map.set(user, 'data');

// user = null;

// console.log(map.has(user));
// WeakMap
let cache = new WeakMap();

function cahcheUser(user){
  if (!cache.has(user)){
    cache.set(user, Date.now());
  }

  return cache.get(user);
}

let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

cahcheUser(lena);
cahcheUser(alex);


lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));


////////////////////////////////
// WeakSet() 
// add, has, delete

let messages = [
  {text: 'Hello', from: 'John'},
  {text: 'World', from: 'Alex'},
  {text: '....', from: 'M'},
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);

readMessages.add(messages[0]);

messages.shift();
console.log(readMessages.has(messages[0]));



