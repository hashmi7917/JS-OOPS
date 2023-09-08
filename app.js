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

function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle('Rectangle 1', 20, 20);
const rect2 = new Rectangle('Rectangle 2', 10, 20);

// console.log(rect1.name, rect2.width);

// add property
rect1.color = 'blue';

// get keys in ad in to arrays
// Get Keys
console.log(Object.keys(rect1));

// get values in ad in to arrays
// Get Values
console.log(Object.values(rect1));

// Get Entries
console.log(Object.entries(rect1));

// delete property
// delete rect1.color;
console.log(rect1);

// check for property
console.log(rect2.hasOwnProperty('color'));
console.log(rect1.hasOwnProperty('color'));

for (let [key, value] of Object.entries(rect1)) {
  if (typeof value !== 'function') {
    console.log(`${key} - ${value}`);
  }
}
