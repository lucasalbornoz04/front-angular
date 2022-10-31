export class Projects {
    id: number;
    nombrePro: string;
    imgPro: string;
    urlPro: string;

    constructor(nombrePro: string, imgPro: string, urlPro: string){
        this.nombrePro = nombrePro;
        this.imgPro = imgPro;
        this.urlPro = urlPro;
    }
}
