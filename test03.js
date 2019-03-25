//如何扁平化二位数组，即输入[1,[2,3],[4,5,6],7],输出[1,2,3,4,5,6,7],
//请使用array原型方法用一行代码写出来
const arr=[1,[2,3],[4,5,6],7];
//1.   arr.toString().split(",").map(Number)
var s=arr.flat(true);
console.log(s);