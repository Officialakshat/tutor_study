import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PageHeroSecComponent } from '../../reusable/page-hero-sec/page-hero-sec.component';
// import { CssTutorComponent } from '../../tutorials/css-tutor/css-tutor.component';
// import { HtmlTutorComponent } from '../../tutorials/html-tutor/html-tutor.component';
// import { JsTutorComponent } from '../../tutorials/js-tutor/js-tutor.component';
// import { PythonTutorComponent } from '../../tutorials/python-tutor/python-tutor.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [ RouterLink, PageHeroSecComponent,  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

}
