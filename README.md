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

#### Lectura Cliente-Servidor  
Al peticionar las páginas web de internet, en principio nos trae el documento HTML y luego los recursos adicionales que requiere este archivo, que pueden ser el CSS, los scripts y otros assets

### AJAX  
JavaScript es un lenguaje Asincronico (no bloqueante) y con Concurrencia
C# es Sincronico (bloqueante) e implementa Paralelismo (con hilos)