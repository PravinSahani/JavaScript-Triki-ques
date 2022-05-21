(function (){
    var a=b=3; //means b=3 a=b
})();

console.log("a is defined? " + (typeof a !== 'undefined'));//Prints a is deifined false
console.log("b is defined? " + (typeof b !== 'undefined'));//print b is defined true
// console.log(a);
