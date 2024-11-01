import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PageHeroSecComponent } from '../../reusable/page-hero-sec/page-hero-sec.component';
// import { HtmtTutorComponent } from '../../tutorials/htmt-tutor/htmt-tutor.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterOutlet, RouterLink, PageHeroSecComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

}
