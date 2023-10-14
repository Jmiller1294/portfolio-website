import { Component, TemplateRef } from '@angular/core';
import { ModalService } from './modal.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor(private modalService: ModalService, private scroller: ViewportScroller) { }

  openModal(modalTemplate: TemplateRef<any>) {
    this.modalService
    .open(modalTemplate, { size: 'lg', title: 'Foo' })
    .subscribe((action) => {
      console.log('modalAction', action)
    })
  }

  scroll(elementId: string): void {
    this.scroller.scrollToAnchor(elementId);
  }
}
