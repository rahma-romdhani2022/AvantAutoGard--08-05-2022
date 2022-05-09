import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { FormsModule } from '@angular/forms';  
import { NgForm } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { DatePipe }         from '@angular/common';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-login-ophtalmologue',
  templateUrl: './login-ophtalmologue.component.html',
  styleUrls: ['./login-ophtalmologue.component.css']
})
export class LoginOphtalmologueComponent implements OnInit {
  user: any={};
test : string ; 
  errorMessage:string;  
  name : string;  
  Wdate;
  annee : 0;
  loginForm:  FormGroup; 
  
  constructor(private router:Router,private userService : UserServiceService) { }    
ngOnInit() {
  this.userService.islogin = false;
  this.userService.admin = false;
  this.userService.expert = false;
  /***********************  checkbox de eye de password ************/
  $(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  
 
}
login1(fl:NgForm){
  this.userService.login(fl.value.nom, fl.value.pwd).subscribe(data=>{
  this.user = data;
  this.userService.islogin = true;
    localStorage.setItem("name", this.user.username);//kn name
    localStorage.setItem("role", this.user.role);
    localStorage.setItem("email", this.user.email);
    localStorage.setItem("id", this.user.id);

    let accessToken = "Bearer " + this.user.accessToken;
    localStorage.setItem("token", accessToken);
    if(this.user.role === "expert"){
      this.router.navigate(['/accueil']);
    }
    else{
      console.log("error")
      Swal.fire({
        title: 'Vérifier votre identifiant et votre  mot de passe  !!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })  
    }
  
     
   }
    ,err=>{
  
    alert ("email ou mot de passe est invalide !!?");
    //this.invalidLogin = true
    })}
  fonction1(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'
    })
  }
}
