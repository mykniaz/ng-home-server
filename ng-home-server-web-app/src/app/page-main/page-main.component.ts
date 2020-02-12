import { Component } from '@angular/core';
import {
  animate,
  group, keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.scss'],
  animations: [
    trigger('box', [
      state('start', style({background: 'blue'})),
      state('end', style({
        background: 'red',
        transform: 'scale(1.2)'
      })),
      state('special', style({
        background: 'orange',
        transform: 'scale(0.5)',
        borderRadius: '50%',
      })),
      transition('start <=> end', animate(450)),
      transition('start <=> special', animate(450)),
      transition('special <=> *', [
        style({background: 'green'}),
        animate(1000, style({background: 'pink'})),
        animate(750)
      ]),
      transition(':enter', [
        animate(4000, keyframes([
          style({background: 'white', offset: 0}),
          style({background: 'yellow', offset: 0.2}),
          style({background: 'red', offset: 0.3}),
          style({background: 'orange', offset: 1}),
        ])),
      ]),
      transition(':leave', [

        style({opacity: 1}),
        group([
          animate(750, style({
            color: '#fff'
          })),
        ])
      ])
    ])
  ]
})
export class PageMainComponent {
  boxState = 'start';
  visible = true;

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }
}
