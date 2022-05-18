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

console.log(unaMascota);