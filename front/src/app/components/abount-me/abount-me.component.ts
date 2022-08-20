import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-abount-me',
  templateUrl: './abount-me.component.html',
  styleUrls: ['./abount-me.component.css']
})
export class AbountMeComponent implements OnInit {

  pers: Persona[] = [];

  constructor(private personaS: PersonaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(): void{
    this.personaS.lista().subscribe(data =>{this.pers = data;})
  }

}
