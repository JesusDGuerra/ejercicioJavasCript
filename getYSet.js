class Persona {
    constructor(nombre,apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
}

const persona1 = new Persona('Jesús','Guerra')
console.log(persona1);

console.log(persona1.nombre); //get nombre


persona1.nombre = 'Jesús David'; //set nombre 'Jesús david'
console.log(persona1);

//Las clases no tiene Hoisting, es decir, se pueden usar a partir de la generación de la clase, no antes. A diferencia de las funciones 
