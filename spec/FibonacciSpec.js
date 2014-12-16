describe("Get nth(n starts with 0) Fibonacci number", function () {
    it("1th Fibonacci number is 1", function () {
        expect(Fibonacci(1)).toBe(1);
    });
    it("2th Fibonacci number is 1", function () {
        expect(Fibonacci(2)).toBe(1);
    });
    it("3th Fibonacci number is 3", function () {
        expect(Fibonacci(3)).toBe(2);
    });
    it("4th Fibonacci number is 3", function () {
        expect(Fibonacci(4)).toBe(3);
    });
    it("5th Fibonacci number is 5", function () {
        expect(Fibonacci(5)).toBe(5);
    });
    it("6th Fibonacci number is 8", function () {
        expect(Fibonacci(6)).toBe(8);
    });
    it("7th Fibonacci number is 13", function () {
        expect(Fibonacci(7)).toBe(13);
    });
    it("8th Fibonacci number is 21", function () {
        expect(Fibonacci(8)).toBe(21);
    });
});

