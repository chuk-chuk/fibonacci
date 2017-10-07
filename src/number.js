function Fibonacci(){
};

Fibonacci.prototype.getNumber = function(number){
  if(number !== undefined && number < 2){
    return number;
  } else {
    return number - 1;
  }
}
