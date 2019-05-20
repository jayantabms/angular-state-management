import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Page1Component } from './page/page1/page1.component';
import { Page2Component } from './page/page2/page2.component';
import { Page3Component } from './page/page3/page3.component';
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './page/pagenotfound/pagenotfound.component';
import { Page4Component } from './page/page4/page4.component';
import { Page5Component } from './page/page5/page5.component';
import { Page6Component } from './page/page6/page6.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,

    PagenotfoundComponent,

    Page4Component,

    Page5Component,

    Page6Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
