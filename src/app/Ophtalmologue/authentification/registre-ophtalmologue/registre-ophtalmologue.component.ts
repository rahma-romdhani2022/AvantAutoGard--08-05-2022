import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'
import * as $ from 'jquery';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-registre-ophtalmologue',
  templateUrl: './registre-ophtalmologue.component.html',
  styleUrls: ['./registre-ophtalmologue.component.css']
})
export class RegistreOphtalmologueComponent implements OnInit {
  constructor(public crudApi: UserServiceService , private router : Router) { }
expert:any ;
gender:string='';
test :boolean=false;
  ngOnInit(): void {
     /***********************  checkbox de eye de password 1 ************/
  $(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
   /***********************  checkbox de eye de password  2 ************/
  $(".toggle-password2").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  }
  getData(fl:NgForm){
 
  }
  registre(fl: NgForm){
    this.expert ={
      "email": fl.value.email,
      "username": fl.value.username,
      "nomPrenom":fl.value.nom,
      "password": fl.value.pwd,
      "role" : "Expert",
      "gender":fl.value.gender,
      "telephone":fl.value.telephone,
}
if (fl.value.pwd==fl.value.pwdc){
    this.crudApi.createData(this.expert).
    subscribe( data => {
      console.log(this.expert)
      this.router.navigate(['/Login']);
    } 
    ,err=>{
  
      Swal.fire({
        icon: 'error',
        title: 'Oppps ...',
        text: 'Il ya un probléme !!!!'
      })
    //this.invalidLogin = true
    }
 )}
 else{
  console.log("error")
  Swal.fire({
    title: 'Vérifier votre mot de passe Svp !!',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  }) 
this.test=true;}
}
}
