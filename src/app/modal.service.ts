import { Component, ComponentFactoryResolver, Inject, Injectable, Injector, TemplateRef, ViewContainerRef } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService { 
  private modalNotifier?: Subject<string>;
  constructor(
    private resolver: ComponentFactoryResolver, 
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  open(content: TemplateRef<any>, options?: { size?: string; title?: string }) {
    console.log('open')
    const ModalComponentFactory = this.resolver.resolveComponentFactory(ModalComponent);
    const contentViewRef = content.createEmbeddedView(null);
    const modalComponent = ModalComponentFactory.create(this.injector, [
      contentViewRef.rootNodes, 
    ])

    modalComponent.instance.size = options?.size as string;
    modalComponent.instance.title = options?.title as string;
    modalComponent.instance.closeEvent.subscribe(() =>
      this.closeModal(
    ));
    modalComponent.instance.submitEvent.subscribe(() =>
      this.submitModal(
    ))
    modalComponent.hostView.detectChanges();

    this.document.body.appendChild(modalComponent.location.nativeElement);
    document.body.style.overflow = "hidden";
    this.modalNotifier = new Subject();
    return this.modalNotifier?.asObservable();
  }

  closeModal() {
    document.body.style.overflow = "auto";
    this.modalNotifier?.complete();
  }

  submitModal() {
    document.body.style.overflow = "auto";
    this.modalNotifier?.next('confirm');
  }

}
