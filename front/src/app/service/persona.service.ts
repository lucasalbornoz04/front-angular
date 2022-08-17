import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/personas/';


  constructor(private httpClient : HttpClient) { }

  public Lista(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.URL+'lista');
  }

  public details(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.URL+`details/${id}`);
  }

  public save(persona: Persona): Observable<any>{
    return this.httpClient.post<any>(this.URL+'create', persona);
  }

  public update(id: number, persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.URL+`update/${id}`, persona);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL+`delete/{id}`);
  }
}
