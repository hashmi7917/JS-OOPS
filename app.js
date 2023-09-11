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

// function Player(name) {
//   this.name = name;
//   this.lvl = 1;
//   this.points = 0;
// }

// Player.prototype.gainXp = function (num) {
//   this.points += num;
//   if (this.points >= 10) {
//     this.lvl++;
//     this.points -= 10;
//   }
//   console.log(this.describe());
// };

// Player.prototype.describe = function () {
//   return `${this.name} is level ${this.lvl} with ${this.points} experinces points`;
// };

// let player1 = new Player('Tim');
// let player2 = new Player('Bob');

// player1.gainXp(5);
// player2.gainXp(7);
// player1.gainXp(3);
// player2.gainXp(2);
// player1.gainXp(8);
// player2.gainXp(4);
// player1.gainXp(5);

// console.log(player1.describe());
// console.log(player2.describe());

// CLASSES

// class Rectangle {
//   constructor(name, width, height) {
//     this.name = name;
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return this.height * this.width;
//   }

//   perimeter() {
//     return 2 * (this.width + this.height);
//   }

//   isSquare() {
//     return this.width === this.height;
//   }

//   logArea() {
//     console.log('Rectangle Area: ' + this.area());
//   }
// }

// const square = new Rectangle('Square', 20, 20);
// console.log(square.area());
// console.log(square.perimeter());
// console.log(square.isSquare());
// square.logArea();

// CLASS INHERITENCE

// Parent Class
// class Shape {
//   constructor(name) {
//     this.name = name;
//   }

//   logName() {
//     console.log('Shape Name: ' + this.name);
//   }
// }

// // Sub Class
// class Rectangle extends Shape {
//   constructor(name, width, height) {
//     super(name);

//     this.width = width;
//     this.height = height;
//   }
//   logName() {
//     console.log('Rectangle Name: ' + this.name);
//   }
// }

// class Square extends Rectangle {
//   constructor(name, width, height) {
//     super('Square 1', 20, 20);
//   }
// }

// const rect = new Rectangle('Rect 1', 10, 20);
// console.log(rect);
// rect.logName();

// const sqr = new Square();
// console.log(sqr);
// sqr.logName();
// console.log(rect instanceof Rectangle);
// console.log(rect instanceof Shape);
// console.log(sqr instanceof Rectangle);
// console.log(sqr instanceof Shape);

// Getter and Setter with private field

class Wallet {
  #balance = 0;
  #transactions = [];

  deposit(amount) {
    this.#processDeposit(amount);
    this.#balance += amount;
  }

  widthraw(amount) {
    if (amount > this.#balance) {
      console.log('Not Enough Balance');
      return;
    }
    this.#processWidthraw(amount);
    this.#balance -= amount;
  }

  #processDeposit(amount) {
    console.log(`Depositing ${amount}`);

    this.#transactions.push({
      type: 'deposit',
      amount,
    });
  }
  #processWidthraw(amount) {
    console.log(`Widthdrawing ${amount}`);

    this.#transactions.push({
      type: 'widthdraw',
      amount,
    });
  }

  get balance() {
    return this.#balance;
  }

  get transactions() {
    return this.#transactions;
  }
}

const wallet = new Wallet();
wallet.deposit(400);
wallet.widthraw(100);
console.log(wallet.balance);
