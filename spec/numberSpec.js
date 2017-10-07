describe("Fibonacci", function(){
  var fibonacci;

  beforeEach(function(){
    fibonacci = new Fibonacci();
  })

  describe("first number", function(){
    it("should return 0", function(){
      expect(fibonacci.getNumber(0)).toEqual(0);
    });
  });

  describe("second number", function(){
    it("should return 1", function(){
      expect(fibonacci.getNumber(1)).toEqual(1);
    });
  });

  describe("third number", function(){
    it("should return 1", function(){
     expect(fibonacci.getNumber(2)).toEqual(1);
    });
  });

  describe("fourth number", function(){
    it("should return 2", function(){
      expect(fibonacci.getNumber(3)).toEqual(2);
    });
  });

  describe("sixth number", function(){
    it("should return 8", function(){
      expect(fibonacci.getNumber(6)).toEqual(8);
    });
  });

  describe("incorrect input", function(){
    it("should raise an error if given number is less than 0", function(){
      expect(fibonacci.getNumber(-5)).toThrow(new Error('Negative input'))
    });
  });
});
