
exports.min = function min (array) {
  if (!array || array.length == 0){
    return 0;
  }
  
  let sort = array.sort(function(a,b){return a-b});
  return sort[0];
}

exports.max = function max (array) {
  if (!array || array.length == 0){
    return 0;
  }
  if (array.length == 0){
    return 0;
  }
  let sort = array.sort(function(a,b){return a-b});
  return sort[sort.length - 1];
}

exports.avg = function avg (array) {
  if (!array || array.length == 0){
    return 0;
  }
  let average = array.reduce((acc, item) => acc + item);
  return average/array.length;
}
