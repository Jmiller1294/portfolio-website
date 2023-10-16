import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalService } from '../modal.service';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fadeSlideIn', [
      transition('void => *', [
        query('.card', style({ opacity: 0, transform: 'translateY(-70px)' })),

        query('.card', stagger('200ms', [
          animate('300ms 0.2s ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
        ])),
      ])
    ]),
    trigger('fadeSlide', [
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
export class ProjectsComponent implements OnInit {
  hasAppeared : boolean = false;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openModal(modalTemplate: TemplateRef<any>) {
    this.modalService
    .open(modalTemplate, { size: 'lg', title: 'Foo' })
    .subscribe((action) => {
      console.log('modalAction', action)
    })
  }

  onAppear(){
    this.hasAppeared = true;
    console.log("I have appeared!");   // This is a good idea for debugging
  }

}
