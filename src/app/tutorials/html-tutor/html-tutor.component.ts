import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-html-tutor',
  standalone: true,
  imports: [ RouterOutlet, RouterLink],
  templateUrl: './html-tutor.component.html',
  animations: [
    trigger('sidebarAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('400ms ease-in-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('400ms ease-in-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class HtmlTutorComponent {

}

// // In html-tutor.component.ts
// import { Component, animate, trigger, transition, style } from '@angular/core';

// @Component({
//   selector: 'app-html-tutor',
//   standalone: true,
//   imports: [RouterOutlet],  
//   templateUrl: './html-tutor.component.html',
//   animations: [
//     trigger('sidebarAnimation', [
//       transition(':enter', [
//         style({ transform: 'translateX(-100%)' }),
//         animate('200ms', style({ transform: 'translateX(0)' }))
//       ])
//     ])
//   ]
// })
// export class HtmlTutorComponent {
  // ... rest of your component code
// }