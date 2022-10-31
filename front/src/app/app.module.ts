import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AbountMeComponent } from './components/abount-me/abount-me.component';
import { EducationComponent } from './components/education/education.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { EditAbountMeComponent } from './components/abount-me/edit-abount-me.component';
import { NewAbountMeComponent } from './components/abount-me/new-abount-me.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { EditSkillComponent } from './components/skill/edit-skill.component';
import { NewSkillComponent } from './components/skill/new-skill.component';
import { NewProjectComponent } from './components/projects/new-project.component';
import { EditProjectComponent } from './components/projects/edit-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AbountMeComponent,
    EducationComponent,
    SkillComponent,
    ProjectsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    EditAbountMeComponent,
    NewAbountMeComponent,
    NewEducationComponent,
    EditEducationComponent,
    EditSkillComponent,
    NewSkillComponent,
    NewProjectComponent,
    EditProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
