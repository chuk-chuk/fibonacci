function Fibonacci(){
};

Fibonacci.prototype.getNumber = function(number){
  if(number !== undefined && number == 1){
    return 1;
  } else {
    return 0;
  }
}
