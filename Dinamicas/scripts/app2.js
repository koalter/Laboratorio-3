import { empleados } from "../data/datos.js";
import crearTabla from "./tablaDinamica.js";
import Empleado from "./empleado.js";

console.log(empleados);

const localEmpleados = JSON.parse(localStorage.getItem("Empleados")) || empleados.concat();

const $frmEmpleado = document.forms[0];

$frmEmpleado.addEventListener("submit", e => {
    const frm = e.target;
    e.preventDefault();

    console.log(frm.nombre.value);

    const nuevoEmpleado = new Empleado(
        Date.now(), 
        frm.nombre.value, 
        parseInt(frm.edad.value), 
        frm.edad.value, 
        frm.sexo.value
    );
    
    localEmpleados.push(nuevoEmpleado);

    localStorage.setItem("empleados", JSON.stringify(localEmpleados));

    actualizarTabla(empleados);
});

function actualizarTabla(lista) {
    
}

window.addEventListener("click", e => {
    if (e.target.matches("tr td")) {
        console.log(e.target.parentElement.dataset.id);
    }
});

document.querySelector(".table-container").appendChild(crearTabla(localEmpleados));
