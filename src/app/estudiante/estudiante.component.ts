import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../models/estudiante';
import { EstudianteService } from '../services/estudiante.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  estudiantes: Estudiante[] = [];
  textSpinner = '';

  constructor(
    private estudianteService: EstudianteService , 
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
  ) { }


  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) =>{
      this.onLoad(params.get('id'));
    })
  }
 
  onLoad(id:any): void {
    this.estudianteService.list(id).subscribe(data => {
      this.estudiantes = this.orderBy(data);
    });
    
  }

  orderBy(estudiantes: Estudiante[]): Estudiante[] {
    return estudiantes.sort((a, b) => (a.id > b.id ? 1 : -1))
  }
}
