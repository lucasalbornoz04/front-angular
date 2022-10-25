import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {
  nombreEdu: string;
  fechaEdu: string;

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreEdu, this.fechaEdu);
    this.educacionS.save(educacion).subscribe(
      data=>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("fallo al agregar");
        this.router.navigate(['']);
      }
      )
  }

}
