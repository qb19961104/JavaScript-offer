const obj={
    a:1,
    fn:()=>{
        console.log(this.a);
    }
};
obj.fn();
//输出undefined