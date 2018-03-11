import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public tasks:any;
  constructor(public auth:AuthenticationService, private router:Router) { }

  ngOnInit() {
    this.auth.getTasks().subscribe(data=>{
      this.tasks=data;
    }, err=>{
      this.router.navigateByUrl("/login");
    })
  }

  newTask(){
    this.router.navigateByUrl("/new-task")
  }

}
