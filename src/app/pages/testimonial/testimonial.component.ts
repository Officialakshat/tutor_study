import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PageHeroSecComponent } from '../../reusable/page-hero-sec/page-hero-sec.component';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [RouterLink, RouterOutlet, PageHeroSecComponent ],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent {

}
