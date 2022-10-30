import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-new-abount-me',
  templateUrl: './new-abount-me.component.html',
  styleUrls: ['./new-abount-me.component.css']
})
export class NewAbountMeComponent implements OnInit {
  nombre: string ='';
  apellido: string ='';
  titulo: string ='';
  descripcion: string ='';
  urlImg: string ='';

  constructor(private personaS: PersonaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const per = new Persona(this.nombre, this.apellido, this.titulo, this.descripcion, this.urlImg);
    this.personaS.save(per).subscribe(
      data=>{
        alert("Persona agregada");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
      )
  }
}
