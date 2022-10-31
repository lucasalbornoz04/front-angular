import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  project: Projects = null;

  constructor(private projectsS: ProjectsService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.projectsS.details(id).subscribe(
      data =>{
        this.project = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['id']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.projectsS.update(id, this.project).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }
  
}