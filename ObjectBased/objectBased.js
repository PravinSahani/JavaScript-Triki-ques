const pravin = {
    name:"Pravin"
}
let pankaj = {
    name:"pankaj"
}
//Due to assignment to const container codes will break at that point.
pravin = pankaj;
console.log(pravin);