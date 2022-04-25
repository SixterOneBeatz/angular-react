import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularComponent } from 'src/components/AngularComponent';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, AngularComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
