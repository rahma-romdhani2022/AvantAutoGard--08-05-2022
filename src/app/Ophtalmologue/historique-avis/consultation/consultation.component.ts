import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';
import GLightbox from 'glightbox';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AvisServiceService } from 'src/app/services/avis.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {

  avisExpertAjouter : any ; 
  formGroup1: FormGroup;
  formGroup2: FormGroup;
   isLinear = false;
  name  = '';
imagePath :string=null;
user :any={};
expert : any={};
retrieveResponse: any={};
base64Data: any;
test : string = "rahma" ; 
nom_Expert : string="" ; 
id : number ; 
idConsultation:number ;
consultation: any ;
autoDetection : any ; 
images: any=[];
ress : any ; 
image1D : any ; 
image2D: any ; 
image3D: any ; 
image4D : any ; 
image5D : any ; 


image1G : any ; 
image2G: any ; 
image3G: any ; 
image4G : any ; 
image5G : any ; 
imageee : any ; 
lengthAllDemande : number ; 
allDemandes : any ; 
imagesDroite: any=[];

constructor(private _formBuilder: FormBuilder , private service : UserServiceService ,
   private router : Router , private ar : ActivatedRoute , private serviceAvis : AvisServiceService)
{
  ar.params.subscribe(val => {
    this.ngOnInit();
  })
}
ngOnInit() {
  this.serviceAvis.lengthDemandePrincipale ; 
  this.getAllDemandes(); 
  this.ar.paramMap.subscribe((x)=>{
    this.idConsultation =+ x.get('idConsultation');  }) ; 
 
    console.log( "idd consultationnnn:",this.idConsultation)
   this.getConsultationDroite();
  this.id=parseInt(localStorage.getItem("id")) ; 
  this.service.getData(parseInt(localStorage.getItem('id'))).subscribe(data=>{
    this.user=data
          if(this.user.image ==null){
            this.imagePath="./assets/imagesD/faces/user1.png"
          }
          else{
            this.imagePath=this.imagePath ; 
          
          this.retrieveResponse = this.user;
          this.base64Data = this.retrieveResponse.image;
          this.imagePath = 'data:image/jpeg;base64,' + this.base64Data; }
  
}) ;
  // mtaa dropdown 
  $( "#menu" ).on( "click", function()
  {
    $( "#menu23" ).fadeToggle( "fast" );
  });
  this.formGroup1 = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  this.formGroup2 = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
}
confimerOperation(){
  Swal.fire({
   
    icon: 'success',
    title: 'Votre avis a  bien ajouter',
    showConfirmButton: false,
    timer: 2000
  })
  this.router.navigate(['/accueil'])
}
getConsultationDroite(){
  this.serviceAvis.getConsultationID( this.idConsultation).subscribe((params => {
  this.consultation = params;
  console.log("consultationnnnnnnn " , this.consultation)
 if (this.consultation.image1_Gauche  == null) {
   

  }
  else {

    this.retrieveResponse = this.consultation;
    this.base64Data = this.retrieveResponse.image1_Gauche
    this.imageee = 'data:image/jpeg;base64,' + this.base64Data;
    this.images[0] = this.imageee;
    console.log("lulaa", this.images[0]);
  }

  if (this.consultation.image2_Gauche == null) {
    
  }
  else {

    this.retrieveResponse = this.consultation;
    this.base64Data = this.retrieveResponse.image2_Gauche;
    this.imageee = 'data:image/jpeg;base64,' + this.base64Data;
    this.images[1] = this.imageee;

  }

  if (this.consultation.image3_Gauche == null) {
   
  }
  else {

    this.retrieveResponse = this.consultation;
    this.base64Data = this.retrieveResponse.image3_Gauche;
    this.imageee = 'data:image/jpeg;base64,' + this.base64Data;
    this.images[2] = this.imageee;

  }
  if (this.consultation.image4_Gauche == null) {
   
  }
  else {

    this.retrieveResponse = this.consultation;
    this.base64Data = this.retrieveResponse.image4_Gauche;
    this.imageee = 'data:image/jpeg;base64,' + this.base64Data;
    this.images[3] = this.imageee;
  
  }
  if (this.consultation.image5_Gauche == null) {
  
  }
  else {

    this.retrieveResponse = this.consultation;
    this.base64Data = this.retrieveResponse.image5_Gauche;
    this.imageee = 'data:image/jpeg;base64,' + this.base64Data;
    this.images[4] = this.imageee;
  
  }



}));
}
getConsultationGauche(){
  this.serviceAvis.getConsultationID( this.idConsultation).subscribe((params => {
  this.consultation = params;
  console.log("consultationnnnnnnn " , this.consultation)
 if (this.consultation.image1_Droite  == null) {
   

  }
  else {

    this.retrieveResponse = this.consultation;
    this.base64Data = this.retrieveResponse.image1_Droite;
    this.imageee = 'data:image/jpeg;base64,' + this.base64Data;
    this.imagesDroite[0] = this.imageee;
    console.log("lulaa", this.images[0]);
  }

  if (this.consultation.image2_Droite == null) {
    
  }
  else {

    this.retrieveResponse = this.consultation;
    this.base64Data = this.retrieveResponse.image2_Droite;
    this.imageee = 'data:image/jpeg;base64,' + this.base64Data;
    this.imagesDroite[1] = this.imageee;

  }

  if (this.consultation.image3_Droite == null) {
   
  }
  else {

    this.retrieveResponse = this.consultation;
    this.base64Data = this.retrieveResponse.image3_Droite;
    this.imageee = 'data:image/jpeg;base64,' + this.base64Data;
    this.imagesDroite[2] = this.imageee;

  }
  if (this.consultation.image4_Droite == null) {
   
  }
  else {

    this.retrieveResponse = this.consultation;
    this.base64Data = this.retrieveResponse.image4_Droite;
    this.imageee = 'data:image/jpeg;base64,' + this.base64Data;
    this.imagesDroite[3] = this.imageee;
  
  }
  if (this.consultation.image5_Droite == null) {
  
  }
  else {

    this.retrieveResponse = this.consultation;
    this.base64Data = this.retrieveResponse.image5_Droite;
    this.imageee = 'data:image/jpeg;base64,' + this.base64Data;
    this.imagesDroite[4] = this.imageee;
  
  }



}));
}
getAllDemandes(){
    /*this.avisService.getAllDemandes().subscribe(data=>{
    this.allDemandes=data ; 
    this.lengthAllDemande=this.allDemandes.length ; 
    console.log("tessssssssssst", this.allDemandes)
    console.log("lengrhhh", this.lengthAllDemande)
    })*/
    this.serviceAvis.getAllDemandesLastVersion().subscribe(data=>{
      this.allDemandes=data ; 
      this.serviceAvis.lengthDemandePrincipale =this.allDemandes.length ; 
      console.log("tessssssssssst", this.allDemandes)
      console.log("lengrhhh", this.lengthAllDemande) })

}
 logout() {
  localStorage.removeItem('name');
  localStorage.removeItem('token');
  this.service.islogin = false;
 this.router.navigate(['']);
    ///location.reload();
}
}