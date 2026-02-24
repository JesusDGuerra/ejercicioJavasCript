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
    //Sobreescribimos toString() para que se pueda ver la información
    toString() {
        return this.nombreCompleto();
    }
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

let personaEmpleada = new Empleado('Jesús','Guerra','IT');
console.log(personaEmpleada);
personaEmpleada.nombre='Jesús David';
personaEmpleada._departamento = 'Team Leader';

//Clase object, funcion toString
console.log(personaEmpleada); //Esto no lo muestra en pantalla en una página web
//Pero lo siguiente sí
console.log(personaEmpleada.toString()); //En este caso se ve algo como [object, object al no estar sobreescrito]

//Para que se pueda ver, vamos a sobreescribir la clase toString de la clase padre (persona como hicimos con nombreCompleto)
console.log(personaEmpleada.toString());

//POLIMORFISMO 
/* Es la capacidad de que diferentes objetos respondan al mismo método de formas istintas. Viene del griego Poly (muchos) y morphos (formas)
- En JS se ve como sobrescritura de métodos(overrriding): Una subclase redefine un método de su clase padraa. 
- Sibrecarga simulada (overloading): Ua función se comporta distinto según el número o tipo de argumentos (aunque JS no soporta sobrecarga forma como Java o C#)
*/

//EJEMPLO con el método nombreCompleto
console.log(persona1.nombreCompleto()); //Caso del objeto padre
console.log(personaEmpleada.nombreCompleto()); //En este caso de objeto hijo inclyue el departamento

