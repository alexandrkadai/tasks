// http://www.codewars.com/kata/opposite-number

function opposite(number) {
  return -number;
}

//http://www.codewars.com/kata/basic-mathematical-operations

function basicOp(operation, value1, value2) {
  if (operation === "+") {
    return value1 + value2;
  }
  if (operation === "-") {
    return value1 - value2;
  }
  if (operation === "*") {
    return value1 * value2;
  }
  if (operation === "/") {
    return value1 / value2;
  }
  return 0;
}

// http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters

function printArray(array) {
  return array.join();
}

// http://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(days) {
  if (days >= 7) {
    return days * 40 - 50;
  }
  if (days >= 3) {
    return days * 40 - 20;
  }
  return days * 40;
}

// http://www.codewars.com/kata/calculating-with-functions

function zero(func) {
  return func ? func(0) : 0;
}
function one(func) {
  return func ? func(1) : 1;
}
function two(func) {
  return func ? func(2) : 2;
}
function three(func) {
  return func ? func(3) : 3;
}
function four(func) {
  return func ? func(4) : 4;
}
function five(func) {
  return func ? func(5) : 5;
}
function six(func) {
  return func ? func(6) : 6;
}
function seven(func) {
  return func ? func(7) : 7;
}
function eight(func) {
  return func ? func(8) : 8;
}
function nine(func) {
  return func ? func(9) : 9;
}

function plus(number) {
  return function (number2) {
    return number2 + number;
  };
}
function minus(number) {
  return function (number2) {
    return number2 - number;
  };
}
function times(number) {
  return function (number2) {
    return number2 * number;
  };
}
function dividedBy(number) {
  return function (number2) {
    return Math.floor(number2 / number);
  };
}

// http://www.codewars.com/kata/get-the-middle-character

function getMiddle(string) {
  if (string.length % 2 !== 0) {
    for (let i = 0; i < string.length; i++) {
      if (i == (string.length - 1) / 2) {
        return string[i];
      }
    }
  } else {
    for (let i = 0; i < string.length; i++) {
      if (i == string.length / 2) {
        return string[i - 1] + string[i];
      }
    }
  }
}

// http://www.codewars.com/kata/partition-on

function partitionOn(pred, items) {
  const falseItems = [];
  const trueItems = [];
  for (let i = 0; i < items.length; i++) {
    if (pred(items[i])) {
      trueItems.push(items[i]);
    } else {
      falseItems.push(items[i]);
    }
  }
  items.splice(0, items.length);
  for (let i = 0; i < falseItems.length; i++) {
    items.push(falseItems[i]);
  }
  for (let i = 0; i < trueItems.length; i++) {
    items.push(trueItems[i]);
  }
  return falseItems.length;
}

// https://www.codewars.com/kata/find-the-odd-int/

function findOdd(array) {
  const numberCounts = {};
  for (let number of array) {
    if (numberCounts[number] === undefined) {
      numberCounts[number] = 0;
    }
    numberCounts[number] = numberCounts[number] + 1;
  }
  for (let number in numberCounts) {
    if (numberCounts[number] % 2 !== 0) {
      return Number(number);
    }
  }
}

// https://www.codewars.com/kata/find-the-parity-outlier

function findOutlier(integers) {
  let targetEven = 0;
  let targetOdd = 0;
  let countEven = 0;
  let countOdd = 0;

  integers.forEach((int) => {
    if (int % 2 === 0) {
      countEven++;
      targetEven = int;
    } else {
      countOdd++;
      targetOdd = int;
    }
  });
  if (countEven > countOdd) {
    return targetOdd;
  } else {
    return targetEven;
  }
}

// https://www.codewars.com/kata/zipwith

function zipWith(givenFunction, array1, array2) {
  let shortLength = 0;
  if (array1.length > array2.length) {
    shortLength = ai.length;
  } else shortLength = array1.length;
  let res = [];
  for (i = 0; i < shortLength; i++) {
    res.push(givenFunction(array1[i], array2[i]));
  }
  return res;
}

// https://www.codewars.com/kata/filter-the-number

function filterString(value) {
  let result;
  let some = value.split("");
  result = some.filter((integer) => !isNaN(integer));
  let newInteger = result.join("");
  return parseInt(newInteger);
}

// https://www.codewars.com/kata/n-th-fibonacci

function nthFibo(number) {
  if (number === 1) return 0;
  if (number === 2 || number === 3) return 1;
  if (number === 4) return 2;
  let firstNum = 2;
  let secondNum = 3;
  let currentNum = 3;
  for (let i = 5; i <= 1000; i++) {
    if (i === number) {
      console.log(currentNum);
      return currentNum;
    }
    currentNum = secondNum + firstNum;
    firstNum = secondNum;
    secondNum = currentNum;
  }
}
// https://www.codewars.com/kata/cat-and-mouse-2d-version/

function catMouse(map, moves) {
  if (!map.includes("C") || !map.includes("m")) {
    return "boring without two animals";
  }
  const mapArray = map.split("\n");
  let catPos = null;
  let mousePos = null;

  for (let y = 0; y < mapArray.length; y++) {
    for (let x = 0; x < mapArray[y].length; x++) {
      if (mapArray[y][x] === "C") {
        catPos = { x, y };
      }
      if (mapArray[y][x] === "m") {
        mousePos = { x, y };
      }
    }
  }

  const distance =
    Math.abs(catPos.x - mousePos.x) + Math.abs(catPos.y - mousePos.y);

  return distance <= moves ? "Caught!" : "Escaped!";
}

// https://www.codewars.com/kata/duplicate-encoder

function duplicateEncode(word) {
  const lowercaseWord = word.toLowerCase();

  const charCount = {};
  for (let char of lowercaseWord) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return lowercaseWord
    .split("")
    .map((char) => (charCount[char] > 1 ? ")" : "("))
    .join("");
}

// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
  const tower = [];
  for (let currentFloor = 0; currentFloor < nFloors; currentFloor++) {
    const starsOnThisFloor = 2 * currentFloor + 1;
    const spacesOnEachSide = nFloors - currentFloor - 1;
    const floorString =
      " ".repeat(spacesOnEachSide) +
      "*".repeat(starsOnThisFloor) +
      " ".repeat(spacesOnEachSide);
    tower.push(floorString);
  }

  return tower;
}

// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

function wave(str) {
  const waveResult = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    }
    const waveVariation =
      str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    waveResult.push(waveVariation);
  }
  return waveResult;
}

// https://www.codewars.com/kata/59d398bb86a6fdf100000031

function stringBreakers(quantity, string) {
  let some = string.split(" ").join("");
  let string2 = some;
  let newstr = [];
  for (let i = 0; i < string2.length; i += quantity) {
    let piece = string2.slice(i, i + quantity);
    newstr.push(piece);
  }
  return newstr.join("\n");
}

// https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url) {
  url = url.replace(/(https?:\/\/)?(www\.)?/, "");
  return url.split(".")[0];
}

//https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(array) {
  let result = array.filter((item) => item > 0);
  return result.reduce((item, sum) => sum + item, 0);
}

// https://www.codewars.com/kata/5a3e1319b6486ac96f000049

function pairs(array) {
  let count = 0;
  let sumlength = 0;
  array.length % 2
    ? (sumlength = array.length)
    : (sumlength = array.length - 1);
  for (let i = 0; i < sumlength; i += 2) {
    if (Math.abs(array[i] - array[i + 1]) === 1) {
      count++;
    }
  }

  return count;
}

// https://www.codewars.com/kata/5aba780a6a176b029800041c

function maxMultiple(divisor, bound) {
  let isDecimal = 0;
  for (let i = bound; i > 0; i--) {
    isDecimal = i / divisor;
    if (isDecimal - Math.floor(isDecimal) === 0) {
      return i;
    }
  }
}

// https://www.codewars.com/kata/514a6336889283a3d2000001

function getEvenNumbers(numbersArray) {
  return numbersArray.filter((item) => item % 2 === 0);
}

// https://www.codewars.com/kata/5a090c4e697598d0b9000004

function solve(array) {
  let resultArray = [];
  array.sort((item1, item2) => {
    return item1 - item2;
  });
  let sumLength = array.length - 1;
  for (let i = 0; i < array.length / 2; i++) {
    if (array[i] === array[sumLength - i]) {
      resultArray.push(array[i]);
      continue;
    }
    resultArray.push(array[sumLength - i]);
    resultArray.push(array[i]);
  }
  return resultArray;
}

// https://www.codewars.com/kata/566044325f8fddc1c000002c

function evenChars(string) {
  if (string.length < 2 || string.length > 100) {
    return "invalid string";
  }
  let newArray = string.split("").filter((item, index) => {
    if (index % 2 !== 0) {
      return item;
    }
  });
  return newArray;
}

// Random dates
//Create a function that generate a random date between to dates
const moment = require("moment");
function randomDate(startDate, endDate) {
  let start, end;

  if (
    startDate &&
    typeof startDate === "object" &&
    startDate._isAMomentObject
  ) {
    start = startDate.valueOf();
  } else {
    start = new Date(startDate).getTime();
  }
  if (endDate && typeof endDate === "object" && endDate._isAMomentObject) {
    end = endDate.valueOf();
  } else {
    end = new Date(endDate).getTime();
  }
  const randomTimestamp = start + Math.random() * (end - start);
  if (typeof moment === "function") {
    return moment(randomTimestamp);
  }

  return new Date(randomTimestamp);
}

const date1 = moment("23/01/2021", "DD/MM/YYYY");
const date2 = moment("23/10/2021", "DD/MM/YYYY");

console.log(randomDate(date1, date2).format("DD/MM/YY"));
// 20/02/2021

//Codewars
//5 Merged objects https://www.codewars.com/kata/merged-objects

//6 This is antoher problem https://www.codewars.com/kata/547f1a8d4a437abdf800055c

// https://www.codewars.com/kata/55e7650c8d894146be000095
function validateMessage(msg) {
  if (msg === null) {
    throw new ReferenceError("Message is null!");
  }

  if (typeof msg !== "string") {
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`,
    );
  }

  if (msg.length > 255 || msg.length === 0) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }

  if (/<[^>]+>/.test(msg)) {
    return false;
  }

  return true;
}

//Taks 2

//setTimeout/setInterval
let myInterval;
function timer() {
  let i = 1;
  myInterval = setInterval(() => {
    console.log("Elaplsed time " + i++ + " sec");
    if (i === 5) {
      clearInterval(myInterval);
    }
  }, 1000);
}

timer();
// Create custom deep clone function.

// const user = {
//   username: 'testuser1',
//   preferences: {
//     sound: {
//       maxValue: 50,
//       value: 30,
//     },
//   },
// };

function clone(user) {
  if (user === null || typeof user !== "object") return user;

  if (Array.isArray(user)) {
    return user.map((item) => clone(item));
  }

  const cloned = {};
  for (let key in user) {
    cloned[key] = clone(user[key]);
  }

  return cloned;
}

const clonedUser = clone(user);

clonedUser.preferences.sound.maxValue = 70;

console.log(
  user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue,
); // false

//Task 6. Digit or not

function startsWithDigit(str) {
  const regex = /^\d/;
  return regex.test(str);
}

console.log(startsWithDigit("123abc")); // true
console.log(startsWithDigit("abc123")); // false

//Taks 2 Jokes you've been 'awaiting' for ... promise
async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (!data.jokes) {
    throw new Error(`No jokes at url: ${apiUrl}`);
  }

  const joke = data.jokes.find((joke) => joke.id === jokeId);

  if (!joke) {
    throw new Error(`No jokes found id: ${jokeId}`);
  }

  return {
    saySetup: function () {
      return joke.setup;
    },
    sayPunchLine: function () {
      return joke.punchLine;


    },
  };
}



const { data: MOCK_DATA } = require('./MOCK_DATA');

// Example needle list
const needleList = [
  'd462bb76-81ee-46af-9fdb-ebfe53a93d3f',
  '6df55f86-e3f5-4d7b-9cd5-906d8d7e804a',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
  'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
  'be77abf7-29b0-4ed1-9379-f5d7576cb5ce',
  '3c511860-d159-457d-8374-e8205904e6f5',
  '9c4a0320-1d82-4a46-83b3-511ddffb7ee6',
];

// --- Straight Search ---
function straightSearch(arr, needle) {
  for (let item of arr) {
    if (item.sku === needle) {
      return item;
    }
  }
  return null;
}

// --- Binary Search ---
function binarySearch(arr, needle) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midVal = arr[mid].sku;

    if (midVal === needle) {
      return arr[mid];
    } else if (midVal < needle) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return null;
}

// --- Prepare sorted array for binary search ---
const sortedData = [...MOCK_DATA].sort((a, b) => a.sku.localeCompare(b.sku));

// --- Performance Testing ---
console.log('Starting performance tests...');

// Straight Search Performance
console.time('Straight Search Total Time');
for (let needle of needleList) {
  straightSearch(MOCK_DATA, needle);
}
console.timeEnd('Straight Search Total Time');

// Binary Search Performance
console.time('Binary Search Total Time');
for (let needle of needleList) {
  binarySearch(sortedData, needle);
}
console.timeEnd('Binary Search Total Time');

console.log('Finished performance tests.');
