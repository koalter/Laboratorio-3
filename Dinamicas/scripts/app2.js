import { empleados } from "../data/datos.js";
import crearTabla from "./tablaDinamica.js";
import Empleado from "./empleado.js";

console.log(localStorage);

const localEmpleados = JSON.parse(localStorage.getItem("Empleados")) || empleados.concat();
console.log(localEmpleados);
const $frmEmpleado = document.forms[0];

$frmEmpleado.addEventListener("submit", e => {
    const frm = e.target;
    e.preventDefault();

    console.log(frm.nombre.value);

    const nuevoEmpleado = new Empleado(
        Date.now(), 
        frm.nombre.value, 
        parseInt(frm.edad.value), 
        frm.email.value, 
        frm.genero.value
    );
    
    localEmpleados.push(nuevoEmpleado);

    localStorage.setItem("Empleados", JSON.stringify(localEmpleados));

    actualizarTabla(localEmpleados);
});

function actualizarTabla(lista) {
    $tableContainer.childNodes[0].remove();
    $tableContainer.appendChild(crearTabla(lista));
}

window.addEventListener("click", e => {
    if (e.target.matches("tr td")) {
        console.log(e.target.parentElement.dataset.id);
    }
});

const $tableContainer = document.querySelector(".table-container");
$tableContainer.appendChild(crearTabla(localEmpleados));
