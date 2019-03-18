//原型继承实例
function Elem(id){
    this.elem=document.getElementById(id);
}
Elem.prototype.html=function(val){
    var elem=this.elem;
    if(val){
        elem.innerHTML=val;
        return this;//链式操作
    }else{
        return elem.innerHTML;
    }
};
Elem.prototype.on=function(type,fn){
   var elem=this.elem;
   elem.addEventListener(type,fn);
};
var div1=new Elem('left-container');
div1.html('<p>hello</p>');
div1.on('click',function(){
  alert('clicked');
});