let name="pankaj";
const obj ={
    name:"Pravin",
    func:function(){
        console.log("Normal function name value: "+ this.name);
        console.log("Normal function name value: "+ name);//Access the global variable .
    },
    func2:()=>{
        console.log("Arrow function name value: "+ this.name);//Because this keyword is not  bind to arrow function so that  this is unable to refer to obj values.
        console.log("Arrow function name value: "+ name);//It accesses the global variable.
    }
}

obj.func();
obj.func2();