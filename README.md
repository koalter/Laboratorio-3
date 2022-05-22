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

https://www.mockaroo.com/

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
            <input type="radio" value="m" name="genero" />
        </label>
        <label>
            Femenino
            <input type="radio" value="f" name="genero" />
        </label>
    </fieldset>


#### Lectura Cliente-Servidor  
Al peticionar las páginas web de internet, en principio nos trae el documento HTML y luego los recursos adicionales que requiere este archivo, que pueden ser el CSS, los scripts y otros assets

### AJAX  
JavaScript es un lenguaje Asincronico (no bloqueante) y con Concurrencia
C# es Sincronico (bloqueante) e implementa Paralelismo (con hilos)

### Javascript

Uso de la palabra clave `defer` dentro del tag `script` para que cargue el código de JS luego de renderizar el html.

#### Arrays

En JavaScript podemos crear un array de dos formas: la primera es asignandole los corchetes por defecto `[]`, y la segunda es creando un objeto `Array`. Ambas maneras son equivalentes.

    // Usando corchetes
    const vector1 = [];
    // Creando un objeto Array
    const vector2 = new Array();

#### Tupla

Una tupla es un arreglo que contiene variables con distinto tipo de dato. En Typescript vamos a poder encontrarlo como un tipo de dato `Tuple`. Podemos pensarlo como una fila de una base de datos.

    const tupla = new Array(1, "Miguel", true);
    const tupla2

#### Arrays - concat()

Para crear un arreglo en base a otro debemos valernos de métodos adicionales, ya que si intentamos pasarle el arreglo a otra variable de manera directa, lo que terminaríamos haciendo es pasarle la referencia de este arreglo.

Esto se soluciona con el método de instancia concat().

    const vector = new Array(4, 5, 6);
    const vector2 = vector; // Haciendo esto, vector2 guarda una referencia a vector.
    const vector3 = vector.concat() // De esta manera, vector3 es un nuevo array que copia los valores de vector.

#### Arrays - Spread operator

Una particularidad nueva que surgió con ES6 es lo que se llama operador **Spread**. que deconstruye un objeto u array en sus propiedades o elementos. Se lo invoca precediendo una variable con tres puntos. Esto también nos puede permitir copiar un array a una nueva variable.

    const vector = ["Juan", "Pepe", "Ricardo"];
    const vec1 = [...vector]; // El contenido de vector se copia en vec1
    const vec2 = [vector] // Si hicieramos esto, terminariamos creando un array de arrays

#### Arrays - shift()

El método `shift()` toma el **primer** elemento de un array y lo remueve del mismo.

    const vec = [8, 13, 21, 35];
    const removido = vec.shift();
    console.log(removido); // 8
    console.log(vec) // [13, 21, 35]

#### Arrays - unshift()

El método `unshift()` agrega el elemento que se le pase por parámetro al inicio del arreglo correspondiente.

    const vector = new Array("Juan", "Pepe", "Carlos");
    vector.unshift("Angela"); // Agregamos a Angela al principio del array
    console.log(vector); // ["Angela", "Juan", "Pepe", "Carlos"]

#### Arrays - pop()

El método `pop()` toma el **último** elemento de un array y lo remueve del mismo.

    const vec = [8, 13, 21, 35];
    const removido = vec.pop();
    console.log(removido); // 35
    console.log(vec) // [8, 13, 21]

#### Arrays - push()

El método `push()` agrega el elemento que se le pase por parámetro al final del arreglo correspondiente.

    const vector = new Array("Juan", "Pepe", "Carlos");
    vector.push("Angela"); // Agregamos a Angela al principio del array
    console.log(vector); // ["Angela", "Juan", "Pepe", "Carlos"]

#### Arrays - splice()

#### Arrays - slice()

#### Arrays - reverse()

#### Arrays - sort()

Es la función que ordena los elementos de un array. Por defecto los ordena de menor a mayor, aunque se le puede pasar por parámetro una función *callback*.

    const vector = [2, 4, 1, 8, 6];
    vector.sort();
    console.log(vector) // [1, 2, 4, 6, 8]

    const vector1 = [5, 1, 2, 13, 3, 8];
    vector1.sort((a, b) => {
        return a - b; // ordeno de menor a mayor
        // return b - a // ordeno de mayor a menor
    });
    console.log(vector1); // [1, 2, 3, 5, 8, 13];

#### Arrays - for of

Es la forma que tenemos en Javascript para recorrer los elementos de un array (similar al foreach de C#)

    const vec = ["Juan", 2, false];
    for (const elemento of vec) {
        console.log(elemento);
        // Imprime "Juan", 2 y false respectivamente
    };

#### Arrays - forEach()

Es una función de instancia que permite recorrer un array y hacer una acción tomando el elemento como parámetro. También tiene un segundo y tercer parámetro que corresponden al *índice* y al *array* mismo.

    const nombres = ["Juan", "Miguel", "Carlos", "Eugenia", "Ezequiel"];
    nombres.forEach((elemento) => {
        console.log(elemento); // Nombra por consola cada nombre contenido en el array
    });

#### Arrays - map()

El método `map()` toma un *callback* y devuelve un array nuevo de la manera que lo maneje la función que se le pasa por parámetro.

    const nombres = ["Juan", "Miguel", "Carlos", "Eugenia", "Ezequiel"];
    const cantidades = nombres.map(nombre => {
        return nombre.length;
    }); // cantidades contiene el .length de los elementos de nombres

    console.log(cantidades) // [4, 6, 6, 7, 8];

    // Otro ejemplo del map con objetos
    const vista = empleados.map(empleado => {
        return { nombre: empleado.nombre, sueldo: empleado.sueldo };
    });

#### Arrays - filter()

El método `filter()` devuelve un nuevo array con los mismos elementos del array original que cumplan con el criterio del *callback*, que devuelve `true` o `false`.

    const empleados = [
        { nombre: "Juan", sexo: "m" },
        { nombre: "Miguel", sexo: "m" },
        { nombre: "Daniela", sexo: "f" }
    ];
    const varones = empleados.filter(empleado => {
        return empleado.sexo === 'm';
    });

#### Arrays - reduce()

El método `reduce()` recibe dos parámetros: el primero es un *callback* y el segundo un *valor inicial*. Por cada iteración de la función va a tomar dos los primeros parámetros de la función *callback*, que serán el elemento anterior y el actual.

    const numeros = [3, 2, 5, 6, 7];
    let total = numeros.reduce((previo, actual) => previo + actual);
    // por cada iteración, se va a hacer una suma de cada uno de los elementos

#### Arrays - every()

Con este método podemos recorrer un array y evaluar una condición. Devuelve si **todos** los elementos cumplen con esa condición.

    const numeros = [3, 2, 5, 6, 7];
    let resultado = numeros.every(n => n < 6);
    console.log(resultado); // Output: false

#### Arrays - some()

Con este método podemos recorrer un array y evaluar una condición. Devuelve `true` si alguno de los elementos cumple con la condición, `false` si ninguno lo cumple.

    const numeros = [3, 2, 5, 6, 7];
    let resultado = numeros.some(n => n > 6);
    console.log(resultado); // Output: true

### Set

Un **Set** en Javascript es un objeto iterable (como un array) que no admite elementos repetidos. Se lo puede inicializar como un objeto cualquiera, pasandole por parámetro un array.

    const vec = new Array(1, 2, 3, 1, 13, 21, 13);
    const set = new Set(vec); // el set va a omitir el 1 y el 13 duplicados

    // luego podemos extraer un array a partir de este Set
    const vec1 = [...set];
    console.log(vec1) // [1, 2, 3, 13, 21];

### POO

Un objeto por defecto se puede crear utilizando el constructor de `Object` o inicializarlo con llaves vacias `{}`

    const obj = new Object();
    const obj2 = {};
    // Ambas modalidades son equivalentes;

Una forma de copiar un objeto a otra variable es usando el método `assign()`:

    const obj = {
        nombre: "Miguel",
        edad: 18,
        sexo: "m"
    };
    const obj2 = {};

    const obj3 = Object.assign(obj2, obj);

`assign()` toma como primer parámetro el objeto destino, y como segundo parámetro el objeto a copiar. Esto asimismo devuelve el objeto resultado, que es la misma referencia que el primer parámetro.

Esto lo podemos comprobar haciendo una igualación

`console.log(obj == obj2)` => `false`;  
`console.log(obj2 == obj3)` => `true`;

#### POO - for in

Similar al *for of*, con **for in** podemos recorrer los índices/propiedades del objeto

    const persona = {
        nombre: "Ana",
        edad: 18,
        sexo: "f"
    };
    for (const key in persona) {
        console.log(persona[key]); // Output: el valor que contiene el índice 'key'
    }

#### POO - función constructora

JavaScript tiene una forma particular de crear nuevas clases sin definirlas explícitamente, al generar una función que sirva como constructora de dicha clase.

La función en sí consiste en nombrarla como será el nombre de la clase, agregarle tantos parámetros como se deseen y asignando valores a un objeto interno this

Ejemplo:

    function Animal(tipo, edad, sexo, hambre) {
        this.tipo = tipo;
        this.edad = edad;
        this.sexo = sexo;
        this.hambre = hambre;
    }

    const unAnimal = new Animal('perro', 2, 'm', false);

    console.log(unAnimal); // Output: Animal { tipo: 'perro', edad: 2, sexo: 'm', hambre: false }

#### POO - call()

`call()` es un método de Object para llamar a una función interna de un objeto como si fuera otro.

Dicho de otra forma, es la forma que tiene un objeto cualquiera de implementar sobre la marcha un método de otra entidad.

    function Animal(tipo, edad, sexo, hambre) {
        this.tipo = tipo;
        this.edad = edad;
        this.sexo = sexo;
        this.hambre = hambre;
        this.saludar = function() {
            console.log('Hola soy ' + this.tipo);
        }
    }

    const unAnimal = new Animal('perro', 2, 'm', false);

    const unaMascota = {
        tipo: 'gato',
        edad: 4
    };

    unAnimal.saludar(); // Output: Hola soy perro
    unAnimal.saludar.call(unaMascota); // Output: Hola soy gato


#### POO - apply()

#### POO - bind()

#### POO - getPrototypeOf()

#### POO - Clases

JavaScript igualmente implementa el sistema de Clases como en Java y C#, permitiendo estructurar de mejor manera nuestras entidades.

    class Animal {
        #hambre; // El uso del caracter numeral indica que es privado.

        constructor(tipo, edad, sexo = 'i', hambre = false) {
            this._sexo = sexo;
            this.tipo = tipo;
            this.edad = edad;
            this.#hambre = hambre;
        }

        get Hambre() {
            return this.#hambre;
        }

        set Hambre(value) {
            if (value === true || value === false) {
                this.#hambre = value;
            }
        }
    }

    const unAnimal = new Animal('gato', 4);

    unAnimal.#hambre = 1; // Esta linea va a dar error porque JS lo interpreta como un atributo privado.

    console.log(unAnimal.Hambre); // Output: false
    unAnimal.Hambre = true;
    console.log(unAnimal.Hambre); // Output: true

#### POO - Herencia 

JavaScript aplica el principio de Herencia de una manera similar a como lo hace Java.

    class Animal {
        constructor(tipo, edad, sexo = 'i', hambre = false) {
            this.tipo = tipo;
            this.edad = edad;
            this.sexo = sexo;
            this.hambre = hambre;
        }
    }

    class Mascota extends Animal {
        constructor(nombre, tipo, edad, sexo = 'i', hambre = false) {
            super(tipo, edad, sexo, hambre);
            this.nombre = nombre;
        }
    }

    const unaMascota = new Mascota('Felix', 'gato', 3, 'f', false);

    console.log(unaMascota); // Output: Mascota { tipo: 'gato', edad: 3, sexo: 'f', hambre: false, nombre: 'Felix' }

### Desestructuración de objetos y arreglos

### Módulos

A partir de ES5 es posible incluir archivos JS en otros. Para realizar esto el archivo HTML iniciador debe llamar un script como lo hacemos siempre y agregar la propiedad type="module".

Una vez hecho esto, podemos empezar a importar y exportar contenido de otros archivos JavaScript.

*index.html*
```
<head>
    <script src="./Mascota.js" type="module"></script>
</head>
```

*Animal.js*
```
// Se puede declarar la exportación a la hora de definir el dato...
export default class Animal {
    constructor(tipo, edad, sexo = 'i', hambre = false) {
        this.tipo = tipo;
        this.edad = edad;
        this.sexo = sexo;
        this.hambre = hambre;
    }
}
```

*Mascota.js*
```
import Animal from './Animal.js';

class Mascota extends Animal {
    constructor(nombre, tipo, edad, sexo = 'i', hambre = false) {
        super(tipo, edad, sexo, hambre);
        this.nombre = nombre;
    }
}

export default Mascota; // ...o al final del documento
```

### DOM