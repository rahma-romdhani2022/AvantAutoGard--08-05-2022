import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  testImage : string = null ; 
  uploadImageData : any 
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResponse: any;
  message: string;
  imageName: any;
  url :any ;
imagePath :any ; //string=null;
user : any ; 
id : number ; 
gender :string ="";
  constructor(public route: Router, private ar: ActivatedRoute,
    private httpClient : HttpClient , public service: UserServiceService ){
      ar.params.subscribe(val => {
        this.ngOnInit();
      })
    }

  ngOnInit( ){

 this.ar.paramMap.subscribe((x)=>{
  this.id =+ x.get('id');
  console.log("id : " , this.id);
  console.log("file a selectionner " , this.selectedFile)
  this.service.getData(parseInt(localStorage.getItem('id'))).subscribe(data=>{
    this.user=data
   
    console.log(this.user.image)
          if(this.user.image ==null){
            this.imagePath="./assets/imagesD/faces/user1.png"
          }
          else{
          this.retrieveResponse = this.user;
          this.base64Data = this.retrieveResponse.image;
          this.imagePath = 'data:image/jpeg;base64,' + this.base64Data; }
          this.gender = this.user.gender ;
          console.log("gender",this.gender)
}) ;
}),

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
        this.imagePath = reader.result;
      }
    }
  }
  fonction1(){
    Swal.fire({
     
      icon: 'success',
      title: 'Votre Profile  a changer ',
      showConfirmButton: false,
      timer: 2000
    })
    this.route.navigate(['/PageProfile'])
  }
  modifierProfile(f:NgForm){
    this.service.updatedata(this.id , f.value).subscribe(()=>{
      console.log(f.value)
      console.log(this.selectedFile);
       this.uploadImageData = new FormData();
       this.uploadImageData.append('imageFile', this.selectedFile);
       console.log(this.selectedFile)
       if(this.selectedFile != null){
       this.service.updateImage(this.id ,this.uploadImageData).subscribe( response=>
         {
           this.service.expertModifier=response ; 
         }
       );}
       this.route.navigate(['/PageProfile/'+this.id])
       Swal.fire({
        icon: 'success',
        title: 'Votre Profile  a changer ',
        showConfirmButton: false,
        timer: 2000
      })
    } , err=>{
      alert("Opps il y 'a un Probléme , username  ou email  existent déja ")
    })
  }
  changeImage(){
    this.imagePath="./assets/imagesD/faces/user.jpg" ; 
    this.testImage = null ;
  }
  }