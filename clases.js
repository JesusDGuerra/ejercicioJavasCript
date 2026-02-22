/*  
Las clases son uno de los conceptos más importantes de la Programación Orientada a Objetos (POO).

Para entenderlas fácil, olvida el código un segundo e imagina que eres un arquitecto. Una clase no es la casa, es el plano de la casa. El plano dice cuántas ventanas tiene y de qué color es, pero nadie puede vivir dentro de un plano. Para vivir en ella, tienes que construirla (crear un objeto).
*/

//Entonces: 
/* Una clase es una "plantilla" que usamos para crear muchos objetos que comparten las mismas características y funciones, sin tener que escribir el código ua y otra vez.  

Los 3 elementos clave: 
 - Propedades: Son las características
 - Constructor: Es la función especial que se ejecuta justo cuando "nace" el objeto para darle sus valores iniciales
 - Métodos: Son las acciones que el objeto puede hacer (correr, saltar, calcular)
 */

 class Persona {
    constructor(nombre,apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.caminando = false;
    }

    caminar() {
        this.caminando = true;
        return `${this.nombre} ${this.apellido} está caminando `
    } 
 };
 Persona.prototype.raza = 'Humano';
 class Auto {
    constructor(marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo; 
        this.color = color; 
        this.encendido = false; //Todos los coches empiezan apagados

    }
    //Este es un método, una acción
    encender() {
        this.encendido = true;
        return `El ${this.marca} ${this.modelo} está encendido`
    }
 };

 const miCoche = new Auto('Toyota','Terreneitor', 'Negro')
 console.log(miCoche.color)
 console.log(miCoche.encender());


const persona1 = new Persona('Jesús', 'Guerra');
console.log(persona1);
console.log(persona1.caminar());
console.log(persona1.caminando);

const mustang = new Auto('Toyota','Corolla','Plomo');

mustang.encender();
console.log(mustang);


class Perro {
    constructor(nombre,raza,edad) {
        this.nombre = nombre
        this.raza = raza;
        this.edad = edad;
        this.caminar = false;
    };

    ladrar() {
        return `El ${this.raza} está ladrando!!!`
    };

    caminar() {
        this.caminar = true;
        return `El ${this.nombre} está caminando`
    }
};


const sam = new Perro('Sam','Golden Reetiever',4);
console.log(sam);

console.log(sam.ladrar());

console.log(sam.ladrar.call(persona1));

