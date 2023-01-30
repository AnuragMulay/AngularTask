import { Component, OnInit, Output } from "@angular/core";
import { ContactServiceService } from "../shared/contact-service.service";
@Component ({
    selector:'addComp',
    templateUrl:'./addCComponent.html'
})

export class addCComponent implements OnInit {
    allContacts = [{ name : "Name" , mobileNum:"Mobile Number"}];
    userName:string;
    mobileNum:any;
    isDeleted:boolean=false;

    saveContact() {
        if(this.userName && this.mobileNum) {
            this.allContacts.push({ name:this.userName, mobileNum:this.mobileNum});
        }
        console.log(this.allContacts);
    }
    deleteContact(index:number) {
        this.allContacts.splice(index,1);
        this.isDeleted=true;
        setTimeout(()=> {this.isDeleted=false},3000);
    }

    constructor(private service:ContactServiceService) {}

    ngOnInit(): void {
        this.service.setContacts(this.allContacts);
    }
}