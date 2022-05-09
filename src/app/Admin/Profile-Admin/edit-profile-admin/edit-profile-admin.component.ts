import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-edit-profile-admin',
  templateUrl: './edit-profile-admin.component.html',
  styleUrls: ['./edit-profile-admin.component.css']
})
export class EditProfileAdminComponent implements OnInit {
  admin : any ; 
  imageAdmin : any ; 
  retrieveResponse: any={};
  base64Data: any;
  selectedFile: File;
  uploadImageData : any ;
  doneImage: any ; 
  imagePath2 : any;
  user :  any ; 
    constructor(private ar : ActivatedRoute , private service : AdminService  , private router : Router ) 
    {
      ar.params.subscribe(val => {
        this.ngOnInit();
      })
    }

  ngOnInit() {
    this.service.getUtilisateur(parseInt(localStorage.getItem("idAdmin"))).subscribe(res=>{
      this.user=res ; 
      if(this.user.role === "Admin Medical Manager"){
       console.log(parseInt(localStorage.getItem('idAdmin')))
       console.log(localStorage.getItem("nameAdmin"))
       this.service.getAdminMedicall(parseInt(localStorage.getItem('idAdmin'))).subscribe(data=>{
         this.service.AdminConnecte = data 
         this.admin= this.service.AdminConnecte 
        // console.log( this.admin)
               if(this.admin.image ==null){
                 this.imageAdmin="./assets/imagesD/faces/user.jpg"
               }
               else{
               this.retrieveResponse = this.admin;
               this.base64Data = this.retrieveResponse.image;
               this.imageAdmin = 'data:image/jpeg;base64,' + this.base64Data; }
              // console.log(this.imageAdmin)
              }) ;
                
      }
      else{
        if(this.user.role === "Admin Digital Manager"){
         this.service.getAdminDigitall(parseInt(localStorage.getItem('idAdmin'))).subscribe(data=>{
           this.service.AdminConnecte = data;
           this.admin= this.service.AdminConnecte  ; 
                 if(this.admin.image ==null){
                   this.imageAdmin="./assets/imagesD/faces/user.jpg"
                 }
                 else{
                 this.retrieveResponse = this.admin;
                 this.base64Data = this.retrieveResponse.image;
                 this.imageAdmin = 'data:image/jpeg;base64,' + this.base64Data; } }) ;
            
        }
      }
     })
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
      }
      onSelectFile(event ) {
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();
          reader.readAsDataURL(event.target.files[0]); // read file as data url
          this.selectedFile = event.target.files[0];
          reader.onload = (event) => { // called once readAsDataURL is completed
            this.imageAdmin = reader.result;
          }
        }
      }
      modifierProfileAdmin(form:NgForm){
        this.doneImage = this.selectedFile ;
       /* this.service.updateProfileAdminMedical(parseInt(localStorage.getItem("idAdmin")), form.value).subscribe(()=>{
          console.log(form.value)
          console.log(localStorage.getItem("idAdmin"))
          console.log(this.selectedFile);
           this.uploadImageData = new FormData();
           if(this.selectedFile== null){
            this.doneImage = this.admin.image ;
            console.log(this.doneImage) 
            this.clicker();}
            else{*/
          if(this.doneImage == null){
            this.clicker();
          }
       else{
        this.uploadImageData = new FormData();
        this.uploadImageData.append('imageFile', this.selectedFile);
       //  console.log(this.selectedFile)
         this.service.updateImageProfileAdminMedical(parseInt(localStorage.getItem("idAdmin")),this.uploadImageData).subscribe(
          data=>{
               localStorage.setItem("testvar",(1).toString())
                 this.service.AdminConnecte=data ; 
           },
         err=>{
          alert("Opps il y 'a un Probléme , username  ou email  existent déja ")
        })
        
         this.clicker();
      
       }
        
      }
      clicker(){
        $('.cardFlip').toggleClass('flipped');
        //this.router.navigate(['/Profile-Admin'])
      }
  }


