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
  constructor(private personaS: PersonaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  

}
