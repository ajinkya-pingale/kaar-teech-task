import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public errorMsg = [];
  loginForm: FormGroup;
  credentials: any = {};
  fireBaseToken: any;
  public showPassword: boolean = false;
  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email:[null,[Validators.required, Validators.email]],
      password:[null,[Validators.required]],
    })
  }


  onSubmit(){
    console.log(this.loginForm.value)

    if(this.loginForm.valid){
      let data = {
        'email': this.loginForm.value.email
      }

      if(this.loginForm.value.email === 'kaarTech@gmail.com' && this.loginForm.value.password === '12345678' ){
        localStorage.setItem("token", 'kaarTech@gmail.com')
          localStorage.setItem("userData", JSON.stringify(data))
          this.router.navigateByUrl('/')
      }else{
        if(this.loginForm.value.email !== 'kaarTech@gmail.com'){
          let erroFields = [];
          let keyMsgMapping ={
            "email": "Please check your email id",
          }
          let keys = Object.keys(keyMsgMapping)
          for(let eachKey of keys){
            this.errorMsg.push(keyMsgMapping[eachKey])
          }
        }
        if(this.loginForm.value.password !== '12345678'){
          let erroFields = [];
          let keyMsgMapping ={
            "password": "Please check your password",
          }
          let keys = Object.keys(keyMsgMapping)
          for(let eachKey of keys){
            this.errorMsg.push(keyMsgMapping[eachKey])
          }
        }
      }
    }else{
      let keyMsgMapping ={
        "email": "Email is required",
        "password": "Password is required",
      }
      let keys = Object.keys(this.loginForm.controls)
      for(let eachKey of keys){
        if(this.loginForm.controls[eachKey]['errors']){
          this.errorMsg.push(keyMsgMapping[eachKey])
        }
      }
    }
  }


}
