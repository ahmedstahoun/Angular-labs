import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private myClient: HttpClient) {}

  private readonly Base_URL = 'http://localhost:3000/students';
  getAllStudents() {
    return this.myClient.get(this.Base_URL);
  }

  getStudentById(id: any) {
    return this.myClient.get(this.Base_URL + '/' + id);
  }

  addNewStudent(newStudent: any) {
    return this.myClient.post(this.Base_URL, newStudent);
  }

  updateStudent(id: any, student: any) {
    return this.myClient.put(this.Base_URL + '/' + id, student);
  }

  deleteStudent(id: any) {
    return this.myClient.delete(this.Base_URL + '/' + id);
  }
}
