import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  validationForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    age: new FormControl(null, [Validators.min(20), Validators.max(40)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
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

  add() {
    if (this.validationForm.valid) {
      alert('student added successfully');
    }
  }
}
