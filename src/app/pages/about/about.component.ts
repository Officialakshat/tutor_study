import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ServicesComponent } from '../../mains/services/services.component';
import { FeaturesComponent } from '../../mains/features/features.component';
import { MainviewComponent } from '../../mainview/mainview.component';
import { PageHeroSecComponent } from '../../reusable/page-hero-sec/page-hero-sec.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ServicesComponent, FeaturesComponent, PageHeroSecComponent ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @Input() title_name : string ="";
}
