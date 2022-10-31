import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAbountMeComponent } from './components/abount-me/edit-abount-me.component';
import { NewAbountMeComponent } from './components/abount-me/new-abount-me.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProjectComponent } from './components/projects/edit-project.component';
import { NewProjectComponent } from './components/projects/new-project.component';
import { EditSkillComponent } from './components/skill/edit-skill.component';
import { NewSkillComponent } from './components/skill/new-skill.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createPersona', component: NewAbountMeComponent},
  {path: 'editPersona/:id', component: EditAbountMeComponent},
  {path: 'nuevaEdu', component: NewEducationComponent},
  {path: 'editEdu/:id', component: EditEducationComponent},
  {path: 'nuevaSkill', component: NewSkillComponent},
  {path: 'editSkill/:id', component: EditSkillComponent},
  {path: 'nuevoProjecto', component: NewProjectComponent},
  {path: 'editarProjecto/:id', component: EditProjectComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
