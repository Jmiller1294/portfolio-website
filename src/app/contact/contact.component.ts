import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-70px)'}),
        animate('300ms ease-in', 
        style({ opacity: 1, transform: 'translateX(0)'}))
      ]),
      transition(':leave', [
        animate('300ms ease-in', 
        style({ opacity: 0, transform: 'translateX(-70px)'}))
      ])
    ]),
    trigger('fadeSlideGrowKeyFrame', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5) translateX(100px)'}),
        animate('800ms ease-in', 
        keyframes([
          style({ opacity: 1, offset: 0.3 }),
          style({ transform: 'translateX(0)', offset: 0.6 }),
          style({ transform: 'scale(1.2)', offset: 0.8 }),
          style({ transform: 'scale(1)', offset: 1 })
        ])
        )
      ]),
      transition(':leave', [
        animate('500ms', 
        keyframes([
          style({ transform: 'scale(0.5)', offset: 0.3 }),
          style({ transform: ' scale(0.5) translateX(100px)', offset: 0.7 }),
          style({ opacity: 0, offset: 1 })
        ])
        )
      ])
    ]),
  ]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup 
  hasAppeared: any;

  constructor() {
    this.contactForm = new FormGroup({
      'firstName': new FormControl(''),
      'lastName': new FormControl(''),
      'email': new FormControl(''),
      'comments': new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  onAppear(){
    this.hasAppeared = true;
    console.log("I have appeared!");   // This is a good idea for debugging
  } 

}
