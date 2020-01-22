import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenStudentFormComponent } from './template-driven-student-form/template-driven-student-form.component';



const routes: Routes = [
  {path: 'template', component: TemplateDrivenStudentFormComponent},
  {path: 'reactive', loadChildren: () => import('./reactive-student-form/reactive-student-form.module')
  .then(m => m.ReactiveStudentFormModule) },
  {path: '', redirectTo: '/template', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
