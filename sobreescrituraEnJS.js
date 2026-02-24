//Clases 
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

    nombreCompleto() {
        return `${this._nombre} ${this._apellido}`;
    };
};


let persona1 = new Persona('Jesús','Guerra');
persona1.nombre = 'Jesús David';//set nombre('Jesús David)

let persona2 = new Persona('Ariana Valentina', 'Villegas');
console.log(persona2.nombre);


//Por el momento la función nombreCompleto se limita al nombre y apellido del objeto pero no incluye el departamento en ese caso.
//Imprimiremos todo incluyendo el departamento usando el concepto de sobreescritura.

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

    //Sobreescritura
    nombreCompleto() {
        return super.nombreCompleto() + `, ${this._departamento}`;
    //    return `${this._nombre} ${this._apellido}, ${this._departamento}`;
    }
}

let ariEmpleada = new Empleado('Ariana', 'Riofrio','Médico Cirujano');
console.log(ariEmpleada.nombreCompleto());

let personaEmpleada = new Empleado('Jesús','Guerra','IT');
console.log(personaEmpleada);



console.log(personaEmpleada.nombreCompleto());
console.log(personaEmpleada.nombre);
personaEmpleada.departamento = 'Team Leader';
console.log(personaEmpleada);


personaEmpleada.nombre = 'Jesús David';
console.log(personaEmpleada);
console.log(personaEmpleada.nombreCompleto()); //Hereda la función y la sobreescribe incluyendo el departamento
