import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service'
import { ActivatedRoute, Router } from '@angular/router';
import Contact from '../../models/Contact'

@Component({
  selector: 'contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  contact: Contact
  id: string
  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      
      if (!this.id) {
        this.contact = { name: '', phone: '', email: '' };
        return;
      }

      this.contactService.getContactById(this.id).subscribe(contact => {
        this.contact = contact;
      })
    })
  }

  goBack() {
    if (!this.id) this.router.navigateByUrl(`/contacts`);
    else this.router.navigateByUrl(`/contacts/${this.id}`);
  }

  onSubmit(e) {
    e.preventDefault()
    if (!this.contact.name || !this.contact.email || !this.contact.phone) return
    this.contactService.saveContact(this.contact)
    this.goBack();
  }

  onDelete() {
    this.contactService.deleteContact(this.contact._id)
    this.id = '';
    this.goBack();
  }

}
