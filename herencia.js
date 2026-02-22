//La herencia permite que una clase (hija o subclase) reutilice propiedades y metodos de otra clase (padre o superclase). Esto evita duplicar código y facilita la extención de funcionalidades.

/* En JavaScript moderno, la herencia se implemente con la palabra clave extends y el uso de super() para llamar al constructor de la clase padre
Detrás de escena, JavaScript sigue siendo un lenguaje basado en prototipos, pero la sintaxis de clases lo hace más legible y cercano a otros lenguajes orientados a objetos
*/

//EJEMPLO

//Clase padre
class Persona {
    constructor(nombre,apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    saludar() {
        return `Hola, soy ${this.nombre} ${this.apellido}`;
    }
};

//Clase hija que hereda persona
class Estudiante extends Persona {
    constructor(nombre,apellido,carrera) {
        super(nombre,apellido);
        this.carrera = carrera;
    }
    estudiar() { 
        return `${this.nombre} está estudiando ${this.carrera}`;
    }
};

const persona1 = new Persona('Ari', 'Villegas');
console.log(persona1);

console.log(persona1.saludar());

const jesus = new Estudiante('Jesús','Guerra','Ingeniería Informática')
console.log(jesus.saludar())
console.log(jesus.estudiar());
