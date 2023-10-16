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
          animate('300ms 0.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
        ])),
      ])
    ]),
    trigger('slide', [
      transition('void => *', [
        query('.header__bar', style({ opacity: 0, transform: 'translateX(-40px)' })),
      ])
    ]),
    trigger('fadeIn', [
      transition('void <=> *', [
        query('.skill__container', style({ opacity: 0, transform: 'translateX(90px)' })),

        query('.skill__container', stagger('100ms', [
          animate('300ms 0.2s ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
        ])),
      ])
    ]),
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-90px)'}),
        animate('400ms ease-in', 
        style({ opacity: 1, transform: 'translateX(0)'}))
      ]),
      transition(':leave', [
        animate('400ms ease-in', 
        style({ opacity: 0, transform: 'translateX(-90px)'}))
      ])
    ]),
    trigger('loading', [
      state('start',
        style({
          width: '0%'
        })
      ),
      state('end1',
        style({
          width: '70%'
        })
      ),
      state('end2',
        style({
          width: '80%'
        })
      ),
      state('end3',
        style({
          width: '90%'
        })
      ),
      state('end4',
        style({
          width: '100%'
        })
      ),
      state('end5',
        style({
          width: '60%'
        })
      ),
      state('end6',
        style({
          width: '75%'
        })
      ),
      state('end7',
        style({
          width: '90%'
        })
      ),
      transition('start => end1', [
        animate(2000)
      ]),
      transition('start => end2', [
        animate(2000)
      ]),
      transition('start => end3', [
        animate(2000)
      ]),
      transition('start => end4', [
        animate(2000)
      ]),
      transition('start => end5', [
        animate(2000)
      ]),
      transition('start => end6', [
        animate(2000)
      ]),
      transition('start => end7', [
        animate(2000)
      ]),
    ]),
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
  }
  
  onAppear(){
    this.hasAppeared = true;
    if(this.hasAppeared) {
      const interval = setInterval(() => {
        console.log(this.progress)
        if (this.progress < this.duration) {
          this.progress += this.add_step ;
        } else {
          clearInterval(interval);
        }
      }, this.step);
    }
    console.log("I have appeared!");   // This is a good idea for debugging
  }

}
