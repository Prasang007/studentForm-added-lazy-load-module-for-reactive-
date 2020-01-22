import { Component, OnInit} from '@angular/core';
import {  FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { validateEmail, validateRollNo, validateMobile, validateName } from '../form-validator.directive';

@Component({
  selector: 'app-reactive-student-form',
  templateUrl: './reactive-student-form.component.html',
  styleUrls: ['./reactive-student-form.component.css']
})
export class ReactiveStudentFormComponent implements OnInit {

  hobbies = ['BasketBall', 'BaseBall', 'FootBall'];
  cities = ['Jaipur', 'Alwar', 'Ajmer'];
  genders = ['male', 'female'];

  submitted = false;

  studentForm = new FormGroup({
      rollNo : new FormControl('', [Validators.required, validateRollNo]),
      name : new FormControl('', [Validators.required, validateName]),
      email : new FormControl('', [Validators.required, validateEmail]),
      address : new FormControl('', Validators.required),
      gender : new FormControl('male', Validators.required),
      mobileNo : new FormControl('', [Validators.required, validateMobile]),
      city : new FormControl('', Validators.required),
      hobbies: new FormArray([], Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }

  onCheckChange(event) {
    const checkedHobbies: FormArray = this.studentForm.get('hobbies') as FormArray;


    if (event.target.checked) {

      checkedHobbies.push(new FormControl(event.target.value));
    } else {

      checkedHobbies.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value === event.target.value) {

          checkedHobbies.removeAt(checkedHobbies.value.indexOf(ctrl.value));
          return;
        }
      });
    }

  }

  onSubmit() {

    Object.keys(this.studentForm.controls).forEach(control => {

      this.studentForm.get(control).markAsTouched();
      });
    if (this.studentForm.valid) {
        this.submitted = true;
        this.studentForm.markAsTouched({onlySelf: false});
      }

  }


}
