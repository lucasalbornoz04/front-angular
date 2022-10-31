import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../model/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  URL= 'http://localhost:8080/projecto/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Projects[]>{
    return this.httpClient.get<Projects[]>(this.URL + 'lista');
  }

  public details(id: number): Observable<Projects>{
    return this.httpClient.get<Projects>(this.URL + `lista/${id}`);
  }

  public save(projects: Projects): Observable<any>{
    return this.httpClient.post<any>(this.URL+'create', projects);
  }

  public update(id: number, projects: Projects): Observable<any>{
    return this.httpClient.put<any>(this.URL + `edit/${id}`, projects);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
