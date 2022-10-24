import { Injectable } from '@angular/core';
import { Estudiante } from '../models/estudiante';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  estudianteURL = environment.estudiantesURL;

  constructor(private httpClient: HttpClient) { }

    public list(id:any): Observable<Estudiante[]> {
      return this.httpClient.get<Estudiante[]>(this.estudianteURL + "/" + id);
    }
  
    public write(estudiante: Estudiante): Observable<Estudiante> {
      return this.httpClient.post<Estudiante>(this.estudianteURL, estudiante);
    }
    
  
}
