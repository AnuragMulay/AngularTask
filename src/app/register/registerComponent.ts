import { Component, Input, Output, EventEmitter, OnInit} from "@angular/core";

@Component ({
    selector:'register',
    templateUrl:'./registerComponent.html'
})

export class registerComponent implements OnInit {

    emailRequired:any;
    passwordRequired:any;
    phoneRequired:any;
    birthdayRequired:any;
    missingFields:boolean=false;
    testVal:string = "Test";
    // masterData:Array<profileData1>;
    p1 = {
        emailId:"default",
        password:"default",
        phoneNumber:0,
        birthday:"default"
    };

    ngOnInit(): void {}
    
    @Output() outputD = new EventEmitter<string>();

    createUser(masterData: any) {
        console.log("User Created with : ", masterData);
        this.outputD.emit(masterData);
    }

    fieldValidator() {
        this.missingFields = true;
        if(this.emailRequired && this.passwordRequired && this.phoneRequired && this.birthdayRequired) {

            this.p1.emailId = this.emailRequired;
            this.p1.password = this.passwordRequired;
            this.p1.phoneNumber = this.phoneRequired;
            this.p1.birthday=this.birthdayRequired;
            console.log("Before Push : ",this.p1)
            //this.createUser(this.p1);

            // this.masterData.push(this.profileData);
            // this.createUser(this.masterData);
            // console.log("User created with : ",this.masterData);

            this.missingFields = false;
        }
    }
}