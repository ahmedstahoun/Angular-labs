import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.css'],
})
export class AddNewStudentComponent {
  constructor(private myService: StudentsService, public myRouter: Router) {}

  validationForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.min(20), Validators.max(40)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.minLength(11),
    ]),
  });

  get nameValid() {
    return this.validationForm.controls['name'].valid;
  }

  get ageValid() {
    return this.validationForm.controls['age'].valid;
  }

  get emailValid() {
    return this.validationForm.controls['email'].valid;
  }
  get phoneValid(){
    return this.validationForm.controls["phone"].valid;
  }

  add(name: any, age: any, email: any, phone: any) {
    if (this.validationForm.valid) {
      let name = this.validationForm.controls['name'].value;
      let age = this.validationForm.controls['age'].value;
      let email = this.validationForm.controls['email'].value;
      let phone = this.validationForm.controls['phone'].value;
      let newStudent = { name, age, email, phone };

      this.myService.addNewStudent(newStudent).subscribe();

      alert('added successfully');
      this.myRouter.navigateByUrl('/');
    }

  }
}
