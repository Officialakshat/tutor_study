import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
// import { MainviewComponent } from './mainview/mainview.component';
// import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './common/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
})
export class AppComponent {
  
  constructor(public router: Router) {}
  title = 'study_tutor';

  isAuthPage(): boolean {
    // Example: check the current route
    return this.router.url.startsWith('/auth');
  }
}
