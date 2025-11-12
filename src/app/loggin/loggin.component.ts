import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { NgIf } from '@angular/common'; // <-- Import NgIf

@Component({
  selector: 'app-loggin',
  standalone: true,
  imports: [ FormsModule], // <-- Add FormsModule here
  templateUrl: './loggin.component.html',
  styleUrl: './loggin.component.css'
})
export class LogginComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  phone: string = '';
  

  

 

ifEmpty() {
  if (
    this.username === "" ||
    this.email === "" ||
    this.password === "" ||
    this.phone === ""
  ) {
    console.log("Please fill in all fields.");
  }
  
}
onSubmit() {
    console.log('Form Data:', {
      username: this.username,
      email: this.email,
      password: this.password,
      phone: this.phone,
    });
  }
}
