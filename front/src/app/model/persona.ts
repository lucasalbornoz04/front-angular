export class Persona {
    id?:number;
    nombre: string;
    apellido: string;
    titulo: string;
    urlImg: string;
    descripcion: string;

    constructor(nombre: string, apellido: string, titulo: string, urlImg: string, descripcion: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.urlImg = urlImg;
        this.descripcion = descripcion;
    }
}
