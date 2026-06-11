function greet () {
    console.log("Hola JavaScript")
}

greet();

function showName (name) {
 console.log (`Hola ${name}`)
}

showName("Andres");

function sum(a, b) {
 return a + b 

}

console.log(sum(10, 5));

function createSlug (text){
return text.trim().toLowerCase().replaceAll(" ","-");
}
console.log(createSlug("Curso JavaScript Moderno"));