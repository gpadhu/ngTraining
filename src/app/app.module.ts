import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { DeveloperComponent } from './developer/developer.component';
import { SimpleDirective } from './simple-directive/simple-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    DeveloperComponent,
    SimpleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
