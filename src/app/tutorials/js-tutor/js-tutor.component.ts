import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../common/header/header.component';
import { JsAsideComponent } from '../../asidebar/js-aside/js-aside.component';

@Component({
  selector: 'app-js-tutor',
  standalone: true,
  imports: [RouterOutlet, JsAsideComponent ],
  templateUrl: './js-tutor.component.html',
  
})
export class JsTutorComponent {

}
