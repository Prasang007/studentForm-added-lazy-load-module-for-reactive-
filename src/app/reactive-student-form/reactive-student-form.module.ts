import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveStudentFormRoutingModule } from './reactive-student-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveStudentFormComponent } from './reactive-student-form.component';


@NgModule({
  declarations: [ReactiveStudentFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveStudentFormRoutingModule
  ]
})
export class ReactiveStudentFormModule { }
