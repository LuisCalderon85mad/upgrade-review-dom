function init() {
  console.log("Manipulando el DOM con JS Mayo 2022");
}

window.onload = init;

/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

let ulArray = document.createElement("ul");  // creo la lista 

for (let i = 0; i < countries.length; i++) {  // bucle for que recorre length 
  let liCountry = document.createElement("li");   // creo los li 
  liCountry.innerText = countries[i]; // incluyo con innerText countries[i] esto va incluyendo Japon, Nicaragua... 
  ulArray.appendChild(liCountry);  // inserto los li dentro del ul que he creado previamente 
}

document.body.appendChild(ulArray);  // inserto el ul al final del body 



/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */

let eliminateElement = document.querySelector(".fn-remove-me"); // seleccionado el elemento
// eliminateElement.classList.remove('fn-remove-me'); // He eliminado la clase

document.body.removeChild(eliminateElement); // quiero eliminar el elemento

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".*/

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

let ulCars = document.createElement("ul");

for (i = 0; i < cars.length; i++) {
  let liCars = document.createElement("li");
  liCars.innerText = cars[i];
  ulCars.appendChild(liCars);
}

// document.body.appendChild(ulCars); // aquí lo está creando al final del body, no cumple el ejercicio.
 
let positionCars = document.querySelector("[data-function='printHere']"); // Creas variable y lo igualas al nodo seleccionado
positionCars.appendChild(ulCars); // Lo metes al final de ese nodo (ahora nombrado positionCars)



/* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */

const newCountries = [
  { title: "Canada", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "EEUU", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Spain", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Germany", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Italy", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (let i = 0; i < newCountries.length; i++) {
  let div4 = document.createElement("div"); // Creas los div, h4 y img con un for. Creas un div que tiene un h4 y una img.
  let h4 = document.createElement("h4");
  let img = document.createElement("img");

  h4.innerText = newCountries[i].title; // Le metes el texto y la imagen a cada uno recorriendo el indice [i] y con el . entras en la propiedad (en este caso tittle o imgUrl)
  img.src = newCountries[i].imgUrl;

  div4.appendChild(h4); // Esto lo hago para meter el h4 y la img dentro de cada uno de los div. "Al final de div4 mete h4 e img"
  div4.appendChild(img);

  document.body.appendChild(div4); // Esto lo hago para pintar al final del body los 4 divs.
}



/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista. */

const eliminateList = document.createElement("button"); // creas un botón 
eliminateList.innerText = "Eliminar último lista"; // le metes un texto 


eliminateList.onclick = function(){
  let divs = document.querySelectorAll("li");
  let arrayDivs = Array.from(divs);
  document.body.removeChild(arrayDivs[arrayDivs.length-1])  // con ayuda, porque este punto no lo pillaba
}

document.body.appendChild(eliminateList); // lo colocas al final del body (por eso .body)



/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html. */

