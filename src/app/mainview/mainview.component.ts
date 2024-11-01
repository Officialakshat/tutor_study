import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../common/header/header.component';
import { HeroComponent } from '../mains/hero/hero.component';
// import { AboutComponent } from '../pages/about/about.component';
import { ServicesComponent } from '../mains/services/services.component';
import { FeaturesComponent } from '../mains/features/features.component';
import { FaqComponent } from '../mains/faq/faq.component';
import { TestimonialComponent } from '../pages/testimonial/testimonial.component';
import { MainviewAboutComponent } from '../Mainview-components/mainview-about/mainview-about.component';
import { MainviewTestimonialComponent } from '../Mainview-components/mainview-testimonial/mainview-testimonial.component';

@Component({
  selector: 'app-mainview',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainviewTestimonialComponent, HeroComponent, TestimonialComponent, MainviewAboutComponent, ServicesComponent, FaqComponent, FeaturesComponent, ],
  templateUrl: './mainview.component.html',
  styleUrl: './mainview.component.css'
})
export class MainviewComponent {

}
