const URL = "http://localhost:3000/personas";

const cargarSpinner = () => {
    const divSpinner = document.querySelector(".spinner");
    
    if (!divSpinner.hasChildNodes()) {
        const spinner = document.createElement("img");
        spinner.setAttribute("src", "./Rocket.gif");
        spinner.setAttribute("alt", "icono spinner");
        
        divSpinner.appendChild(spinner);
    }
}

const eliminarSpinner = () => {
    const divSpinner = document.querySelector(".spinner");
    
    while (divSpinner.hasChildNodes()) {
        divSpinner.removeChild(divSpinner.firstChild);
    }
}

// Peticiones AJAX
const getPersonasAjax = (url) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {

                const data = JSON.parse(xhr.responseText);
                console.log(data);
            } else {
                console.error(xhr.status, xhr.statusText);
            }
            eliminarSpinner();
        } else {
            cargarSpinner();
        }
    });

    xhr.open("GET", url);
    xhr.send();
}

// Peticiones FETCH (no compatible con Node)
const getPersonasFetch = (url) => {

    cargarSpinner();

    fetch(url)
    .then(res => {
        if (res.ok) {
            return res.json();
        }
    })
    .then(res => console.log(res))
    .catch(err => {
        return Promise.reject(res);
    })
    .finally(() => eliminarSpinner());
}

const getPersonasAxios = (url) => {

    cargarSpinner();
    axios.get(url)
    .then(res => console.log(res.data))
    .catch(err => console.error(err.message))
    .finally(() => eliminarSpinner());
}

document.getElementById("btnGetPersonasAjax")
.addEventListener("click", () => {
    getPersonasAjax(URL);
});

document.getElementById("btnGetPersonasFetch")
.addEventListener("click", () => {
    getPersonasFetch(URL);
});

document.getElementById("btnGetPersonasAxios")
.addEventListener("click", () => {
    getPersonasAxios(URL);
});
