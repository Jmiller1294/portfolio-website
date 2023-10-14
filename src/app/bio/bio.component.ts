import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
    const options = {
      strings: ['Hi, I\'m Justin.', 'Developer.', 'Gamer.'],
      typeSpeed: 60,
      backSpeed: 100,
      showCursor: false,
      cursorChar: '|',
      loop: true
    };

    const typed = new Typed('.typed-element', options);
  }

  scroll(elementId: string): void {
    console.log('hiy')
    this.scroller.scrollToAnchor(elementId);
  }

}
