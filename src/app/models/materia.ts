export class Materia {

    id: number;
    idMateria: number;
    nombre: string;
    notas: number;

   

    constructor(id: number, idMateria: number, nombre: string, notas: number) {
        this.id = id;
        this.idMateria = idMateria;
        this.nombre = nombre;
        this.notas = notas;
    }

    
}