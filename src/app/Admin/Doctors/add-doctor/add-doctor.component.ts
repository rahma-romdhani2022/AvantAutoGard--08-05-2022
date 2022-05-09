import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogConfig } from "@angular/material";
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { MatDialogRef , MAT_DIALOG_DATA} from "@angular/material/dialog";
import Swal from 'sweetalert2'
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  doneImage : any ; 
  experts : any ; 
fileData: File = null;
 url : FileReader ;
 selectedFile: File;
 imagePath1 : any ;
 testImage : string = null ; 
 uploadImageData : any ;
 expert : any ; 
 idExpertAjouterActuellement : number ; 
 test : any ;
 expertsAdminMedical : any[]=[] ; 
 constructor(private dialog: MatDialog ,private service :AdminService , private userService : UserServiceService ,  
             private router : Router ,@Inject(MAT_DIALOG_DATA)  public data,
             public dialogRef:MatDialogRef<AddDoctorComponent> ) {}

  ngOnInit() {
    this.imagePath1="./assets/imagesD/faces/user.jpg" ;
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

onSelectFile(event ) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url
    this.selectedFile = event.target.files[0];
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.imagePath1 = reader.result;
    }
  }
}
  
  registre(fl: NgForm){
    this.uploadImageData = new FormData();
    this.uploadImageData.append('imageFile', this.selectedFile);
    this.expert ={
      "nomPrenom": fl.value.nom,
      "email": fl.value.email,
      "username": fl.value.username,
      "password": fl.value.pwd,
      "role" : "Expert",
      "gender":fl.value.gender,
      "telephone":fl.value.telephone,
    
}
  console.log(this.expert)
  console.log(localStorage.getItem('idAdmin'))
  console.log(fl.value.nom)
  this.uploadImageData = new FormData();
  if(this.selectedFile== null){
    this.doneImage = null ;
    console.log(this.doneImage) }
    else{
      this.doneImage=this.selectedFile
    }
   this.uploadImageData.append('imageFile', this.doneImage);
  //this.uploadImageData.append('imageFile', this.selectedFile);
  console.log(this.uploadImageData)    
    this.service.AddExpertAvecAdmin(parseInt(localStorage.getItem('idAdmin'))  ,  this.expert ).
    subscribe( data => {
      this.idExpertAjouterActuellement = data ; 
      console.log( this.idExpertAjouterActuellement);
      if(this.selectedFile != null){
      this.service.updateImageExpert( this.idExpertAjouterActuellement , this.uploadImageData).subscribe();}
      console.log(this.expert)
      console.log(localStorage.getItem('idAdmin'))
      console.log(this.uploadImageData )
      console.log(fl.value.nom)
      
     this.service.getAllExpertsParIdAdminMedical(parseInt(localStorage.getItem("idAdmin"))).subscribe(data=>{
        this.expertsAdminMedical =data ; 
        this.service.allExpertsDeAdminX = this.expertsAdminMedical ; 
        console.log("hygqs" ,this.expertsAdminMedical  );
       this.service.getAllExpertsParIdAdminMedicalNumber(parseInt(localStorage.getItem("idAdmin"))).subscribe(data=>{
        this.service.lengthAllExpertsDeAdminX =data ; 
        console.log("hygqs length" ,this.service.lengthAllExpertsDeAdminX  );
      })
    })
     /*this.service.getAllExperts("expert").subscribe(
      response =>{this.service.expertsData = response;
      this.service.testTab = this.service.expertsData.length;}
     );*/
     this.dialogRef.close();
     this.router.navigate(['/All-Doctors']);
    } 
    ,err=>{
  
      Swal.fire({
        icon: 'error',
        title: 'Erreur ...',
        text: ' Identifiant de utilisateur ou adresse email existent déja !'
      })
    //this.invalidLogin = true
    }
    //this.invalidLogin = true
    
 )
 
  }
 /*getAllDrsExperts(){
      this.service.getAllExperts("expert").subscribe(data=>{
        this.experts=data;
      });
    }*/
    getAllDrsExperts(){
      this.service.getAllExperts("expert").subscribe(data=>{
      this.service.expertsData=data;
      this.service.testTab = this.service.expertsData.length;})
      }
  onClear(){

 /*autre code */

    this.onClose11();
 }
 onClose11(){
   this.dialogRef.close();
 }
 changeImage(){
  this.imagePath1="./assets/imagesD/faces/user.jpg" ; 
  this.testImage = null ;
}
}