import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  imports: [FormsModule],
  standalone:true,
  templateUrl: './contact-me.html',
  styleUrls: ['./contact-me.scss']
})
export class ContactMe {
  contact ={
    name:'',
    company:'',
    mobile :'',
    email:'',
    details :''
  }

  scriptURL = 'https://script.google.com/macros/s/AKfycbwtWpX5Te_-2BkusoK7ScyqN7iqi8tzKhJ9b1ReMYeyxrIvSSiHTTrF2_3fghtu96hu/exec'; // 🔁 Replace with your actual URL

  sendData() {
    if (!this.contact.name || !this.contact.mobile || !this.contact.email) {
      alert('Please fill all required fields!');
      return;
    }

    const form = new FormData();
    form.append('name', this.contact.name);
    form.append('company', this.contact.company);
    form.append('mobile', this.contact.mobile);
    form.append('email', this.contact.email);
    form.append('details', this.contact.details);

    fetch(this.scriptURL, {
      method: 'POST',
      body: form
    })
    .then(response => {
      alert('Data sent successfully!');
      console.log('Success!', response);
    })
    .catch(error => {
      alert('Error occurred!');
      console.error('Error!', error.message);
    });
  }

}
