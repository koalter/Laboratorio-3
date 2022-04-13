# Laboratorio de Computación III  
Este repositorio contiene apuntes de HTML/CSS/JS y ejercicios realizados en la cursada de Laboratorio 3 de la UTN-FRA

## Temas a ver en la cursada  
* HTML/CSS
* Javascript
* AJAX
* JSON
* Bootstrap
* TypeScript

## Recursos  
https://docs.emmet.io/cheat-sheet/

https://developer.mozilla.org/

## Microdatos

Ver https://www.schema.org/

---

### HTML/CSS  
Etiquetas semánticas:  
Son las etiquetas que tienen un significado

Diferencia entre `<b>` y `<strong>` (así como `<i>` y `<em>`):  
`<b>` solamente marca el texto dentro de la etiqueta en negrita
`<strong>` Es una etiqueta semántica. Hace énfasis en el texto que contiene, tanto visualmente como para los índices de búsqueda

Es posible utilizar etiquetas con cualquier nombre, por ejemplo `<pepe></pepe>`  
Son completamente válidos para el intérprete de HTML, pero en cuestión de SEO nos perjudica utilizar etiquetas que no cumplen con los estándares.

Estructura `<table>`

    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Mario</td>
                <td>Torres</td>
                <td>18</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Ana</td>
                <td>López</td>
                <td>20</td>
            </tr>
            <tr>
                <td>3</td>
                <td>María</td>
                <td>González</td>
                <td>25</td>
            </tr>
        </tbody>
    </table>

Output:
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Mario</td>
                <td>Torres</td>
                <td>18</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Ana</td>
                <td>López</td>
                <td>20</td>
            </tr>
            <tr>
                <td>3</td>
                <td>María</td>
                <td>González</td>
                <td>25</td>
            </tr>
        </tbody>
    </table>

#### Form - Input

`input` es una etiqueta autoconclusiva para crear campos de entrada de datos. Su tipo de campo se determina por la propiedad `type`, cuyo valor predeterminado es `text`.

    <input type="text" />

Para acompañar esta etiqueta, tenemos otra llamada `label` que nos permite darle un identificador a un campo. Para setear esta funcionalidad, agregamos a la etiqueta `label` la propiedad `for` con el valor del `id` del `input`.

    <form action="">
        <label for="txtNombre">Nombre:</label>
        <input id="txtNombre" type="text" />
    </form>

Para enviar datos de un formulario podemos hacerlo de dos maneras:  
Una es usando la etiqueta `input` de tipo `submit`, y la otra es usando la etiqueta `button` dentro del formulario.

    <form action="resultado.html">
        <label for="txtNombre">Nombre:</label>
        <input id="txtNombre" type="text" />

        <!-- Con input:submit -->
        <input type="submit" value="Enviar">

        <!-- Con button -->
        <button>Enviar</button>
    </form>

Para evitar que el botón envíe/ejecute el formulario, podemos agregar un manejador del lado de Javascript:

    // forms es una variable que contiene la informacion de un formulario en HTML
    forms.addEventListener("submit", e => {
        e.preventDefault();
    })

`preventDefault()` es un metodo que evita que un evento se propague.

Entre los distintos tipo de `input` tenemos los de `radio`, que sirve para marcar opciones mutuamente excluyentes.

Para asociar las distintas opciones, compartimos para distintos *radio-buttons* la propiedad `name`

    <fieldset>
        <legend>Genero</legend>
        <label>
            Masculino
            <input type="radio" value="m" />
        </label>
        <label>
            Femenino
            <input type="radio" value="f" />
        </label>
    </fieldset>

Output:  
    <fieldset>
        <legend>Genero</legend>
        <label>
            Masculino
            <input type="radio" value="m" />
        </label>
        <label>
            Femenino
            <input type="radio" value="f" />
        </label>
    </fieldset>


#### Lectura Cliente-Servidor  
Al peticionar las páginas web de internet, en principio nos trae el documento HTML y luego los recursos adicionales que requiere este archivo, que pueden ser el CSS, los scripts y otros assets

### AJAX  
JavaScript es un lenguaje Asincronico (no bloqueante) y con Concurrencia
C# es Sincronico (bloqueante) e implementa Paralelismo (con hilos)

### Javascript

Uso de la palabra clave `defer` dentro del tag `script` para que cargue el código de JS luego de renderizar el html.