import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContactDto } from 'src/app/dto/contact-dto';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css'],
})
export class ContactItemComponent {
  @Input()
  contact: ContactDto = new ContactDto();

  @Output()
  onRemove = new EventEmitter<ContactDto>();

  remove() {
    this.onRemove.emit(this.contact);
  }
}
