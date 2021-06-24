import { Injectable } from '@angular/core';
import { User,loginUser } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public newUser: User = {
    name:'',
    email:'',
    contact:'',
    address:'',
    password:'',
  }

  public existingUser : loginUser= {
    email:'',
    password:''
  }



  constructor(private http:HttpClient) { }

  register(user:User)
  {
    return this.http.post('http://localhost:3500/admin',user);
  }

  login(existUser: loginUser)
  {
    return this.http.post('http://localhost:3500/auth',existUser);
  }


  //to store the token after login

  setToken(token:string)
  {
    localStorage.setItem('usertoken',token);
  }

  getToken()
  {
    return localStorage.getItem('usertoken');
  }

  deleteToken()
  {
    localStorage.removeItem('usertoken');
  }


    //to store userid

    setuserId(id:string)
    {
      localStorage.setItem('userid',id);
    }
    getuserId()
    {
      return localStorage.getItem('userid');
    }
    deleteuserId()
    {
      localStorage.removeItem('userid');
    }

  // To Display User Profile in Dashboard

  display(id:any){
    return this.http.get('http://localhost:3500/userinfo/'+id);
  }

// Get Token And Decoded

    getPayload()
    {
      var token= this.getToken();
      if(token)
      {
        var userpayload = atob(token.split('.')[1]);
        return JSON.parse(userpayload);
      }
      else
      {
        return null;
      }

    }

    isloggedIn()
    {
      var userpayload=this.getPayload();
      if(userpayload)
      {
        return userpayload.exp>Date.now()/1000;
      }
      else
      {
        return null;
      }
    }


}

