/*斐波那契数列指的是类似于下面的数列：
1， 1， 2， 3， 5， 8， 13， ……
完成fibonacci函数，接受n作为参数，可以获取数列中第n个数，例如：

fibonacci(1) // => 1
fibonacci(2) // => 1
fibonacci(3) // => 2
...

想到的最简单的实现就是利用递归：
*/

const fibonacci = (n) => {
    if (n === 2 || n === 1) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}


//我们还可以进一步优化，由于缓存cache在每次计算都是需要反问的，也就是说cache是需要保留在内存中的，那么我们就可以构造一个闭包，让cache保留在闭包中，供递归时使用：
const fibonacci = ((cache = {}) => n => {
    if (cache[n]) {
      return cache[n];
    }
    if (n <= 2) {
      return cache[n] = 1;
    }
    return cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
  })();
  
  console.log(fibonacci(1000));