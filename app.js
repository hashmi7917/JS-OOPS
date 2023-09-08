// OOPS
// const rectangle = {
//   name: 'Rectangle 1',
//   width: 20,
//   height: 10,
//   area: function () {
//     return this.width + this.height;
//   },
// };

// console.log(rectangle.area());
// console.log(rectangle.name);

// CONSTRUCTOR

// function Rectangle(name, width, height) {
//   this.name = name;
//   this.width = width;
//   this.height = height;
//   this.area = function () {
//     return this.width * this.height;
//   };
// }

// const rect1 = new Rectangle('Rectangle 1', 20, 20);
// const rect2 = new Rectangle('Rectangle 2', 10, 20);

// // console.log(rect1.name, rect2.width);

// // add property
// rect1.color = 'blue';

// // get keys in ad in to arrays
// // Get Keys
// console.log(Object.keys(rect1));

// // get values in ad in to arrays
// // Get Values
// console.log(Object.values(rect1));

// // Get Entries
// console.log(Object.entries(rect1));

// // delete property
// // delete rect1.color;
// console.log(rect1);

// // check for property
// console.log(rect2.hasOwnProperty('color'));
// console.log(rect1.hasOwnProperty('color'));

// for (let [key, value] of Object.entries(rect1)) {
//   if (typeof value !== 'function') {
//     console.log(`${key} - ${value}`);
//   }
// }

// Prototype Methods
// function Rectangle(name, width, height) {
//   this.name = name;
//   this.width = width;
//   this.height = height;
// }

// Rectangle.prototype.area = function () {
//   return this.width * this.height;
// };

// Rectangle.prototype.perimeter = function () {
//   return 2 ** (this.width + this.height);
// };

// Rectangle.prototype.isSquare = function () {
//   return this.width === this.height;
// };

// Rectangle.prototype.changeName = function (newName) {
//   return (this.name = newName);
// };

// const rect = new Rectangle('Rect', 10, 10);

// console.log(rect);
// console.log(rect.area());
// console.log(rect.perimeter());
// console.log(rect.isSquare());
// console.log(rect.changeName('hashmi'));

// OOP Challenge Completed

function Player(name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
}

Player.prototype.gainXp = function (num) {
  this.points += num;
  if (this.points >= 10) {
    this.lvl += 1;
    this.points -= 10;
  }
  return;
};

Player.prototype.describe = function () {
  return `${this.name} is level ${this.lvl} with ${this.points} experinces points`;
};

let player1 = new Player('Tim');
let player2 = new Player('Bob');

player1.gainXp(5);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(2);
player1.gainXp(8);
player2.gainXp(4);

console.log(player1.describe());
console.log(player2.describe());
