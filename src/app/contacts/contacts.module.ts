import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactsService } from './contacts.service';
import {  HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ContactsComponent,
    ContactItemComponent,
    ContactEditComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    ContactsService
  ],
  exports:[
    ContactsComponent
  ]

})
export class ContactsModule { }
