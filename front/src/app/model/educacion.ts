export class Educacion {
    id?: number;
    nombreEdu: string;
    fechaEdu: string;

    constructor(nombreEdu: string, fechaEdu: string){
        this.nombreEdu = nombreEdu;
        this.fechaEdu = fechaEdu;
    }
}