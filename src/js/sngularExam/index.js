// 1.- ¿Cual es el resultado del siguiente código?
const array1 = [1, 2, 3, 4, 5]
console.log("1:", array1.at(-1)) // 5

// 2.- ¿Cual es el resultado del siguiente código?
console.log(0.2 + 0.1 === 0.3) // false

// 3.- ¿Cual es el resultado del siguiente código?
console.log(isNaN('20')) // false

// 4.- ¿Cual es el resultado del siguiente código?
const writer = {
  name: 'Juan Rulfo',
  country: 'México'
}

const anotherWriter = {...writer};

writer.name = 'Mariano Azuela';
console.log(anotherWriter); // {name: 'Juan Rulfo', country: 'México'}

// 5.- ¿Cual es el valor de la constante street?
const employee = {
  firstName: 'Pedro',
  age: 30
}

const street = employee.address?.street;
console.log(street) // undefined

// 6.- ¿Cual es el valor de la constante street2?
const employee2 = {
  firstName: 'Pedro',
  age: 30
}

//const street2 = employee2.address.street;
//console.log(street) !!ERROR!!

// 7.- ¿Cual es el resultado del siguiente código?
let promise1 = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve('promise1 fullfilled'), 2000)
  )
}

let promise2 = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve('promise2 fullfilled'), 1000)
)
}

Promise.all([promise1(), promise2()]).then((result) => { // En el método all, el orden de los resultados es el mismo que el orden de las promesas
console.log(result) // ['promise1 fullfilled', 'promise2 fullfilled']
})

// 8.- ¿Cual es el resultado del siguiente código?
let nombres = 'Carlos/José/Sandra/Ana/Rosa'

let aNombres = nombres.split();
console.log(aNombres.length); // 1

// 9.- ¿Cual es el resultado del siguiente código?
let message="hello";
// alert(typeof message); // string

// 10.- Para definir una atributo ptivado en una clase, se utiliza el prefijo #miAtributo

// 11.- ¿Cual es el resultado del siguiente código?
let condicion1, resultado, condicion2;

condicion1 = 2>8;
condicion2 = 8>2;
resultado = condicion1 && condicion2;

console.log(resultado); // false

// 12.- ¿Cual es el resultado del siguiente código?
const amount = 123_00;
console.log(amount); // 12300 type: number

// 13.- ¿Cual es el resultado del siguiente código?
let aNum=[2,4,6,8,10];
aNum.pop();
aNum.push(12,14);

console.log(aNum); // [2,4,6,8,12,14]

// 14.- ¿Cual es el resultado del siguiente código?

const fruits = ['manzana','pera', 'uva','guayaba'];
const { fruit1, fruit2 } = fruits;
console.log(fruit1);

// 15.- ¿Cual es el resultado del siguiente código?
const array = [21, 13, 34, 26, 3, 5];

const foundNumbers = array.find((number) => number > 20); // find devuelve el primer elemento que cumple la condición
console.log(foundNumbers); // 21

// 17.- ¿Cual es el resultado del siguiente código?
const person = {
  'name' : 'Leeroy',
  'lastName' : 'Jenkins',
  'hobby' : 'videojuegos',
  'favoriteMovies' : ['Interstellar', 'batman', 'Inception', 'Seven']
};

console.log(JSON.stringify(Object.entries(person))); // [["name","Leeroy"],["lastName","Jenkins"],["hobby","videojuegos"],["favoriteMovies",["Interstellar","batman","Inception

// 18.- ¿Cual es el resultado del siguiente código?
function suma(param1 = 2, param2=3){
  return param1+param2
}
console.log(suma(10)); // 13

// 20.- ¿Cual es el resultado del siguiente código?
const obj = {nombre: "Leeroy", apellido: "Jenkings"};
// console.log(obj.hasOwn(obj,'edad')); --> Para utilizar el método hasOwn, se debe utilizar el objeto Object.hasOwn

// 21.- ¿Cual es el resultado del siguiente código?
let numbers = [5,4,3,2,1,0]
console.log(numbers.reverse()); // [0,1,2,3,4,5]

// 22.- estas no son palabras reservadas en javascript field,constant,variable,wait

// 24.- ¿Cual es el resultado del siguiente código?
const names = [
  'Carlos',
  'viviana',
  'Maria',
  'Dionisio'
];

console.log(names.map(nombre => nombre.length)); // [6,7,5,8]

// 25.- ¿Cual es el resultado del siguiente código?
console.log(('o__o'.padStart(10, '-')).padEnd(15, '-')); // ---o__o-----

// 27.- ¿Cual es el resultado del siguiente código?
console.log([,,,].length); // 3

// 28.- ¿Cual es el resultado del siguiente código?
const newArray = new Array()
console.log(newArray.length); // 0

// 36.- ¿Cual es el resultado del siguiente código?
console.log((function f(f){return typeof f();
})(function(){
return 1;}
))

// 37.- ¿Cual es el resultado del siguiente código?
const first = [1,2,3,4,5]
const second = [1,2,3,4]

let result = first.length === second.length && first.every((number, index) => number === second[index])
console.log(result) // false