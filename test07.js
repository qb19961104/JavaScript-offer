var obj = {
    a: function() {
      return this;
    },
    b: () => this
  }
  var a1 = obj.a;
  var b1 = obj.b;
  console.log(obj.a);  //function(a)
  console.log(obj.b);  //function(b)
  console.log(a1());  //window
  console.log(b1());  //window


  var name="zhangsan";
  (function name(){
    name="lisi";
    console.log(this.name);
  })();
