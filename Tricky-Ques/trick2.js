var obj = {
    name:"pravin",
    func:function(){
        var self = this;
        console.log("Outer func: this.name "+ this.name);//Print pravin
        console.log("Outer func: self.name "+ self.name);//print pravin
        (function(){
        console.log("Inner func: this.name "+this.name);//Undefined because this keyword is not able to access from inner function 
        console.log("Inner func: self.name "+self.name); // self has already this keyword and that is in scope so that it prints tha value of name.
        }());
    }
}

obj.func();