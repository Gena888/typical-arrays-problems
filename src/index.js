exports.min = function min(array) {
  if (array == undefined || array.length == 0) {
    return 0;
  } else {
    let sortedArr = array.sort(function (a, b) {
      return a - b;
    });
    return sortedArr[0]
  }
}

exports.max = function max(array) {
  if (array == undefined || array.length == 0) {
    return 0;
  } else {
    let sortedArr = array.sort(function (a, b) {
      return b - a;
    });
    return sortedArr[0]
  }
}

exports.avg = function avg(array) {
  if (array == undefined || array.length == 0) {
    return 0;
  } else {
    let result = 0
    for (let i = 0; i <= array.length - 1; i++) {
      result += array[i]
    }
    return result/array.length;
  }
}