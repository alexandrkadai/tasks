// 1. http://www.codewars.com/kata/opposite-number

function opposite(number) {
    return -number;
  }
  
  //2. http://www.codewars.com/kata/basic-mathematical-operations
  
  function basicOp(operation, value1, value2) {
    if (operation === '+') {
      return value1 + value2;
    }
    if (operation === '-') {
      return value1 - value2;
    }
    if (operation === '*') {
      return value1 * value2;
    }
    if (operation === '/') {
      return value1 / value2;
    }
    return 0;
  }
  
  // 3. http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
  
  function printArray(array) {
    return array.join();
  }
  
  // 4. http://www.codewars.com/kata/transportation-on-vacation
  
  function rentalCarCost(days) {
    if (days >= 7) {
      return days * 40 - 50;
    }
    if (days >= 3) {
      return days * 40 - 20;
    }
    return days * 40;
  }
  
  // 5. http://www.codewars.com/kata/calculating-with-functions
  
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
  
  // 6. http://www.codewars.com/kata/get-the-middle-character
  
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
  
  // 7. http://www.codewars.com/kata/partition-on
  
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
  
  // 8. https://www.codewars.com/kata/find-the-odd-int/
  
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
  
  // 9. https://www.codewars.com/kata/find-the-parity-outlier
  
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
  
  // 10. https://www.codewars.com/kata/zipwith
  
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
  
  // 11. https://www.codewars.com/kata/filter-the-number
  
  function filterString(value) {
    let result;
    let some = value.split('');
    result = some.filter((integer) => !isNaN(integer));
    let newInteger = result.join('');
    return parseInt(newInteger);
  }
  
  // 12. https://www.codewars.com/kata/n-th-fibonacci
  
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
  // 13. https://www.codewars.com/kata/cat-and-mouse-2d-version/
  
  function catMouse(map, moves) {
    if (!map.includes('C') || !map.includes('m')) {
      return 'boring without two animals';
    }
    const mapArray = map.split('\n');
    let catPos = null;
    let mousePos = null;
  
    for (let y = 0; y < mapArray.length; y++) {
      for (let x = 0; x < mapArray[y].length; x++) {
        if (mapArray[y][x] === 'C') {
          catPos = { x, y };
        }
        if (mapArray[y][x] === 'm') {
          mousePos = { x, y };
        }
      }
    }
  
    const distance = Math.abs(catPos.x - mousePos.x) + Math.abs(catPos.y - mousePos.y);
  
    return distance <= moves ? 'Caught!' : 'Escaped!';
  }
  
  // 14. https://www.codewars.com/kata/duplicate-encoder
  
  function duplicateEncode(word) {
    const lowercaseWord = word.toLowerCase();
  
    const charCount = {};
    for (let char of lowercaseWord) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    return lowercaseWord
      .split('')
      .map((char) => (charCount[char] > 1 ? ')' : '('))
      .join('');
  }
  
  // 15. https://www.codewars.com/kata/576757b1df89ecf5bd00073b
  
  function towerBuilder(nFloors) {
    const tower = [];
    for (let currentFloor = 0; currentFloor < nFloors; currentFloor++) {
      const starsOnThisFloor = 2 * currentFloor + 1;
      const spacesOnEachSide = nFloors - currentFloor - 1;
      const floorString =
        ' '.repeat(spacesOnEachSide) + '*'.repeat(starsOnThisFloor) + ' '.repeat(spacesOnEachSide);
      tower.push(floorString);
    }
  
    return tower;
  }
  
  // 16. https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
  
  function wave(str) {
    const waveResult = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
        continue;
      }
      const waveVariation = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
      waveResult.push(waveVariation);
    }
    return waveResult;
  }
  
  // 17. https://www.codewars.com/kata/59d398bb86a6fdf100000031
  
  function stringBreakers(quantity, string) {
    let some = string.split(' ').join('');
    let string2 = some;
    let newstr = [];
    for (let i = 0; i < string2.length; i += quantity) {
      let piece = string2.slice(i, i + quantity);
      newstr.push(piece);
    }
    return newstr.join('\n');
  }
  
  // 18. https://www.codewars.com/kata/514a024011ea4fb54200004b
  
  function domainName(url) {
    url = url.replace(/(https?:\/\/)?(www\.)?/, '');
    return url.split('.')[0];
  }
  
  // 1 https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(array) {
  let result = array.filter((item) => item > 0);
  return result.reduce((item, sum) => sum + item, 0);
}

// 2 https://www.codewars.com/kata/5a3e1319b6486ac96f000049

function pairs(array) {
  let count = 0;
  let sumlength = 0;
  array.length % 2 ? (sumlength = array.length) : (sumlength = array.length - 1);
  for (let i = 0; i < sumlength; i += 2) {
    if (Math.abs(array[i] - array[i + 1]) === 1) {
      count++;
    }
  }

  return count;
}

// 3 https://www.codewars.com/kata/5aba780a6a176b029800041c

function maxMultiple(divisor, bound) {
  let isDecimal = 0;
  for (let i = bound; i > 0; i--) {
    isDecimal = i / divisor;
    if (isDecimal - Math.floor(isDecimal) === 0) {
      return i;
    }
  }
}

// 4 https://www.codewars.com/kata/514a6336889283a3d2000001

function getEvenNumbers(numbersArray) {
  return numbersArray.filter((item) => item % 2 === 0);
}

// 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004

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

// 6 https://www.codewars.com/kata/566044325f8fddc1c000002c

function evenChars(string) {
  if (string.length < 2 || string.length > 100) {
    return 'invalid string';
  }
  let newArray = string.split('').filter((item, index) => {
    if (index % 2 !== 0) {
      return item;
    }
  });
  return newArray;
}
