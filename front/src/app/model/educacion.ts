export class Educacion {
    id?: number;
    nombreEdu: string;
    fechaEdu: string;
    logoEdu: string;

    constructor(nombreEdu: string, fechaEdu: string, logoEdu: string){
        this.nombreEdu = nombreEdu;
        this.fechaEdu = fechaEdu;
        this.logoEdu = logoEdu;
    }
}