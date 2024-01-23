"use strict"


// EJERCICIO 1 - Iteración sobre un array con varios tipos de elementos.
let miArray = ["apple", 42, "banana", 7, "orange", 14, true, { key: "value" }];

// Iterar sobre el array
for (let elemento of miArray) {
    alert(elemento);
}


// EJERCICIO 2 - Iteración sobre una cadena de texto con for...of.
let miString = "Hola, mundo!";

for (let caracter of miString) {
    alert(caracter);
}


// EJERCICIO 3 - Iteración sobre un array de números.
let numeros = [10, 20, 30, 40, 50];

for (let numero of numeros) {
    alert(numero);
}

// EJERCICIO 4 - Uso de Map 

// Crear un Map
let miMapa = new Map();
// Almacenar valores
miMapa.set('nombre', 'Alexis');
miMapa.set('edad', 22);
miMapa.set('ciudad', 'Cuenca');

// Obtener valores por clave
alert(miMapa.get('nombre')); // Resultado: Alexis
alert(miMapa.get('edad'));   // Resultado: 22
alert(miMapa.get('ciudad')); // Resultado: Cuenca

// Verificar si una clave existe
alert(miMapa.has('nombre')); // Resultado: true
alert(miMapa.has('ocupacion')); // Resultado: false

// Eliminar un elemento por clave
miMapa.delete('edad');
alert(miMapa.get('edad'));   // Resultado: undefined

// Limpiar el Map
miMapa.clear();
alert(miMapa.size); // Resultado: 0

// Crear un Map
let miMapa = new Map();

// Almacenar valores
miMapa.set('nombre', 'Alexis');
miMapa.set('edad', 22);
miMapa.set('ciudad', 'Cuenca');

// Obtener un iterable con las claves
let claves = miMapa.keys();
alert([...claves]); // Resultado: 'nombre,edad,ciudad'

// Obtener un iterable con los valores
let valores = miMapa.values();
alert([...valores]); // Resultado: 'Alexis,22,Cuenca'

// Obtener un iterable para las entradas [clave, valor]
let entradas = miMapa.entries();
alert([...entradas]); // Resultado: 'nombre,Alexis,edad,22,ciudad,Cuenca'


//EJERCICIO 5 - Uso del Set
// Crear un Set con valores iniciales
let miSet = new Set([1, 2, 3, 4, 5]);

// Agregar un valor al Set
miSet.add(6);

// Verificar si un valor existe en el Set
alert(miSet.has(3)); // Resultado: true
alert(miSet.has(7)); // Resultado: false

// Eliminar un valor del Set y comprobar si existía
alert(miSet.delete(4)); // Resultado: true (ya que 4 existía)
alert(miSet.delete(8)); // Resultado: false (ya que 8 no existía)

// Eliminar todo el contenido del Set
miSet.clear();

// Obtener la cantidad de elementos en el Set
alert(miSet.size); // Resultado: 0


// Crear un Set con valores iniciales
let miSet = new Set([1, 2, 3, 4, 5]);

// Obtener un iterable con las claves
let claves = miSet.keys();
alert([...claves]); // Resultado: '1,2,3,4,5'

// Obtener un iterable con los valores
let valores = miSet.values();
alert([...valores]); // Resultado: '1,2,3,4,5'

// Obtener un iterable para las entradas [clave, valor]
let entradas = miSet.entries();
alert([...entradas]); // Resultado: '1,1,2,2,3,3,4,4,5,5'


//EJERCICIO 6 - Trabajo con objetos
// Crear un objeto con propiedades
let persona = {
    nombre: 'Alexis',
    edad: 22,
    ciudad: 'Cuenca'
};

// Obtener un array de propiedades
let propiedades = Object.keys(persona);
alert(propiedades); // Resultado: 'nombre,edad,ciudad'

// Obtener un array de valores
let valores = Object.values(persona);
alert(valores); // Resultado: 'Alexis,22,Cuenca'

// Obtener un array de pares [propiedad, valor]
let entradas = Object.entries(persona);
alert(entradas); // Resultado: 'nombre,Alexis,edad,22,ciudad,Cuenca'


let persona = {
    nombre: 'Alexis',
    edad: 22,
    ciudad: 'Cuenca'
  };
  
  let personaDuplicada = Object.fromEntries(
    Object.entries(persona).map(([key, value]) => [key, value * 2])
  );
  
  alert(personaDuplicada.edad); // 44
  
  
//EJERCICIO 7 - Desestructuracion de arrays
// Definir un array
let frutas = ['manzana', 'naranja', 'plátano'];

// Desestructuración
let [fruta1, fruta2, fruta3] = frutas;

// Mostrar resultados con alert
alert(fruta1); // 'manzana'
alert(fruta2); // 'naranja'
alert(fruta3); // 'plátano'


// Definir un array
let letras = ['a', 'b', 'c', 'd', 'e'];

// Desestructuración con el operador rest
let [primera, segunda, ...resto] = letras;

// Mostrar resultados con alert
alert(primera); // 'a'
alert(segunda); // 'b'
alert(resto);    // ['c', 'd', 'e']


//EJERCICIO 8 - Desestructuracion de objetos
// Definir un objeto
let persona = { nombre: 'Alexis', edad: 22, ciudad: 'Cuenca' };

// Desestructuración
let { nombre, edad, ciudad } = persona;

// Mostrar resultados con alert
alert('Nombre: ' + nombre);
alert('Edad: ' + edad);
alert('Ciudad: ' + ciudad);


// Definir un objeto
let persona = { nombre: 'Alexis', edad: 22, ciudad: 'Cuenca', trabajo: 'Desarrollador' };

// Desestructuración con el operador rest en objetos
let { nombre, ...resto } = persona;

// Mostrar resultados con alert
alert('Nombre: ' + nombre);
alert('Resto de propiedades: ' + JSON.stringify(resto));


//EJERCICIO 9 - Desestructuracion anidadas de objetos
// Definir un objeto anidado
let persona = {
    nombre: 'Alexis',
    edad: 22,
    direccion: {
      via: 'San Miguel',
      ciudad: 'Cuenca'
    }
  };
  
  // Desestructuración anidada
  let { nombre, edad, direccion: { via, ciudad } } = persona;
  
  // Mostrar resultados
  console.log(nombre);  // 'Alexis'
  console.log(edad);    // 22
  console.log(via);     // 'San Miguel'
  console.log(ciudad);  // 'Cuenca'

  
  // Definir un objeto
let mascota = { nombreMascota: 'Ares', tipo: 'Pitbull' };


//EJERCICIO 10 - Desestructuracion con alias y asignacion predeterminada 
// Desestructuración con alias
let { nombreMascota: nombre, tipo: raza } = mascota;

// Mostrar resultados con alert
alert('Nombre de la mascota: ' + nombre);
alert('Especie: ' + raza);


// Definir un objeto con propiedades faltantes
let carro = { marca: 'Peugeot', modelo: '206 Berlina' };

// Desestructuración con asignación predeterminada
let { marca, modelo, color = 'Rojo' } = carro;

// Mostrar resultados con alert
alert('Marca del coche: ' + marca);
alert('Modelo del coche: ' + modelo);
alert('Color del coche: ' + color);

