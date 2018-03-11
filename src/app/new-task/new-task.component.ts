import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  newTask;
  constructor(private auth:AuthenticationService, private router:Router) { }

  ngOnInit() {
  }

  saveTask(task){
    this.auth.saveTask(task).subscribe(data=>{
      this.newTask=data;
      console.log(this.newTask);
      this.router.navigateByUrl("/tasks")
    }, error2 => {
      this.router.navigateByUrl("/login")
    })
  }
}
