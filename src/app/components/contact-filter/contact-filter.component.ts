import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service'

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  filter: String = '';
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts()
  }

  onFilter() {
    this.contactService.getContacts({ term: this.filter })
  }

}
