import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service'
import { ActivatedRoute, Router } from '@angular/router';
import Contact from '../../models/Contact'

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contacts: Array<Contact>;
  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.contactService.filteredContactsSubject.subscribe((contacts) => {
      this.contacts = contacts;
    })
  }

  toAdd() { 
    this.router.navigateByUrl(`/contacts/add`); 
  }

}
