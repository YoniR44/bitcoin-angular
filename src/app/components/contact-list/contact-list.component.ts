import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import Contact from 'src/app/models/Contact';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Contact[];
  constructor(private router:Router) { }

  openContact(contact) { 
    this.router.navigateByUrl(`/contacts/${contact._id}`); 
  }

  ngOnInit() { }

}
