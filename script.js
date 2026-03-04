console.log("Hola mundo!");

const objeto = {atributo: "name", atributo2: 39}

console.log(objeto.atributo)
console.log(objeto.atributo2)
objeto.atributo2 = "hola"
console.log(objeto.atributo2)

// Funciones útiles built-in
alert("Peligro!!");
confirm("Desea continuar?");

const respuesta = prompt("¿Cuál es tu nombre?");
console.log(respuesta)
typeof(respuesta)

// Operadores
const numero1 = 5;
const numero2 = 10;
console.log(numero1 + numero2)
console.log(numero1 - numero2)
console.log(numero1 * numero2)
console.log(numero1 / numero2)
console.log(numero1 % numero2)

// Arreglos
const arreglo = [1, 2, 3, 4, 5];
const arreglo2 = ["Hola", "Mundo", "!"];
console.log(arreglo[0])
console.log(arreglo2[1])

// Objetos
let persona = {
    nombre: "Juan",
    edad: 30,
    imprime(){
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
        }
    }

let maria = new persona("Maria", 25);
persona.imprime();

// Funciones
function suma(a, b){
    return a + b;
}
console.log(suma(5, 10))