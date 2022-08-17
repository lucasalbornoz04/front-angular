import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-abount-me',
  templateUrl: './abount-me.component.html',
  styleUrls: ['./abount-me.component.css']
})
export class AbountMeComponent implements OnInit {

  persona: Persona[] = [];

  constructor(private personaS: PersonaService) { }

  ngOnInit(): void {
  }

}
