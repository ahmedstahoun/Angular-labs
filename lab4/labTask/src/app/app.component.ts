import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'labTask';
  parentData = '';

  Students: { name: String; age: String }[] = [];

  getData(data: any) {
    this.Students.push(data);
    console.log(this.Students);
  }
}
