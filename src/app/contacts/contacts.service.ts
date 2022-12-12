import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ContactDto } from '../dto/contact-dto';
import { Environments } from '../environments/environments';
import { Guid } from 'guid-typescript';

@Injectable()
export class ContactsService {

  private contacts = new BehaviorSubject<ContactDto[]>([]);
  constructor(private httpClient: HttpClient) { }

  getContacts():Observable<ContactDto[]>{
    console.log(Guid.create())
    this.httpClient.get<ContactDto[]>(Environments.contactsURL)
      .subscribe(c=>this.contacts.next(c));
      return this.contacts;
  }

  removeContact(contact:ContactDto){
    var updatedContacts = this.contacts.value.filter(c=>c.id!=contact.id);
    this.httpClient.delete(`${Environments.contactsURL}/${contact.id}`)
    .subscribe(()=>this.contacts.next(updatedContacts));
  }
}
