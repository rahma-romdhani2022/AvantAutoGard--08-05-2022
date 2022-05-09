import { Component, OnInit , Inject } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralisteService } from 'src/app/services/generaliste.service';
import { MatDialogRef , MAT_DIALOG_DATA} from "@angular/material/dialog";
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-edit-mg',
  templateUrl: './edit-mg.component.html',
  styleUrls: ['./edit-mg.component.css']
})
export class EditMGComponent implements OnInit {
  constructor( private service : GeneralisteService ,  private router : Router 
    ,@Inject(MAT_DIALOG_DATA)  public data,
    public dialogRef:MatDialogRef<EditMGComponent> ) {}
  user : any ; 
  imagePath2 :any  ; 
  gender : string ; 
  retrieveResponse  : any  ;
  base64Data : any  ;
  uploadImageData : any ;
  selectedFile: File;
  testImage : string = null ; 
  ngOnInit() {
    console.log("id de de MG a modifier " , localStorage.getItem("idMgAModifier"))
    this.service.getUtilisateur(parseInt(localStorage.getItem("idMgAModifier"))).subscribe(data=>{
      this.user=data
      console.log(this.user)
      console.log(this.user.image)
             if(this.user.image ==null){
               this.imagePath2="./assets/imagesD/faces/user.jpg" ;
             }
             else{
             this.retrieveResponse = this.user;
             this.base64Data = this.retrieveResponse.image;
             this.imagePath2 = 'data:image/jpeg;base64,' + this.base64Data;
            console.log(this.imagePath2) }
             this.gender = this.user.gender ;
           
   }) ;
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
       this.imagePath2 = reader.result;
     }
   }
 }
   

     
 modifierProfile(f:NgForm){
   this.service.updateGeneraliste(parseInt(localStorage.getItem("idMgAModifier")), f.value).subscribe(()=>{
     console.log(f.value)
     console.log(this.selectedFile);
      this.uploadImageData = new FormData();
       if(this.selectedFile !== null){
      this.uploadImageData.append('image', this.selectedFile);
      console.log(this.selectedFile)
      this.service.updateImageGeneraliste(parseInt(localStorage.getItem("idMgAModifier")),this.uploadImageData).subscribe();}
      this.service.getAllGeneralistes().subscribe(
       response =>{this.service.generalistes = response;} );
      this.dialogRef.close();
      this.router.navigate(['/Drs']);
      const Toast = Swal.mixin({
        toast: true,
        background: '#a5dc86',
        position: 'top-right',
        iconColor: 'white',
        customClass: {
          popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
      })
     Toast.fire({
        icon: 'success',
        title: 'Profile de médecin a changé'
      })
     }, err=>{
     alert("Opps il y 'a un Probléme , username  ou email  existent déja ")
   })
 }
  /*getAllDrsExperts(){
       this.service.getAllExperts("expert").subscribe(data=>{
         this.experts=data;
       });
     }*/
     getAllGeneralistess(){
       this.service.getAllGeneralistes().subscribe(data=>{
         this.service.generalistes=data;})
       }
   onClear(){
 
  /*autre code */
 
     this.onClose();
  }
  onClose(){
    this.dialogRef.close();
  }
  
  
  changeImage(){
    //this.imagePath1="./assets/imagesD/faces/user.jpg" ; 
    this.testImage = null ;
  }
 }
  
