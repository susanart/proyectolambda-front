import { environment } from './../../environments/environment';
import { Materia } from './../models/materia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  materiaURL = environment.materiaURL;

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Materia[]> {
    return this.httpClient.get<Materia[]>(this.materiaURL);
  }

  public write(materia: Materia): Observable<Materia> {
    return this.httpClient.post<Materia>(this.materiaURL, materia);
  }

  
}