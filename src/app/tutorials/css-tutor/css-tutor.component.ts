import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-css-tutor',
  standalone: true,
  imports: [RouterModule, RouterLink, ],
  templateUrl: './css-tutor.component.html',
})
export class CssTutorComponent {

}
