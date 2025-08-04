import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PyAsideComponent } from '../../asidebar/py-aside/py-aside.component';

@Component({
  selector: 'app-python-tutor',
  standalone: true,
  imports: [RouterOutlet, PyAsideComponent, ],
  templateUrl: './python-tutor.component.html',
             
})
export class PythonTutorComponent {

}
