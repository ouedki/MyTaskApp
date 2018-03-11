import { Component } from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private auth:AuthenticationService, private  router:Router){}

  onLogout(){
    this.auth.logout();
    this.router.navigateByUrl("/login");
  }
}
