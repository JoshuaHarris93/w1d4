var words = ["ground", "control", "to", "major", "tom"];

function map(arr, fn) {
  var mappedNumbers = [];
  for (var i=0; i < arr.length; i++) {
    mappedNumbers.push(fn(arr[i])); 
    }
  return mappedNumbers;
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
Collapse



