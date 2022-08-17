export class persona {
    id?: number;
    nombre: String;
    apellido: String;
    urlImg: String;
    descripcion: String;

    constructor(nombre: String, apellido: String, urlImg: String, descripcion: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.urlImg = urlImg;
        this.descripcion = descripcion;
    }
}