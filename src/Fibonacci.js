function Fibonacci(n) {
    if (n <= 1) { return n; }
    var first = 0;
    var second = 1;
    var result = 0;
    for (var i = 2; i <= n; i++) {
        result = first + second;
        first = second;
        second = result;
    }

    return result;
}