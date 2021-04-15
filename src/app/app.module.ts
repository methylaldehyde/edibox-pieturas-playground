import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonNameComponent } from './person-name/person-name.component';
import { AutobusComponent } from './autobus/autobus.component';
import { PieturaModule } from './pietura/pietura.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonNameComponent,
    AutobusComponent,
  ],
  imports: [
    BrowserModule,
    PieturaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
