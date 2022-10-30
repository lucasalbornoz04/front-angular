import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-abount-me',
  templateUrl: './edit-abount-me.component.html',
  styleUrls: ['./edit-abount-me.component.css']
})
export class EditAbountMeComponent implements OnInit {
  pers: Persona = null;
  constructor(private personaS: PersonaService, private activatedRouter: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.details(id).subscribe(
      data =>{
        this.pers = data;
      }, err => {
        alert ('Error al editar el perfil')
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.update(id, this.pers).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert ("Error al editar perfil");
        this.router.navigate(['']);
      }
    )

  }
  

}
