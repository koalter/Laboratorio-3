const $titulo = document.querySelector("h1");

console.log($titulo.dataset.description);
console.log($titulo.getAttribute("data-description"));

$titulo.dataset.description = 20;
$titulo.setAttribute("data-description", 30);

$miDiv = document.getElementById("miDiv");
$miParrafo = document.getElementById("p1");

$miParrafo.textContent = "Esto es un parrafo";

$miDiv.innerHTML = "<p>Esto es un parrafo como texto</p>";

// deprecado
$miDiv.innerText = `Esto es un template
string`;

const $figure = document.createElement("figure");
const $img = document.createElement("img");
$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "imagen de animal");

const $figcaption = document.createElement("figcaption");
const $texto = document.createTextNode("Animal");
$figcaption.appendChild($texto);

$figure.appendChild($img);
$figure.appendChild($figcaption);

$body = document.getElementsByTagName("body")[0];
$body.appendChild($figure);