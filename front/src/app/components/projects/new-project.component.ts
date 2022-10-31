import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  nombrePro: string;
  imgPro: string;
  urlPro: string;

  constructor(private projectsS: ProjectsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const project = new Projects(this.nombrePro, this.imgPro, this.urlPro);
    this.projectsS.save(project).subscribe(
      data=>{
        alert("Projecto añadido correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("fallo al agregar projecto");
        this.router.navigate(['']);
      }
      )
  }
}
