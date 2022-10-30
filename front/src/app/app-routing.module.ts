import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAbountMeComponent } from './components/abount-me/edit-abount-me.component';
import { NewAbountMeComponent } from './components/abount-me/new-abount-me.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createPersona', component: NewAbountMeComponent},
  {path: 'editPersona/:id', component: EditAbountMeComponent},
  {path: 'nuevaEdu', component: NewEducationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
