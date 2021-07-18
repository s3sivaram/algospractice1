/*
let arr = [1, 2, 3];
arr[100] = 10;
console.log("arr.length", arr.length);
console.log("arr=", arr);
console.log("arr[90]", arr[90]);
*/

/*

var a = 10;
function f1(num) {
  var a = 3;
  console.log(num);
}
f1(3);
console.log("outside func a=", a);
console.log("name of the  func =", f1.caller);

*/

/*--------------
let arr1 = ["name1", "name2", "name3"];
console.log(arr1);
console.log(arr1[0]);

arr1[0][1] = "S";
console.log(arr1[0][1]);
let arr2 = arr1;
console.log(arr2);
arr1 = ["name4", "name5"];
console.log(arr1);


/*--------------

setTimeout(() => {
  console.log("output in setTimeoutfunction");
}, 0);
console.log("output after setTimeoutfunction");

---------------*/

/*--------------
sum(10, 20);
dif(10, 20);

function sum(a, b) {
  return a + b;
}

let dif = function (a, b) {
  return a - b;
};


class x {
  get y() {
    return 40;
  }
}
let obj = new x();
console.log(obj.y);
---------------*/

/*let arr = [1, 2, 3, 4];

let result = arr.reduce((total, num) => {
  console.log(`total=${total},num=${num}`);

  return total + num;
},10);
console.log(result);*/

/*
var v = 1;
var f1 = function () {
  console.log(v);
};
var f2 = function () {
  var v = 2;
  f1();
};

f2();

*/

/*
const array = [
  { x: "foo", y: 8 },
  { x: "bar", y: 3 },
  { x: "baz", y: 7 },
];
const foo = array.reduce((a, b) => ({ ...a, [b.x]: b.y }), { x: "s", j: "3" });
console.log(foo);
*/
/*
function tempfunc() {
  console.log(a);
  // let a = 1;
}
// var a = 2;
tempfunc();
tempfunc();
*/

//  array reduce
/*
let array1 = [1, 2, 3, 4];
let result = array1.reduce((accum, element) => {
  return accum + element;
}, 0);
console.log(result);
*/
/* find the sum of  Male,female props in a object
let array1 = [
  {
    name: "ss",
    gender: "m",
    sal: 1000,
  },
  {
    name: "sr",
    gender: "m",
    sal: 1000,
  },
  {
    name: "sn",
    gender: "f",
    sal: 1000,
  },
  {
    name: "sx",
    gender: "m",
    sal: 1000,
  },
];

let result = array1.reduce((accum, element) => {
  // console.log("accum=", accum.sal);
  // console.log("element=", element.sal);
  return { ...accum, [element.gender]: accum[element.gender] + 1 || 1 };
}, {});

console.log(result);
*/

// find the max character in a string using Object.

function maxchar(str) {
  let obj = {};
  let max = 0;
  let maxchar;
  str.split("").forEach((element) => {
    if (obj[element]) {
      obj[element] = obj[element] + 1;
    } else {
      obj[element] = 1;
    }
  });
  for (let key in obj) {
    console.log(obj[key]);
    if (obj[key] > max) {
      max = obj[key];
    }
  }
  return [obj, max];
}
const [obj, max] = maxchar("ssiiiiva");
console.log(obj, max);
