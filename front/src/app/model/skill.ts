export class Skill {
    id: number;
    nombreSkill: string;
    urlSkill: string;
    
    constructor(nombreSkill: string, urlSkill: string){
        this.nombreSkill = nombreSkill;
        this.urlSkill = urlSkill;
    }
}
