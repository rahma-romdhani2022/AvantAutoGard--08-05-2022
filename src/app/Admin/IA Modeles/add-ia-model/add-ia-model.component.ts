import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2/dist/sweetalert2.min.js'
@Component({
  selector: 'app-add-ia-model',
  templateUrl: './add-ia-model.component.html',
  styleUrls: ['./add-ia-model.component.css']
})
export class AddIAModelComponent implements OnInit {

  constructor(private service : AdminService , private router : Router) { }
 test : any ; 
  retrieveResponse: any={};
  base64Data: any;
  id : number ;
  admin : any ; 
  imagePath : string ;
  username : string ;  
  role : string ;
  adminDigital:string ="adminDigital";
  adminMedical:string="adminMedical"
  roleMedical :string ="";
  roleDigital :string =""; 
  selectedFile : File ; 
  image : any ; 
  testImage : any ; 
  testSelectedFile : boolean=false ;
  ngOnInit(){
    this.FileSelectedFunction() ; 
    this.service.getUtilisateur(parseInt(localStorage.getItem("idAdmin"))).subscribe(res=>{
     this.test=res ; 
     console.log(this.test.role);
     if(this.test.role === "Admin Medical Manager"){
       this.roleMedical=this.test.role ; 
      this.username = localStorage.getItem("nameAdmin");
      console.log(parseInt(localStorage.getItem('idAdmin')))
      console.log(localStorage.getItem("nameAdmin"))
      this.service.getAdminMedicall(parseInt(localStorage.getItem('idAdmin'))).subscribe(data=>{
        this.admin=data
              if(this.admin.image ==null){
                this.imagePath="./assets/imagesD/faces/user.jpg"
              }
              else{
              this.retrieveResponse = this.admin;
              this.base64Data = this.retrieveResponse.image;
              this.imagePath = 'data:image/jpeg;base64,' + this.base64Data; }
              console.log(this.imagePath)
              this.role=this.admin.role;  }) ;
     }
     else{
       if(this.test.role === "Admin Digital Manager"){
        this.roleDigital=this.test.role ; 
        this.username = localStorage.getItem("nameAdmin");
        console.log(parseInt(localStorage.getItem('idAdmin')))
        console.log(localStorage.getItem("nameAdmin"))
        this.service.getAdminDigitall(parseInt(localStorage.getItem('idAdmin'))).subscribe(data=>{
          this.admin=data
                if(this.admin.image ==null){
                  this.imagePath="./assets/imagesD/faces/user.jpg"
                }
                else{
                this.retrieveResponse = this.admin;
                this.base64Data = this.retrieveResponse.image;
                this.imagePath = 'data:image/jpeg;base64,' + this.base64Data; }
                console.log(this.imagePath)
                this.role=this.admin.role;  }) ;
       }
     }
    })

  }
  onSelectFile(event ) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      this.selectedFile = event.target.files[0];
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.image = reader.result;
        this.testImage = this.image ; 
        if(this.testImage !== null)
        {
          this.testSelectedFile = true ; 
        }
      }
    }
   
  }
  FileSelectedFunction(){
    $({ countNum: $('.bar').html() }).animate({ countNum: 100}, {
      duration: 500,
      easing: 'linear',
      step: function () {
      $('.bar').html(Math.floor(+this.countNum) + "");
  },
  complete: function () {
      $('.bar').html(this.countNum + "");
      //alert('finished');
  }
  });
  }
  boutnClicked(){
    if(this.selectedFile === null){
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        background:'#f27474 ',
        iconColor: 'white',
        customClass: {
          popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
      })
     Toast.fire({
        icon: 'error',
        title: 'pas de fichier choisie !!'
      })
    }
    else{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-right',
      background:'#a5dc86',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast'
      },
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true
    })
   Toast.fire({
      icon: 'success',
      title: 'Fichier téléchargé'
    })
    this.router.navigate(['/IA_Modeles']);
  }
  this.testSelectedFile =false ; 
  this.selectedFile =null ; 
  }
  supprimerFichier(){
    this.testSelectedFile = false ; 
    
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
