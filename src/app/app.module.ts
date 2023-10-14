import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal.service';
import { AppearDirective } from './appear';

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    ProjectsComponent,
    SkillsComponent,
    TimelineComponent,
    ContactComponent,
    ModalComponent,
    AppearDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxTypedJsModule,
    BrowserAnimationsModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
