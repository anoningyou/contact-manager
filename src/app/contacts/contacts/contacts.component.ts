import { Component } from '@angular/core';
import { ContactDto } from 'src/app/dto/contact-dto';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  constructor(private contactsService :ContactsService){}

  contacts = this.contactsService.getContacts();
  removeContact(contact:ContactDto){
    contact = contact;
    this.contactsService.removeContact(contact);
  }

}
