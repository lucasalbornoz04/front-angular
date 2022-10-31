import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  educacion: Educacion = null;

  constructor(private educacionS: EducacionService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.details(id).subscribe(
      data =>{
        this.educacion = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['id']);
      }
    )
  }
  
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.edit(id, this.educacion).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }

}
