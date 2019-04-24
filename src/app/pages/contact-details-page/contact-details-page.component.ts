import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service'
import { ActivatedRoute, Router } from '@angular/router';
import Contact from '../../models/Contact'
import Move from 'src/app/models/Move';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  contact: Contact;
  moves:Move[];
  constructor(private contactService: ContactService, 
    private userService:UserService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   
  this.route.params.subscribe(params => {
      const id = params['id'];
      this.contactService.getContactById(id).subscribe(contact => {
        this.contact = contact;
      })

      this.userService.userSubject.subscribe((user) => {
        if (this.contact) {
          this.moves = user.moves.filter((move) => {
            return move.toId === this.contact._id;
          })
        }
      })
    })  
  }

  backToContacts() { 
    this.router.navigateByUrl(`/contacts`); 
  }

  toEdit(contact) { 
    this.router.navigateByUrl(`/contacts/${contact._id}/edit`); 
  }
}
