class Persona {
    constructor (nombre,apellido) {
        this._nombre = nombre;
        this._apellido = apellido; 
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre; 
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido; 
    }

}

let persona1 = new Persona('Jesús','Guerra');
persona1.nombre = 'Jesús David';//set nombre('Jesús David)

console.log(persona1);
console.log(persona1.nombre); //get nombre


let persona2 = new Persona('Ariana Valentina', 'Villegas');
console.log(persona2.nombre);
persona2.nombre = 'Valita';

console.log(persona2);

//Creamos una clase hija que herede elementos de la clase Padre 
class Empleado extends Persona {
    constructor(nombre,apellido,departamento) { 
        super(nombre,apellido); //Llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        this._departamento = departamento;
    }
}

let personaEmpleada = new Empleado('Jesús','Guerra','IT');
console.log(personaEmpleada);

console.log(personaEmpleada.nombre);
personaEmpleada.departamento = 'Team Leader';
console.log(personaEmpleada);

personaEmpleada.nombre = 'Jesús David';
console.log(personaEmpleada);