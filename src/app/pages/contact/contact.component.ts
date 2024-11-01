import { Component } from '@angular/core';
import { PageHeroSecComponent } from '../../reusable/page-hero-sec/page-hero-sec.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PageHeroSecComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
