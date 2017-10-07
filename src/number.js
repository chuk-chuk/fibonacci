function Fibonacci(){
};

Fibonacci.prototype.getNumber = function(number){
  if(number < 0){
    throw new Error('Negative input')
  } else {
  var i;
  var resultsArray = [];
    for (i = 0; i <= number; i++) {
      if (i === 0) {
        resultsArray.push(0);
      } else if (i === 1) {
        resultsArray.push(1);
      } else {
        resultsArray.push(resultsArray[i - 2] + resultsArray[i - 1]);
      }
    }
  return resultsArray[number];
  }
};
