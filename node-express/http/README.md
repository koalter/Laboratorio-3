# Node-Express-RESTAPI

Generamos un proyecto de node:

`npm init -y`

Se genera un archivo *package.json* como el siguiente:

    {
        "name": "express",
        "version": "1.0.0",
        "description": "",
        "main": "index.js", // entry point
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": [],
        "author": "",
        "license": "ISC"
    }

Ejecutamos el programa con el comando:

`node index`

Instalamos *nodemon*

`npm i nodemon`

Al hacer esto notamos que se genera un archivo *package-lock.json*. Éste contiene todas las dependencias de las dependencias de nuestro proyecto.

*nodemon* es un paquete que reinicia el servidor cada vez que hacemos cambios.

Como es un paquete que solo interesa en tiempo de desarrollo, no lo queremos en nuestra lista principal de dependencias, sino que lo dejamos en la lista de dependencias de desarrollo.

Siguiendo esta lógica, ejecutamos los siguientes comandos para removerlo y reañadirlo a las dependencias de desarrollo.

    npm rm nodemon
    npm i nodemon --save-dev

Ahora podemos ejecutar nuestra aplicación bajo nodemon. Para facilitarnos, creamos un script de comandos.

`npm run dev`
