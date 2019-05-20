import { Page6Component } from './page/page6/page6.component';
import { Page5Component } from './page/page5/page5.component';
import { Page4Component } from './page/page4/page4.component';
import { Page1Component } from './page/page1/page1.component';
import { Page2Component } from './page/page2/page2.component';
import { Page3Component } from './page/page3/page3.component';
import { PagenotfoundComponent } from './page/pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'page1', pathMatch: 'full' },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: 'page4', component: Page4Component },
  { path: 'page5', component: Page5Component },
  { path: 'page6', component: Page6Component },
  { path: '**', component: PagenotfoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {


}
