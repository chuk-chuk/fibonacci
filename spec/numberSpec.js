describe("Fibonacci", function(){
  var fibonacci;

  describe("first number", function(){
    fibonacci = new Fibonacci();
    it("should return 0", function(){
      expect(fibonacci.getNumber(0)).toEqual(0);
    });
  });

  describe("second number", function(){
    fibonacci = new Fibonacci();
    it("should return 1", function(){
      expect(fibonacci.getNumber(1)).toEqual(1);
    });
  });
});
