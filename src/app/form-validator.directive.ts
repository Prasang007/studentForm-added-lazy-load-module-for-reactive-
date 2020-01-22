import { AbstractControl } from '@angular/forms';

export function validateRollNo(control: AbstractControl): { [key: string]: boolean } | null {

      const pattern = /^[0-9]*$/;
      if (pattern.test(control.value)) {
        return null ;
      } else {
      return {rollNo: true };
      }

  }

export function validateName(control: AbstractControl): { [key: string]: boolean } | null {


      const pattern =  /^[a-zA-Z]*$/;
      if (pattern.test(control.value)) {
        return null;
       } else {
        return { name : true};
       }


  }

export function validateEmail(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== '') {
      const pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
      if (pattern.test(control.value)) {
         return null;
      } else {
        return {email : true};
    }
  } else { return null; }


}

export function validateMobile(control: AbstractControl): {[key: string]: boolean} | null {
    if (control.value !== '') {
      const pattern = /^[0-9]{10}$/;
      if (pattern.test(control.value)) {
        return null;
      } else if (control.value.length > 10) {
        return {length : true};
      } else { return {mobileNo: true}; }
    } else { return null; }
  }


