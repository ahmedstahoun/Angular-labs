import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css'],
})
export class StudentUpdateComponent implements OnInit {
  ID: any;
  student: any;
  validationForm: any;

  constructor(
    public myService: StudentsService,
    public myRoute: ActivatedRoute,
    public router: Router
  ) {
    this.ID = myRoute.snapshot.params['id'];
  }

  get nameValid() {
    return this.validationForm.controls['name'].valid;
  }

  get ageValid() {
    return this.validationForm.controls['age'].valid;
  }

  get emailValid() {
    return this.validationForm.controls['email'].valid;
  }
  get phoneValid() {
    return this.validationForm.controls['phone'].valid;
  }

  ngOnInit(): void {
    this.myService.getStudentById(this.ID).subscribe({
      next: (data) => {
        this.student = data;
        this.validationForm = new FormGroup({
          name: new FormControl(this.student.name, [Validators.required]),
          age: new FormControl(this.student.age, [
            Validators.min(20),
            Validators.max(40),
          ]),
          email: new FormControl(this.student.email, [
            Validators.required,
            Validators.email,
          ]),
          phone: new FormControl(this.student.phone, [
            Validators.required,
            Validators.min(11),
          ]),
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  update() {
    if (this.validationForm.valid) {
      let name = this.validationForm.controls['name'].value;
      let age = this.validationForm.controls['age'].value;
      let email = this.validationForm.controls['email'].value;
      let phone = this.validationForm.controls['phone'].value;

      console.log({ name, age, email, phone });

      this.myService
        .updateStudent(this.ID, { name, age, email, phone })
        .subscribe();

      alert('updated sucessfully');
      this.router.navigateByUrl('/');
    }
  }
}
