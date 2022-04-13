const btn = document.getElementById("btn_Saludar");

// 'e' representa al evento en cuestion
btn.addEventListener("click", (e) => {
    console.log(window); // muestra por consola toda la informacion del parámetro e
    alert("hola");
});

const form = document.getElementById("form");
form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Se canceló la propagación del evento!");
});