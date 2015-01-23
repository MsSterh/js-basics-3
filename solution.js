function range(start, end, step) {
  // Write a range function that takes two arguments, start and end,
  // and returns an array containing all the numbers from start up to (and including) end.
  var array = new Array();
  step = step || 1;
  (start > end) && (step > 0) && (step *= -1);

  for(var i = start; (i <= end && step > 0) || (i >= end && step < 0 ); i += step) {
    array.push(i);
  }

  return array
}

function sum(numbers) {
  // Write a sum function that takes an array of numbers
  // and returns the sum of these numbers.
  var sum = 0,
      i = numbers.length;
  while(i--) {
    sum += numbers[i]
  }
  return sum
}

function reverseArray(arr) {
  // Write a function which takes an array as argument
  // and produces a new array that has the same elements in the inverse order.
  var reverse = new Array();
      i = arr.length;
  while(i--) {
    reverse.push(arr[i])
  }
  return reverse
}

function reverseArrayInPlace(arr) {
  // Write a function that does what the reverse method does:
  // it modifies the array given as argument in order to reverse
  // its elements. It should not use the standard reverse method.
  var i = arr.length;
  var j = ~~(i / 2),
      tmp = 0;

  while(j--) {
    tmp = arr[i - j - 1];
    arr[i - j - 1] = arr[j]
    arr[j] = tmp;
  }
  return arr
}

function arrayToList(arr) {
  // Objects, as generic blobs of values, can be used to build all
  // sorts of data structures. A common data structure is the list
  // (not to be confused with the array). A list is a nested set of
  // objects, with the first object holding a reference to the second,
  // the second to the third, and so on.
  // For example:
  //
  // var list = {
  //   value: 1,
  //   rest: {
  //     value: 2,
  //     rest: {
  //       value: 3,
  //       rest: null
  //     }
  //   }
  // };
  //
  // Write a function arrayToList that builds up a data structure like
  // the previous one when given [1, 2, 3] as argument, and write
  // a function that produces an array from a list. It should use
  // helper function prepend.

  var items = function(arr) {
    return {  value: arr.shift(),
              rest:  (arr.length > 0) ? items(arr) : null }
  }

  return items(arr)
}

function listToArray(list) {
  // Write a function that produces an array from a list
  var arr = new Array();
  var items = function(list) {
    arr.push(list.value);
    (list.rest) ? items(list.rest) : arr
  }
  items(list)
  return arr
}

function prepend(item, list) {
  // Write a function which takes an element and a list and creates a new list
  // that adds the element to the front of the input list. and nth,
  return { value: item,
          rest: list }
}

function nth(n, list) {
  // Write which takes a list and a number and returns the element at the
  // given position in the list, or undefined when there is no such element.
  // It should be recursive.
  if (n) {
    return (list.rest) ? nth(n - 1, list.rest) : undefined
  } else {
    return list.value
  }
}

function deepEqual(a, b) {
  // The == operator compares objects by identity. But sometimes,
  // you would prefer to compare the values of their actual properties.
  //
  // Write a function, deepEqual, that takes two values and returns true
  // only if they are the same value or are objects with the same
  // properties whose values are also equal when compared with
  // a recursive call to deepEqual.

  if (a === null && b === null) {
    return true
  } else if (typeof(a) === typeof(b)) {
    if (typeof(a) === 'object') {
      for (var key in a) {
        return (a.hasOwnProperty(key) && b.hasOwnProperty(key)) ? deepEqual(a[key], b[key]) : false
      }
    } else {
      return (a === b)
    }
  } else {
    return false
  }
}

module.exports.range = range;
module.exports.sum = sum;
module.exports.reverseArray = reverseArray;
module.exports.reverseArrayInPlace = reverseArrayInPlace;
module.exports.arrayToList = arrayToList;
module.exports.listToArray = listToArray;
module.exports.prepend = prepend;
module.exports.nth = nth;
module.exports.deepEqual = deepEqual;
