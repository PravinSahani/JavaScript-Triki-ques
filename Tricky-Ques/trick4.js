function func1()
{
    return{
        name: "pravin"
    };
}
function func2()
{
    return
    { //This is the reason behind that's why name value will not be printed for func2
        name:"pravin"
    };
}

console.log(func1());//It prints the value of name.
console.log(func2());//It does not print the value of name because of the convention of javascript: like after the return statement we can't put curly brace at the next line , we can see at above comment.

function foo1()
{
  return {
      bar: "hello"
  };
}

console.log(foo1());//Prints the bar value.