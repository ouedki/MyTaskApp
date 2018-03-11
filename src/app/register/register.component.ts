import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser;
  constructor(private auth:AuthenticationService, private router:Router) { }

  ngOnInit() {
  }

  addUser(user){
    this.auth.saveUser(user).subscribe(data=>{
      this.newUser=data;
      this.router.navigateByUrl("/login")
    },err =>{
      this.router.navigateByUrl("/login")
    })

  }



}
