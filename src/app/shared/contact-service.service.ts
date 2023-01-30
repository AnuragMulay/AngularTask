import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor() { }

  allContacts:any;

  setContacts(allContacts:any) {
    this.allContacts=allContacts;
  }

  getContacts() {
    return this.allContacts;
  }
}
