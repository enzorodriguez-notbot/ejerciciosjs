let personas = [
  { nombre: "Juan", edad: 25, ciudad: "Madrid" },
  { nombre: "Ana", edad: 30, ciudad: "Barcelona" },
  { nombre: "Carlos", edad: 22, ciudad: "Sevilla" },
  { nombre: "María", edad: 28, ciudad: "Valencia" },
  { nombre: "Pedro", edad: 35, ciudad: "Bilbao" },
];

// ej1 Filtrar por edad: Crea una función que reciba el array de personas y una edad como parámetro y devuelva un nuevo array con las personas que tienen esa edad o más.

let parte1;
parte1 = prompt(
  "introduce un numero y te dire quienes tienen la misma edad o mas "
);

const edadaFiltrar = personas.filter((persona) => persona.edad >= parte1);

edadaFiltrar.forEach((persona) => {
  console.log(`${persona.nombre} tiene ${persona.edad} años`);
});

// ej2  Ordenar por edad: Ordena el array de personas de menor a mayor edad.

const edades = [...personas];

edades.sort((a, b) => a.edad - b.edad);

edades.forEach((personas) => {
  console.log(personas.edad);
});

//3- Buscar por ciudad: Implementa una función que reciba el array de personas y una ciudad como parámetro, y devuelva un array con las personas que viven en esa ciudad.

let ciudadelegida;
ciudadelegida = prompt("dime una ciudad y te dire quien vive en ella");

const ciudadaFiltrar = personas.filter(
  (persona) => persona.ciudad === ciudadelegida
);

ciudadaFiltrar.forEach((persona) => {
  console.log(`${persona.nombre} vive en ${persona.ciudad}`);
});

//4- Calcular promedio de edad: Crea una función que calcule el promedio de edad de todas las personas en el array.

const promedioEdades =
  personas.reduce((total, persona) => total + persona.edad, 0) /
  personas.length;

console.log(`la edad promedio es ${promedioEdades}`);

//5- Actualizar información: Implementa una función que reciba el array de personas, el nombre de una persona y un objeto con nueva información, y actualice la información de esa persona en el array.

let personaaCambiar = [...personas];

const encontrar = numeros.find((personas) => {
  return personaaCambiar;
});
