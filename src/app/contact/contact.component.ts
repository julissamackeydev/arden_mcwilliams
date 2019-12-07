import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm = this.fb.group({
    subject: ['', Validators.required],
    firstname: ['', Validators.required],
    textarea1: ['', Validators.required],
    lastname: [''],
    email: ['', Validators.required],
    telephone: ['']
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit(){
    console.warn(this.contactForm.value);
    const firstname = this.contactForm.value.firstname
    console.log(firstname)
  }
}
