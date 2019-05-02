function makeLoadedDie() {
    var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    var index = 0;
  
    return function() {
        if (index === list.length) {
            index = 0;
        }
        var diceNumber = list[index];
        index++;
        return diceNumber;
    }
  }
  
  var rollLoadedDie = makeLoadedDie();