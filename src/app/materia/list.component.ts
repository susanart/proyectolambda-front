import { Component, OnInit } from '@angular/core';
import { Materia } from '../models/materia';
import { MateriaService } from '../services/materia.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  materias: Materia[] = [];

  textSpinner = '';
  
  cssUrl : String;

  constructor(
    private materiaService: MateriaService ,
    private spinner: NgxSpinnerService
  ) { 
    this.cssUrl = './list.component.css';
  }
  

  ngOnInit(): void {
    this.onLoad();
  }
 
  onLoad(): void {
    this.materiaService.list().subscribe(data => {
      this.materias = this.orderBy(data);
    });
    
    Swal.fire({
      title: "Cargando datos, un momento...",
      timer: 2000,
      didOpen: () => {
        Swal.showLoading();
      }
    })
  }

  orderBy(materias: Materia[]): Materia[] {
    return materias.sort((a, b) => (a.id > b.id ? 1 : -1))
  }

  changeStyle (){
    this.cssUrl = (this.cssUrl === `./list.component.css`) ? `./list.component.css` : `./list.component.css`;
  }

  async openModal(){
    var materiaNueva = {
      'id':0,
      'nombreMateria':""
    }
    let flag = 0;
    const { value: formValues } = await Swal.fire({
      title: 'Registro de materia',
      html:
        '<div class="form-floating mb-3">'+
          '<input type="text" class="form-control" id="codigoMateria" placeholder="Código de la materia" required>'+
          '<label for="floatingInput">Código de la materia</label>'+
        '</div>'+
        '<div class="form-floating">'+
          '<input type="text" class="form-control" id="nombreMateria" placeholder="Nombre de la materia" required>'+
          '<label for="floatingPassword">Nombre de la materia</label>'+
        '</div>',
      focusConfirm: false,
      confirmButtonText: 'Si',
      allowOutsideClick:false,
      showCloseButton:true,
      showCancelButton:true,
      preConfirm: () => {
        var codigoMateria = (document.getElementById('codigoMateria') as HTMLInputElement).value;
        var nombreMateria = (document.getElementById('nombreMateria') as HTMLInputElement).value;
        return [
          codigoMateria,
          nombreMateria
        ]
      }
    })
      materiaNueva.id = parseInt(formValues?.[0]!);
      materiaNueva.nombreMateria = formValues?.[1]!;
      if(materiaNueva.nombreMateria == undefined) return;
      if(isNaN(materiaNueva.id) || materiaNueva.nombreMateria == ''){
        console.log(materiaNueva)
        Swal.fire({
          title:"Ups!",
          icon:"error",
          text:"Se ha detectado error en los campos que ingresaste, por favor verifica"
        })
        return;
      }
      this.materiaService.save(materiaNueva).subscribe(() =>{
        Swal.fire({
          title:"Guardando datos, un momento...",
          timer:2000,
          didOpen: ()=>{
            Swal.showLoading();
          }
        }).then(() =>{
          window.location.reload();
        })
      })
  }
}
