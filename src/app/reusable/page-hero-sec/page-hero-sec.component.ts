import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-hero-sec',
  standalone: true,
  imports: [],
  templateUrl: './page-hero-sec.component.html',
  styleUrl: './page-hero-sec.component.css'
})
export class PageHeroSecComponent {
 @Input() title_name : string ="";


}
