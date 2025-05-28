console.log("Hello World from main.js");
let x=10;
let y=20;
console.log("The value of x is:", x);
console.log("The value of x+y is:", x+y);
var name = "Ryan";
console.log(name);
console.log("My name is " + name + " Im " +x+ " years old");

const person = {
    name: "Ryan",
    age: 30,
    city: "New York"
};
console.log(person);
alert("Hello World!");
alert("I am " + person.name + " I am " +person.age+ " years old. I Live in " +person.city+ " Thanks ");

document.getElementById("output").innerHTML = person.age;


let age = 15;
if (age >= 18) {
    console.log("You are an adult");
    document.getElementById("age").innerHTML = "You are an adult";
} else {
    console.log("You are a minor");
    document.getElementById("age").innerHTML = "You are a minor";
}