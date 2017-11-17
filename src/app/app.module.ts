import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TabViewModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
