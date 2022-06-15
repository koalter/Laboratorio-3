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

const getPersonaAjax = (url, id) => {
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

    xhr.open("GET", `${url}?id=${id}`);
    // xhr.open("GET", `${url}/${id}`);
    xhr.send();
}

const getPersonasAjaxPromise = (url) => {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
    
        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
    
                    const data = JSON.parse(xhr.responseText);
                    resolve(data);
                } else {
                    reject({ status: xhr.status, statusText: xhr.statusText });
                }
            }
        });
    
        xhr.open("GET", url);
        xhr.send();
    });
}

const PostPersonaAjax = (url) => {
    const newPersona = {
        nombre: "Josefina",
        edad: 46,
        genero: "F"
    };

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

    xhr.open("POST", url);

    // seteo HEADERS siguiendo el estándar de los tipos MIME
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(JSON.stringify(newPersona));
}

const getPersonasAjaxPromiseAsyncHandler = async () => {
    
    try {
        cargarSpinner();
        const res = await getPersonasAjaxPromise(URL);
        console.log(res);
    } catch (error) {
        console.error(error);
    } finally {
        eliminarSpinner();
    }
}

// Peticiones FETCH (no compatible con Node)
const getPersonasFetch = (url) => {

    cargarSpinner();

    fetch(url)
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(res);
        }
    })
    .then(res => console.log(res))
    .catch(err => console.error(err))
    .finally(() => eliminarSpinner());
}

const getPersonasFetchAsync = async (url) => {

    try {
        cargarSpinner();
        const res = await fetch(url);
        
        if (!res.ok) {
            throw Promise.reject(res);
        }

        const data = await res.json();
        console.log(data); // >> Array(30) [...]
        
    } catch (error) {
        console.error(error.status, error.statusText);
    } finally {
        eliminarSpinner();
    }
}

const PostPersonaFetch = (url) => {
    const newPersona = {
        nombre: "Matias",
        edad: 28,
        genero: "M"
    };

    const request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPersona)
    }

    cargarSpinner();

    fetch(url, request)
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(res);
        }
    })
    .then(res => console.log(res))
    .catch(err => console.error(err))
    .finally(() => eliminarSpinner());
}

// Peticion por Axios
const getPersonasAxios = (url) => {

    cargarSpinner();
    axios.get(url)
    .then(res => console.log(res.data))
    .catch(err => console.error(err.message))
    .finally(() => eliminarSpinner());
}

const getPersonasAxiosAsync = async (url) => {
    
    try {
        cargarSpinner();
        const res = await axios.get(url);
        
        console.log(res.data);
    } catch (error) {
        console.error(err.status, err.statusText);
    } finally {
        eliminarSpinner();
    }
}

const PostPersonasAxios = (url) => {
    const newPersona = {
        nombre: "Matias",
        edad: 28,
        genero: "M"
    };

    const request = {
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(newPersona)
    }

    cargarSpinner();
    axios.post(url, request)
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

document.getElementById("btnGetPersonaAjax")
.addEventListener("click", () => {
    getPersonaAjax(URL, 5);
});

document.getElementById("btnGetPersonasFetch")
.addEventListener("click", () => {
    getPersonaFetch(URL);
});

document.getElementById("btnGetPersonaAxios")
.addEventListener("click", () => {
    getPersonaAxios(URL);
});

document.getElementById("btnGetPersonasFetchAsync")
.addEventListener("click", () => {
    getPersonasFetchAsync(URL);
});

document.getElementById("btnGetPersonasAxiosAsync")
.addEventListener("click", () => {
    getPersonasAxiosAsync(URL);
});

document.getElementById("btnGetPersonasAjaxPromise")
.addEventListener("click", () => {
    cargarSpinner();
    getPersonasAjaxPromise(URL)
    .then(res => console.log(res))
    .catch(err => console.error(err))
    .finally(() => eliminarSpinner());
});

document.getElementById("btnGetPersonasAjaxPromiseAsync")
.addEventListener("click", () => {
    getPersonasAjaxPromiseAsyncHandler();
});

document.getElementById("btnGetPersonasAjaxPost")
.addEventListener("click", () => {
    PostPersonaAjax(URL);
});

document.getElementById("btnGetPersonasFetchPost")
.addEventListener("click", () => {
    PostPersonaFetch(URL);
});

document.getElementById("btnGetPersonasAxiosPost")
.addEventListener("click", () => {
    PostPersonaAxios(URL);
});
