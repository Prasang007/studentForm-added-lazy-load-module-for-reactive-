import { Component, OnInit} from '@angular/core';
import { Student } from '../student';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-student-form',
  templateUrl: './template-driven-student-form.component.html',
  styleUrls: ['./template-driven-student-form.component.css']
})
export class TemplateDrivenStudentFormComponent implements OnInit {



  hobbies = ['BasketBall', 'BaseBall', 'FootBall'];
  cities = ['Jaipur', 'Alwar', 'Ajmer'];
  genders = ['male', 'female'];
  student = new Student();
  clicked = false;
  submitted = false;
  constructor() { }

  ngOnInit() {
  }

  addHobby(hobby: string) {
    this.clicked = true;
    if (this.student.hobbies.indexOf(hobby) === -1) {
      this.student.hobbies.push(hobby);
    } else {
      this.student.hobbies.splice( this.student.hobbies.indexOf(hobby), 1 );
    }

  }

  onSubmit(form: NgForm) {
    this.clicked = true;
    if (form.valid ) {
    this.submitted = true;
    }
  }

}
