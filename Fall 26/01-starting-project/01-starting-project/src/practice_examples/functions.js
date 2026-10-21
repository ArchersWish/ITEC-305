function sayHello(name){
    console.log(`Hello ${name}`);
}
sayHello('George'); //print Hello Geoge

function add(x, y){
    return x + y;
}
console.log(add(2,3));
console.log(add("hello ", "world"));

//Functions as parameters
function sayHi(myfunc){
    console.log('Hi');
    myfunc()
}
function bye(){
    console.log("Bye")
};
function lol(){
    console.log("lol");
}
sayHi(bye);
sayHi(lol);
sayHi(function(){ //anonymous function
    console.log("lolololol")
})

//Functions as expresions
// function lolololol{
// console.log("lololol");
// }
let iLoveJS = function(){
    console.log("I love js");
}
iLoveJS();
let expresionAdd = function(x, y){
    return x + y;
}
expresionAdd(1,2);
//Arrow Functions
let addArrow = (x,y) =>{
    return x + y;
}
letaddArrowShort = (x,y)=>x+y;
addArrow(1,2);

let squared = x => x*x;