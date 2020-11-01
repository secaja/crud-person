import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToListComponent } from './Person/to-list/to-list.component';
import { AddComponent } from './Person/add/add.component';
import { EditComponent } from './Person/edit/edit.component';
import {FormsModule} from '@angular/forms';
import {ServiceService} from '../app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';

  

@NgModule({
  declarations: [
    AppComponent,
    ToListComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
