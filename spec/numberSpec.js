describe("Fibonacci", function(){
  var fibonacci;

  describe("first number", function(){
    fibonacci = new Fibonacci();
    it("should return 0", function(){
      expect(fibonacci.getNumber(0)).toEqual(0);
    });
  });
});
