import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../models/estudiante';
import { EstudianteService } from '../services/estudiante.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  estudiantes: Estudiante[] = [];
  textSpinner = '';
  estudianteUpdate!: Estudiante;
  parcial1: number = 5;

  constructor(
    private estudianteService: EstudianteService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
  ) { }



  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.onLoad(params.get('id'));
    })
  }

  onLoad(id: any): void {
    this.estudianteService.list(id).subscribe(data => {
      this.estudiantes = this.orderBy(data);
    });
    if(this.estudiantes.length == 0){
      Swal.fire({
        title: "Ups!!",
        icon:"error",
        text:"No hay estudiantes registrados para esta materia!!"
      })
    }else{
      Swal.fire({
        title: "Cargando datos, un momento...",
        timer: 2000,
        didOpen: () => {
          Swal.showLoading();
        }
      })
    }    

  }

  orderBy(estudiantes: Estudiante[]): Estudiante[] {
    return estudiantes.sort((a, b) => (a.id > b.id ? 1 : -1))
  }

  update(estudiante: Estudiante): void {
    this.estudianteService.write(estudiante).subscribe(() => {
      Swal.fire({
        title: "Guardando datos, un momento...",
        timer: 1000,
        didOpen: () => {
          Swal.showLoading();
        }
      }).then(() => {
        window.location.reload();
      })
    })
  }
}
