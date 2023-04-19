import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [],
})
export class StudentsComponent implements OnInit {
  students: any;
  id: any;
  constructor(public myService: StudentsService, public myRouter: Router) {}
  ngOnInit(): void {
    this.myService.getAllStudents().subscribe({
      next: (data) => {
        this.students = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  confirmDelete(event: any) {
    this.id = event.target.id;
  }
  deleteEvent(e: any) {
    this.myService.deleteStudent(this.id).subscribe();
    this.myRouter.navigateByUrl('/students', { skipLocationChange: true }).then(() => {
      this.myRouter.navigate(['/']);
    });
  }
}
