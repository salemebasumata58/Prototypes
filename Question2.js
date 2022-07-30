
let arr = new Array(2,2,3,4,5,6);
//   console.log(arr)

Array.prototype.impel=function(value){
    let index = this.length;
    this[index] = value;  
  }
  arr.impel(10);
  arr.impel(11)
  console.log("arr:", arr)

Array.prototype.go_off=function(){
    let index = this.length-1;
    this.splice(index, 1)  
  }
  arr.go_off();
  arr.go_off();
  console.log("arr:", arr);