import { Component, OnInit, Input } from '@angular/core';
import Contact from 'src/app/models/Contact';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {

  @Input() contact: Contact;   
}
