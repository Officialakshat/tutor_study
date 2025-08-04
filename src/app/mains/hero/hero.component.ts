import { Component } from '@angular/core';

import { 
  trigger, 
  state, 
  style, 
  animate, 
  transition 
} from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  animations: [
    // Animation for the left side content
    trigger('fadeInLeft', [
      state('void', style({
        opacity: 0,
        transform: 'translateX(-100px)'
      })),
      state('*', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate('0.8s ease-out')
      ])
    ]),

    // Animation for the right side content
    trigger('fadeInRight', [
      state('void', style({
        opacity: 0,
        transform: 'translateX(100px)'
      })),
      state('*', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate('0.8s ease-out')
      ])
    ]),

    // Animation for the image rotation
    trigger('rotateIn', [
      state('void', style({
        opacity: 0,
        transform: 'rotate(-10deg)'
      })),
      state('*', style({
        opacity: 1,
        transform: 'rotate(0)'
      })),
      transition('void => *', [
        animate('1s ease-out')
      ])
    ]),

    // Hover animation for button
    trigger('buttonHover', [
      state('normal', style({
        transform: 'translateY(0)'
      })),
      state('hovered', style({
        transform: 'translateY(-5px)'
      })),
      transition('normal <=> hovered', [
        animate('0.2s ease-in-out')
      ])
    ])
  ]

  })
export class HeroComponent {
  buttonState = 'normal';

  onButtonHover() {
    this.buttonState = 'hovered';
  }

  onButtonLeave() {
    this.buttonState = 'normal';
  }
}
