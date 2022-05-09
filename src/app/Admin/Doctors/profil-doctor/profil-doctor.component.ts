import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
//import * as echarts from 'echarts';
@Component({
  selector: 'app-profil-doctor',
  templateUrl: './profil-doctor.component.html',
  styleUrls: ['./profil-doctor.component.css']
})
export class ProfilDoctorComponent implements OnInit {
test : boolean =true;
test5 : boolean =true;
test2 : boolean =true;
test3 : boolean =true;
test4 : boolean =true;
admin : any ; 
imageAdmin : any ; 
retrieveResponse: any={};
base64Data: any;
roleMedical :string ="" ; 
roleDigital :string ="";
  constructor(private ar : ActivatedRoute , private service : AdminService , private router : Router)
  {
    ar.params.subscribe(val => {
      this.ngOnInit();
    })
  }
 
  ngOnInit() {
    this.service.getUtilisateur(parseInt(localStorage.getItem("idAdmin"))).subscribe(res=>{
      this.admin= res ; 
      if(this.admin.role==="Admin Medical Manager") {
        this.roleMedical=this.admin.role  ;

      }
      else{
       this.roleDigital=this.admin.role ; 
      }
      this.roleDigital=this.admin.role  ;
      if(this.admin.image ==null){
        this.imageAdmin="./assets/imagesD/faces/user.jpg"
      }
      else{
      this.retrieveResponse = this.admin;
      this.base64Data = this.retrieveResponse.image;
      this.imageAdmin = 'data:image/jpeg;base64,' + this.base64Data; }
      console.log(this.admin)
        }) ; 
      
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

 toggleBilling() {
 (document.getElementById('BenchForcastId_'+'prenom') as HTMLButtonElement).disabled = true;

  }
  testIcone1(){
    this.test=false;
  }
  testIcone2(){
    this.test2=false;
  }
  testIcone3(){
    this.test3=false;
  }
  testIcone4(){
    this.test4=false;
  }
  testIcone5(){
    this.test5=false;
  }
  logout() {
    localStorage.removeItem('nameAdmin');
    localStorage.removeItem('role');
    localStorage.removeItem('emailAdmin');
    localStorage.removeItem('idAdmin');
    localStorage.removeItem('token');
    this.service.islogin = false;
    this.router.navigate(['']);
    window.localStorage.clear();
  }
}

