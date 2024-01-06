let body = document.body;

//Contenedor de la fila de los selectores
let containerSelectores = document.createElement('div');
containerSelectores.classList.add('container', 'mt-5');

//Fila para los selectores
let rowSelectores = document.createElement('div');
rowSelectores.classList.add('row');
containerSelectores.appendChild(rowSelectores);

//Columna para el selector de idioma
let colIdioma = document.createElement('div');
colIdioma.classList.add('col-md-6');

//Selector de idioma y opciones de idioma
let seleccionIdioma = document.createElement("select");
seleccionIdioma.setAttribute("id", "language");
seleccionIdioma.setAttribute("class", "form-select");

let opcionPredeterminadaIdioma = document.createElement("option");
opcionPredeterminadaIdioma.disabled = true;
opcionPredeterminadaIdioma.selected = true;
opcionPredeterminadaIdioma.innerHTML = "Idioma";

let opcionEspanol = document.createElement("option");
opcionEspanol.setAttribute("value", "Espanol");
opcionEspanol.innerHTML = "Español";

let opcionIngles = document.createElement("option");
opcionIngles.setAttribute("value", "Ingles");
opcionIngles.innerHTML = "Ingles";

seleccionIdioma.append(opcionPredeterminadaIdioma, opcionEspanol, opcionIngles);

colIdioma.appendChild(seleccionIdioma);

//Columna para el selector de tema
let colTema = document.createElement('div');
colTema.classList.add('col-md-6');

//Selector de tema y opciones de tema
let seleccionTema = document.createElement("select");
seleccionTema.setAttribute("id", "theme");
seleccionTema.setAttribute("class", "form-select");

let opcionPredeterminadaTema = document.createElement("option");
opcionPredeterminadaTema.disabled = true;
opcionPredeterminadaTema.selected = true;
opcionPredeterminadaTema.innerHTML = "Tema";

let opcionOscuro = document.createElement("option");
opcionOscuro.setAttribute("value", "dark");
opcionOscuro.innerHTML = "Oscuro";

let opcionClaro = document.createElement("option");
opcionClaro.setAttribute("value", "white");
opcionClaro.innerHTML = "Claro";

let opcionFree = document.createElement("option");
opcionFree.setAttribute("value", "free");
opcionFree.innerHTML = "Otoño";

seleccionTema.append(opcionPredeterminadaTema, opcionOscuro, opcionClaro, opcionFree);

colTema.appendChild(seleccionTema);

//Agregar ambas columnas
rowSelectores.append(colIdioma, colTema);

//Contenedor para las targetas del menú
let containerMenu = document.createElement('div');
containerMenu.classList.add('container');

//Primera fila del menú
let rowMenu1 = document.createElement('div');
rowMenu1.classList.add('row');

//Columna para el BBQ Crunch
let colBBQCrunch = document.createElement('div');
colBBQCrunch.classList.add('col-md-3', 'col-sm-6', 'mt-5');

//Targeta para el BBQ Crunch
let cardBBQCrunch = document.createElement('div');
cardBBQCrunch.classList.add('card', 'h-100');

//Imagen para el BBQ Crunch
let imgBBQCrunch = document.createElement('img');
imgBBQCrunch.src = 'images/hamburguesa-1.webp';
imgBBQCrunch.alt = 'Hamburguesita 1';
imgBBQCrunch.classList.add('img-fluid');

//Cuerpo de la carta de BBQ Crunch
let cardBodyBBQCrunch = document.createElement('div');
cardBodyBBQCrunch.classList.add('card-body', 'd-flex', 'flex-column');

//Texto dentro del cuerpo del BBQ Crunch
let h5BBQCrunchPrecio = document.createElement('h5');
h5BBQCrunchPrecio.innerHTML = "$ 8.900";

let h5BBQCrunch = document.createElement('h5');
h5BBQCrunch.innerHTML = "BBQ Crunch";

let parrafoBBQCrunch = document.createElement('p');
parrafoBBQCrunch.innerHTML = "1 Sandwich BBQ Crunch (1 filete de pollo apanado)";

let btnBBQCrunch = document.createElement('button');
btnBBQCrunch.classList.add('btn', 'btn-danger', 'w-100', 'mt-auto');
btnBBQCrunch.innerHTML = "Comprar";

//Agregar todos los elementos a la targeta BBQ Crunch
cardBodyBBQCrunch.append(h5BBQCrunchPrecio, h5BBQCrunch, parrafoBBQCrunch, btnBBQCrunch);
cardBBQCrunch.append(imgBBQCrunch, cardBodyBBQCrunch);
colBBQCrunch.appendChild(cardBBQCrunch);

//Columna para el Kentucky Sandwich
let colKentuckySandwich = document.createElement('div');
colKentuckySandwich.classList.add('col-md-3', 'col-sm-6', 'mt-5');

//Targeta para el Kentucky Sandwich
let cardKentuckySandwich = document.createElement('div');
cardKentuckySandwich.classList.add('card', 'h-100');

//Imagen para el Kentucky Sandwich
let imgKentuckySandwich = document.createElement('img');
imgKentuckySandwich.src = 'images/hamburguesa-2.webp';
imgKentuckySandwich.alt = 'Hamburguesita 2';
imgKentuckySandwich.classList.add('img-fluid');

//Cuerpo de la carta de Kentucky Sandwich
let cardBodyKentuckySandwich = document.createElement('div');
cardBodyKentuckySandwich.classList.add('card-body', 'd-flex', 'flex-column');

//Texto dentro del cuerpo del Kentucky Sandwich
let h5KentuckySandwichPrecio = document.createElement('h5');
h5KentuckySandwichPrecio.innerHTML = "$ 15.900";

let h5KentuckySandwich = document.createElement('h5');
h5KentuckySandwich.innerHTML = "Kentucky Sandwich";

let parrafoKentuckySandwich = document.createElement('p');
parrafoKentuckySandwich.innerHTML = "1 Kentucky hamburguesa / Sandwich (1 filete de pechuga de pollo apanado, pepinillos, ...";

let btnKentuckySandwich = document.createElement('button');
btnKentuckySandwich.classList.add('btn', 'btn-danger', 'w-100', 'mt-auto');
btnKentuckySandwich.innerHTML = "Comprar";

//Agregar todos los elementos a la targeta Kentucky Sandwich
cardBodyKentuckySandwich.append(h5KentuckySandwichPrecio, h5KentuckySandwich, parrafoKentuckySandwich, btnKentuckySandwich);
cardKentuckySandwich.append(imgKentuckySandwich, cardBodyKentuckySandwich);
colKentuckySandwich.appendChild(cardKentuckySandwich);

//Columna para el Combo BBQ Crunch
let colComboBBQCrunch = document.createElement('div');
colComboBBQCrunch.classList.add('col-md-3', 'col-sm-6', 'mt-5');

//Targeta para el Combo BBQ Crunch
let cardComboBBQCrunch = document.createElement('div');
cardComboBBQCrunch.classList.add('card', 'h-100');

//Imagen para el Combo BBQ Crunch
let imgComboBBQCrunch = document.createElement('img');
imgComboBBQCrunch.src = 'images/hamburguesa-3.webp';
imgComboBBQCrunch.alt = 'Hamburguesita 3';
imgComboBBQCrunch.classList.add('img-fluid');

//Cuerpo de la carta de Combo BBQ Crunch
let cardBodyComboBBQCrunch = document.createElement('div');
cardBodyComboBBQCrunch.classList.add('card-body', 'd-flex', 'flex-column');

//Texto dentro del cuerpo del Combo BBQ Crunch
let h5ComboBBQCrunchPrecio = document.createElement('h5');
h5ComboBBQCrunchPrecio.innerHTML = "$ 15.900";

let h5ComboBBQCrunch = document.createElement('h5');
h5ComboBBQCrunch.innerHTML = "Combo BBQ Crunch";

let parrafoComboBBQCrunch = document.createElement('p');
parrafoComboBBQCrunch.innerHTML = "1 Sandwich BBQ Crunch (1 filete de pollo apanado) + 1 Papa pequeña + 1 gaseosa...";

let btnComboBBQCrunch = document.createElement('button');
btnComboBBQCrunch.classList.add('btn', 'btn-danger', 'w-100', 'mt-auto');
btnComboBBQCrunch.innerHTML = "Comprar";

//Agregar todos los elementos a la targeta Combo BBQ Crunch
cardBodyComboBBQCrunch.append(h5ComboBBQCrunchPrecio, h5ComboBBQCrunch, parrafoComboBBQCrunch, btnComboBBQCrunch);
cardComboBBQCrunch.append(imgComboBBQCrunch, cardBodyComboBBQCrunch);
colComboBBQCrunch.appendChild(cardComboBBQCrunch);

//Columna para el Kentucky Coronel Sandwich
let colKentuckyCoronelSandwich = document.createElement('div');
colKentuckyCoronelSandwich.classList.add('col-md-3', 'col-sm-6', 'mt-5');

//Targeta para el Kentucky Coronel Sandwich
let cardKentuckyCoronelSandwich = document.createElement('div');
cardKentuckyCoronelSandwich.classList.add('card', 'h-100');

//Imagen para el Kentucky Coronel Sandwich
let imgKentuckyCoronelSandwich = document.createElement('img');
imgKentuckyCoronelSandwich.src = './images/hamburguesa-4.webp';
imgKentuckyCoronelSandwich.alt = 'Hamburguesita 4';
imgKentuckyCoronelSandwich.classList.add('img-fluid');

//Cuerpo de la carta de Kentucky Coronel Sandwich
let cardBodyKentuckyCoronelSandwich = document.createElement('div');
cardBodyKentuckyCoronelSandwich.classList.add('card-body', 'd-flex', 'flex-column');

//Texto dentro del cuerpo del Kentucky Coronel Sandwich
let h5KentuckyCoronelSandwichPrecio = document.createElement('h5');
h5KentuckyCoronelSandwichPrecio.innerHTML = "$ 16.900";

let h5KentuckyCoronelSandwich = document.createElement('h5');
h5KentuckyCoronelSandwich.innerHTML = "Kentucky Coronel Sandwich";

let parrafoKentuckyCoronelSandwich = document.createElement('p');
parrafoKentuckyCoronelSandwich.innerHTML = "1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada...";

let btnKentuckyCoronelSandwich = document.createElement('button');
btnKentuckyCoronelSandwich.classList.add('btn', 'btn-danger', 'w-100', 'mt-auto');
btnKentuckyCoronelSandwich.innerHTML = "Comprar";

//Agregar todos los elementos a la targeta Kentucky Coronel Sandwich
cardBodyKentuckyCoronelSandwich.append(h5KentuckyCoronelSandwichPrecio, h5KentuckyCoronelSandwich, parrafoKentuckyCoronelSandwich, btnKentuckyCoronelSandwich);
cardKentuckyCoronelSandwich.append(imgKentuckyCoronelSandwich, cardBodyKentuckyCoronelSandwich);
colKentuckyCoronelSandwich.appendChild(cardKentuckyCoronelSandwich);

//Agregar las targetas del menu en la primera linea
rowMenu1.append(colBBQCrunch, colKentuckySandwich, colComboBBQCrunch, colKentuckyCoronelSandwich);

//Segunda fila del menú
let rowMenu2 = document.createElement('div');
rowMenu2.classList.add('row');

//Columna para el Combo Kentucky Sandwich
let colComboKentuckySandwich = document.createElement('div');
colComboKentuckySandwich.classList.add('col-md-3', 'col-sm-6', 'mt-5');

//Targeta para el Combo Kentucky Sandwich
let cardComboKentuckySandwich = document.createElement('div');
cardComboKentuckySandwich.classList.add('card', 'h-100');

//Imagen para el Combo Kentucky Sandwich
let imgComboKentuckySandwich = document.createElement('img');
imgComboKentuckySandwich.src = './images/hamburguesa-5.webp';
imgComboKentuckySandwich.alt = 'Hamburguesita 5';
imgComboKentuckySandwich.classList.add('img-fluid');

//Cuerpo de la carta de Combo Kentucky Sandwich
let cardBodyComboKentuckySandwich = document.createElement('div');
cardBodyComboKentuckySandwich.classList.add('card-body', 'd-flex', 'flex-column');

//Texto dentro del cuerpo del Combo Kentucky Sandwich
let h5ComboKentuckySandwichPrecio = document.createElement('h5');
h5ComboKentuckySandwichPrecio.innerHTML = "$ 21.900";

let h5ComboKentuckySandwich = document.createElement('h5');
h5ComboKentuckySandwich.innerHTML = "Combo Kentucky Sandwich";

let parrafoComboKentuckySandwich = document.createElement('p');
parrafoComboKentuckySandwich.innerHTML = "1 Kentucky hamburguesa / Sandwich (1 filete de pechuga de pollo apanado, pepinillos, ...";

let btnComboKentuckySandwich = document.createElement('button');
btnComboKentuckySandwich.classList.add('btn', 'btn-danger', 'w-100', 'mt-auto');
btnComboKentuckySandwich.innerHTML = "Comprar";

//Agregar todos los elementos a la targeta Combo Kentucky Sandwich
cardBodyComboKentuckySandwich.append(h5ComboKentuckySandwichPrecio, h5ComboKentuckySandwich, parrafoComboKentuckySandwich, btnComboKentuckySandwich);
cardComboKentuckySandwich.append(imgComboKentuckySandwich, cardBodyComboKentuckySandwich);
colComboKentuckySandwich.appendChild(cardComboKentuckySandwich);

//Columna para el Combo Kentucky Coronel Sandwich
let colComboKentuckyCoronelSandwich = document.createElement('div');
colComboKentuckyCoronelSandwich.classList.add('col-md-3', 'col-sm-6', 'mt-5');

//Targeta para el Combo Kentucky Coronel Sandwich
let cardComboKentuckyCoronelSandwich = document.createElement('div');
cardComboKentuckyCoronelSandwich.classList.add('card', 'h-100');

//Imagen para el Combo Kentucky Coronel Sandwich
let imgComboKentuckyCoronelSandwich = document.createElement('img');
imgComboKentuckyCoronelSandwich.src = 'images/hamburguesa-6.webp';
imgComboKentuckyCoronelSandwich.alt = 'Hamburguesita 6';
imgComboKentuckyCoronelSandwich.classList.add('img-fluid');

//Cuerpo de la carta de Combo Kentucky Coronel Sandwich
let cardBodyComboKentuckyCoronelSandwich = document.createElement('div');
cardBodyComboKentuckyCoronelSandwich.classList.add('card-body', 'd-flex', 'flex-column');

//Texto dentro del cuerpo del Combo Kentucky Coronel Sandwich
let h5ComboKentuckyCoronelSandwichPrecio = document.createElement('h5');
h5ComboKentuckyCoronelSandwichPrecio.innerHTML = "$ 22.900";

let h5ComboKentuckyCoronelSandwich = document.createElement('h5');
h5ComboKentuckyCoronelSandwich.innerHTML = "Combo Kentucky Coronel Sandwich";

let parrafoComboKentuckyCoronelSandwich = document.createElement('p');
parrafoComboKentuckyCoronelSandwich.innerHTML = "1 Kentucky hamburguesa / Sandwich (1 filete de pechuga de pollo apanado, Ensalada, ...";

let btnComboKentuckyCoronelSandwich = document.createElement('button');
btnComboKentuckyCoronelSandwich.classList.add('btn', 'btn-danger', 'w-100', 'mt-auto');
btnComboKentuckyCoronelSandwich.innerHTML = "Comprar";

//Agregar todos los elementos a la targeta Combo Kentucky Coronel Sandwich
cardBodyComboKentuckyCoronelSandwich.append(h5ComboKentuckyCoronelSandwichPrecio, h5ComboKentuckyCoronelSandwich, parrafoComboKentuckyCoronelSandwich, btnComboKentuckyCoronelSandwich);
cardComboKentuckyCoronelSandwich.append(imgComboKentuckyCoronelSandwich, cardBodyComboKentuckyCoronelSandwich);
colComboKentuckyCoronelSandwich.appendChild(cardComboKentuckyCoronelSandwich);

//Columna para el Sandwich Crispy BBQ
let colSandwichCrispyBBQ = document.createElement('div');
colSandwichCrispyBBQ.classList.add('col-md-3', 'col-sm-6', 'mt-5');

//Targeta para el Sandwich Crispy BBQ
let cardSandwichCrispyBBQ = document.createElement('div');
cardSandwichCrispyBBQ.classList.add('card', 'h-100');

//Imagen para el Sandwich Crispy BBQ
let imgSandwichCrispyBBQ = document.createElement('img');
imgSandwichCrispyBBQ.src = 'images/hamburguesa-7.webp';
imgSandwichCrispyBBQ.alt = 'Hamburguesita 7';
imgSandwichCrispyBBQ.classList.add('img-fluid');

//Cuerpo de la carta de Sandwich Crispy BBQ
let cardBodySandwichCrispyBBQ = document.createElement('div');
cardBodySandwichCrispyBBQ.classList.add('card-body', 'd-flex', 'flex-column');

//Texto dentro del cuerpo del Sandwich Crispy BBQ
let h5SandwichCrispyBBQPrecio = document.createElement('h5');
h5SandwichCrispyBBQPrecio.innerHTML = "$ 23.900";

let h5SandwichCrispyBBQ = document.createElement('h5');
h5SandwichCrispyBBQ.innerHTML = "Sandwich Crispy BBQ";

let parrafoSandwichCrispyBBQ = document.createElement('p');
parrafoSandwichCrispyBBQ.innerHTML = "1 Sandwich Crispy BBQ (1 filete de pechuga de pollo extra grande, triple empanizado, cebolla, ...";

let btnSandwichCrispyBBQ = document.createElement('button');
btnSandwichCrispyBBQ.classList.add('btn', 'btn-danger', 'w-100', 'mt-auto');
btnSandwichCrispyBBQ.innerHTML = "Comprar";

//Agregar todos los elementos a la targeta Sandwich Crispy BBQ
cardBodySandwichCrispyBBQ.append(h5SandwichCrispyBBQPrecio, h5SandwichCrispyBBQ, parrafoSandwichCrispyBBQ, btnSandwichCrispyBBQ);
cardSandwichCrispyBBQ.append(imgSandwichCrispyBBQ, cardBodySandwichCrispyBBQ);
colSandwichCrispyBBQ.appendChild(cardSandwichCrispyBBQ);

//Columna para el Combo Sandwich Crispy BBQ
let colComboSandwichCrispyBBQ = document.createElement('div');
colComboSandwichCrispyBBQ.classList.add('col-md-3', 'col-sm-6', 'mt-5');

//Targeta para el Combo Sandwich Crispy BBQ
let cardComboSandwichCrispyBBQ = document.createElement('div');
cardComboSandwichCrispyBBQ.classList.add('card', 'h-100');

//Imagen para el Combo Sandwich Crispy BBQ
let imgComboSandwichCrispyBBQ = document.createElement('img');
imgComboSandwichCrispyBBQ.src = 'images/hamburguesa-8.webp';
imgComboSandwichCrispyBBQ.alt = 'Hamburguesita 8';
imgComboSandwichCrispyBBQ.classList.add('img-fluid');

//Cuerpo de la carta de Combo Sandwich Crispy BBQ
let cardBodyComboSandwichCrispyBBQ = document.createElement('div');
cardBodyComboSandwichCrispyBBQ.classList.add('card-body', 'd-flex', 'flex-column');

//Texto dentro del cuerpo del Combo Sandwich Crispy BBQ
let h5ComboSandwichCrispyBBQPrecio = document.createElement('h5');
h5ComboSandwichCrispyBBQPrecio.innerHTML = "$ 29.900";

let h5ComboSandwichCrispyBBQ = document.createElement('h5');
h5ComboSandwichCrispyBBQ.innerHTML = "Combo Sandwich Crispy BBQ";

let parrafoComboSandwichCrispyBBQ = document.createElement('p');
parrafoComboSandwichCrispyBBQ.innerHTML = "1 Sandwich Crispy BBQ(1 Filete de pechuga extra grande, triple empanizado, cebolla, ...";

let btnComboSandwichCrispyBBQ = document.createElement('button');
btnComboSandwichCrispyBBQ.classList.add('btn', 'btn-danger', 'w-100', 'mt-auto');
btnComboSandwichCrispyBBQ.innerHTML = "Comprar";

//Agregar todos los elementos a la targeta Combo Sandwich Crispy BBQ
cardBodyComboSandwichCrispyBBQ.append(h5ComboSandwichCrispyBBQPrecio, h5ComboSandwichCrispyBBQ, parrafoComboSandwichCrispyBBQ, btnComboSandwichCrispyBBQ);
cardComboSandwichCrispyBBQ.append(imgComboSandwichCrispyBBQ, cardBodyComboSandwichCrispyBBQ);
colComboSandwichCrispyBBQ.appendChild(cardComboSandwichCrispyBBQ);

//Agregar las targetas del menu en la primera linea
rowMenu2.append(colComboKentuckySandwich, colComboKentuckyCoronelSandwich, colSandwichCrispyBBQ, colComboSandwichCrispyBBQ);

//Agregar todas las lineas del menú
containerMenu.append(rowMenu1, rowMenu2);

//Hacer el footer
let footer = document.createElement("footer");
footer.classList.add('mt-5', 'p-4', 'text-light', 'bg-danger');

//Hacer el contenedor para los elementos del footer
let contenedorFooter = document.createElement("div");
contenedorFooter.classList.add('container');
footer.appendChild(contenedorFooter);

//Hacer la fila para los elementos dentro del contenedor del footer
let rowFooter = document.createElement("div");
rowFooter.classList.add("row");
contenedorFooter.appendChild(rowFooter);

//Hacer la columna para los elementos dentro de la fila del footer
let colFooter = document.createElement("div");
colFooter.classList.add("col-md-12", "text-center");
rowFooter.appendChild(colFooter);

//Hacer los elementos para la columna
let h5Footer = document.createElement("h5");
h5Footer.innerHTML = "Hambre de promos - KFC";

let parrafoFooter = document.createElement("p");
parrafoFooter.classList.add('mb-0')
parrafoFooter.innerHTML = "Disfruta de nuestro delicioso pollo frito, popcorn, alitas picantes, sándwiches originales, postres, y más. Conoce aquí nuestro menú KFC."

//Agregar los elementos de la columna para el footer
colFooter.append(h5Footer, parrafoFooter);

//Agregar todos los elementos en el body
body.append(containerSelectores, containerMenu, footer);

/* ---------------------- Fin del DOM para los objetos -------------------------- */

//Logica para los temas
let themeSelector = document.getElementById("theme");

themeSelector.addEventListener("change", () => {
    if (themeSelector.value == "dark") {
        localStorage.setItem('Theme', themeSelector.value);
        body.className = "theme-dark";

    } else if (themeSelector.value == "white") {
        localStorage.setItem('Theme', themeSelector.value);
        body.className = "theme-white";

    } else if (themeSelector.value == "free") {
        localStorage.setItem('Theme', themeSelector.value);
        body.className = "theme-free";
    }
});


let theme = localStorage.getItem("Theme");

if (theme == "dark") {
    body.className = "theme-dark";

} else if (theme == "white") {
    body.className = "theme-white";

} else if (theme == "free") {
    body.className = "theme-free";
};