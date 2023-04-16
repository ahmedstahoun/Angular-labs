import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  name = '';
  age = '';

  @Output() myEvent = new EventEmitter();

  add() {
    if (+this.age > 20 && +this.age < 40)
      this.myEvent.emit({ name: this.name, age: this.age });

    this.name = '';
    this.age = '';
  }
}
