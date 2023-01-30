import { Component , OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { registerComponent } from '../register/registerComponent'

@Component ({
    selector:'login',
    templateUrl:'./loginComponent.html'
})

export class loginComponent implements OnInit , AfterViewInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router
      ) {}

    emailIdVal:any;
    passwordVal:any;
    profileData:any;
    isValid:boolean=false;
    testVar = 12344;
    customRoute:any;
    
    @ViewChild(registerComponent) registerData : registerComponent;

    ngAfterViewInit(): void {
        this.profileData = this.registerData.testVal;
        console.log("View Child mechanism : ",this.profileData);
    }

    ngOnInit(): void {}

    loginValidation() {
        //validation logic to be implemented
        //this.router.navigate(['/dashboard', { id:1234 }]);
    }  
}