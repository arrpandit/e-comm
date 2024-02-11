import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj :any={
    userName : "",
    password : ""
  }

  onLogin(){
    if(this.loginObj.userName=="admin" && this.loginObj.password=="admin"){
      this.router.navigateByUrl("/products")
    }else{
      alert("wrong credentials----")
    }
  }

  constructor(private router:Router){}
}
