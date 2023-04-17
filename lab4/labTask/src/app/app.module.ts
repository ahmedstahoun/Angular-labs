import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { StudentsComponent } from './components/students/students.component';

import { FooterComponent } from './components/footer/footer.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule ,Routes } from '@angular/router';

let routes:Routes = [
  {path:"", component:RegistrationComponent},
  {path:"students", component:StudentsComponent},
  {path:"students/:id", component:StudentDetailsComponent},
  {path:"**", component:ErrorComponent}
]

@NgModule({
  declarations: [AppComponent, RegistrationComponent, StudentsComponent,  FooterComponent, StudentDetailsComponent, ErrorComponent ,HeaderComponent],
  imports: [BrowserModule, FormsModule ,ReactiveFormsModule,RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
