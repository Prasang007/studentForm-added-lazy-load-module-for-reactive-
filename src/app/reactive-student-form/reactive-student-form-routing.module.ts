import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveStudentFormComponent } from './reactive-student-form.component';


const routes: Routes = [
  {path: '', component: ReactiveStudentFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveStudentFormRoutingModule { }
