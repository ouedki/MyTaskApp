import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class AuthenticationService{

  private  host:String = "http://localhost:8080";
  jwtToken=null;
  roles:Array<any>;

  constructor(private http:HttpClient) {}

  login(user){
    return this.http.post(this.host+"/login", user, {observe:'response'})
  }

  saveToken(jwt:string){
    this.jwtToken=jwt;
    localStorage.setItem('token', jwt);
    let tokenHelper = new JwtHelper();
    this.roles=tokenHelper.decodeToken(this.jwtToken).roles;
  }

  loadToken(){
    this.jwtToken = localStorage.getItem('token');
  }

  getTasks(){
    if (this.jwtToken==null){ this.loadToken();}
    return this.http.get(this.host+"/tasks", {headers: new HttpHeaders({"Authorization":this.jwtToken})});
  }

  logout(){
    this.jwtToken=null;
    localStorage.removeItem('token');
  }

  saveTask(task){
    return this.http.post(this.host+"/tasks", task, {headers: new HttpHeaders({"Authorization":this.jwtToken})})
  }

  isAdmin(){
    for (let r of this.roles){
      if(r.authority=="ADMIN"){
        return true;
      }
    }
    return false;
  }

  saveUser(user){
    console.log(user)
    if (this.jwtToken==null){ this.loadToken();}
    console.log(this.jwtToken)
    return this.http.post(this.host+"/register", user, {headers: new HttpHeaders({"Authorization":this.jwtToken})})
  }
}
