var b=10;
(function b(){
    b=20;
    console.log(b);
})();
console.log(20);
//非匿名函数自执行，函数名会成为内部的属性，并且只读，b=20赋值不生效
//第一个输出b函数
//第二个输出10