 const obj1 = {
    cmp :"xyz"
}

const obj2 = Object.create(obj1);

delete obj2.cmp;


console.log(obj2.cmp);//It will print the value of obj1 ,Either we delete or not it will print the value of obj1 always.
console.log(obj1.cmp);//It also prints the value.
console.log(obj2);//This obj will empty either we delete obj2.emm or not. because the value we can get by the obj2.__proto__.
console.log(obj2.__proto__);//It gives the value of obj1.