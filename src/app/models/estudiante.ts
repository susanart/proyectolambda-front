export class Estudiante {


    id: number;
    idMateria: number;
    nombre: string;
    notas: any[];




   

    constructor(id: number, idMateria: number, nombre:string, notas: any[]) {
        this.id = id;
        this.idMateria = idMateria;
        this.nombre = nombre;
        this.notas = notas;
    }

    
}