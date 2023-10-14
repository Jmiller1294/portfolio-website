import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  animations: [
    trigger('fadeSlideInLeft', [
      transition('void <=> *', [
        query('.content-left', style({ opacity: 0, transform: 'translateX(-70px)' })),

        query('.content-left', stagger('200ms', [
          animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
        ])),
      ])
    ]),
    trigger('fadeSlideInRight', [
      transition('void <=> *', [
        query('.content-right', style({ opacity: 0, transform: 'translateX(70px)' })),

        query('.content-right', stagger('200ms', [
          animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
        ])),
      ])
    ]),
  ]
})
export class TimelineComponent implements OnInit {
  hasAppeared : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onAppear(){
    this.hasAppeared = true;
    console.log("I have appeared!");   // This is a good idea for debugging
  }

}
