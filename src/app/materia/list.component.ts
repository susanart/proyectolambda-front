import { Component, OnInit } from '@angular/core';
import { Materia } from '../models/materia';
import { MateriaService } from '../services/materia.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
    
  }

  orderBy(productos: Materia[]): Materia[] {
    return productos.sort((a, b) => (a.id > b.id ? 1 : -1))
  }

  changeStyle (){
    this.cssUrl = (this.cssUrl === `./list.component.css`) ? `./list.component.css` : `./list.component.css`;
  }

}
