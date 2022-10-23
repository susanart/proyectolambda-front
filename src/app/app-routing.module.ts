import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { ListComponent } from './materia/list.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: '', component: EstudianteComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
