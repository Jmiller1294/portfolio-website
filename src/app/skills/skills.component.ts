import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('fade', [
      transition('void <=> *', [
        query('.parent', style({ opacity: 0, transform: 'translateX(-40px)' })),

        query('.parent', stagger('200ms', [
          animate('800ms 0.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
        ])),
      ])
    ]),
    trigger('slide', [
      transition('void <=> *', [
        query('.header__bar', style({ opacity: 0, transform: 'translateX(-40px)' })),
      ])
    ]),
    trigger('loading', [
      state('start',
        style({
          width: '0%'
        })
      ),
      state('end',
        style({
          width: '90%'
        })),

      transition('start => end', [
        animate(2000)
      ]),
    ]),
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-70px)'}),
        animate('800ms ease-in-out', 
        style({ opacity: 1, transform: 'translateX(0)'}))
      ]),
      transition(':leave', [
        animate('800ms ease-in-out', 
        style({ opacity: 0, transform: 'translateX(-70px)'}))
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit {
  duration: number = 2 * 100;
  step = 100;
  add_step = 20;
  progress = 0;
  hasAppeared : boolean = false;

  constructor() { }

  ngOnInit(): void {
    const interval = setInterval(() => {
      if (this.progress < this.duration) {
        this.progress += this.add_step ;
      } else {
        clearInterval(interval);
      }
    }, this.step);
  }

  onAppear(){
    this.hasAppeared = true;
    console.log("I have appeared!");   // This is a good idea for debugging
  }

}
