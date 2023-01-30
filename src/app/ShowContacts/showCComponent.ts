import { Component, OnInit, ViewChild , AfterViewInit} from "@angular/core";
import { addCComponent } from "../addContacts/addCComponent";
import { ContactServiceService } from "../shared/contact-service.service";

@Component ({
    selector:'showComp',
    templateUrl:'./showCComponent.html'
})

export class showCComponent implements OnInit , AfterViewInit {

    allContacts:any;
    @ViewChild('addCComponent') childData : addCComponent;

    constructor(private service:ContactServiceService) {}

    ngOnInit(): void {
        this.allContacts = this.service.getContacts
    };
    // ngOnInit() {
    //     this.service.getContacts.subscribe((data)=>{
    //       this.allContacts=data;
    //     })
    //   }
    ngAfterViewInit(): void {
        console.log("childData : ",this.childData);
        this.allContacts = this.childData;
    }  
}