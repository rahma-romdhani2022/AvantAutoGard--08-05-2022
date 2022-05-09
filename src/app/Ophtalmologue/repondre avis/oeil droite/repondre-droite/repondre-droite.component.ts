import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AvisServiceService } from 'src/app/services/avis.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-repondre-droite',
  templateUrl: './repondre-droite.component.html',
  styleUrls: ['./repondre-droite.component.css']
})

export class RepondreDroiteComponent implements OnInit {
 
allDemandes : any ; 
lengthAllDemande : number ; 
hide = true;
formGroup1: FormGroup;
formGroup2: FormGroup;
isLinear = false;
name  = '';
imagePath :string;
user :any={};
expert : any={};
retrieveResponse: any={};
base64Data: any;
test : string = "rahma" ; 
nom_Expert : string="" ; 
idConsultation : number ; 
id : number ;
consultation: any ;
demandeD : number ; 
demandeG : number ; 
maladieDroiteDeAutoDetection : string ; 
graviteDroiteDeAutodetection : number
testMaladieGauche : string='' ;
testMaladieDroite : string ;  
testGraviteGauche : number ; 
testGraviteDroite : number ; 
AutoDetection : any={}
patientSain : number ; 
existenceAvisExpertEnGeneral : number = 2 ; 
existenceAvisExpertDroite: number = 2 ; 
existenceAvisExpertGauche : number = 2 ; 
/************ */
images: any[] = [];
  idAutoDetection: any
  retrieveResponse2: any
  imagePath1: any; //string=null;
  base64Data2: any;
  base64 = '';
  image1 : any ;
  image2 : any ;
  image3 : any ;
  image4 : any ;
  image5 : any ;
  imageee:any ; 
  testD : boolean =false
  nomDePatient : string ; 
  dateNaissancePAtient : string ; 
  genderPatient : string ; 
  antecedantsPatiens : string  ; 
  constructor(private _formBuilder: FormBuilder , private service : UserServiceService , private router : Router ,
     private ar : ActivatedRoute , private serviceAvis : AvisServiceService)
  {
    ar.params.subscribe(val => {
      this.ngOnInit();
      this. getConsultation(); 
    })
  }
  ngOnInit() {

     this.serviceAvis.lengthDemandePrincipale ; 
    this.getAllDemandes(); 
    this.ar.paramMap.subscribe((x)=>{
    this.idConsultation =+ x.get('idConsultation');  }) ; 
    this. getConsultation(); 
  
    this.id=parseInt(localStorage.getItem("id")) ; 
    this.service.getData(parseInt(localStorage.getItem('id'))).subscribe(data=>{
      this.user=data
            if(this.user.image ==null){
              this.imagePath="./assets/imagesD/faces/user1.png"
            }
            else{

            this.retrieveResponse = this.user;
            this.base64Data = this.retrieveResponse.image;
            this.imagePath = 'data:image/jpeg;base64,' + this.base64Data; }
    
  }) ;
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

  getConsultation(){
    this.serviceAvis.getConsultationID( this.idConsultation).subscribe((params => {
    this.consultation = params;
    this.demandeD=this.consultation.demandeAvisD ;
   this.AutoDetection = this.consultation.autoDetection  ; 
  if(this.AutoDetection.maladieDroite === "Sain"  ){
    this.patientSain =1 ; 
  }
  else{
    this.patientSain=0
  }
   if( this.AutoDetection.avisExpert === null){
       this.existenceAvisExpertEnGeneral = 0 
       this.existenceAvisExpertDroite = 0 ;
       this.existenceAvisExpertGauche = 0 ; 
}
else {
if(this.AutoDetection.avisExpert.maladieDroite === null){
    this.existenceAvisExpertDroite = 0;
    this.existenceAvisExpertGauche =  1}
  
else{
    this.existenceAvisExpertDroite = 1 ;  
    this.existenceAvisExpertGauche =  0 }
}
 /* if( this.AutoDetection.avisExpert === null){
        this.existenceAvisExpertEnGeneral = 0 
        this.existenceAvisExpertDroite = 2 ;
        this.existenceAvisExpertGauche = 2 ; 
  }
  else {
    if(this.AutoDetection.avisExpert.maladieDroite === null){
        this.existenceAvisExpertDroite = 0;
        this.existenceAvisExpertGauche =  1}
      
    else{
        this.existenceAvisExpertDroite = 1 ;  
        this.existenceAvisExpertGauche =  0 }
}*/
   // console.log("demande d chniyaa " , this.demandeD)
    this.demandeG=this.consultation.demandeAvisG ; 
   // this.maladieDroiteDeAutoDetection=this.consultation.autoDetection.maladieDroite ; 
   // this.graviteDroiteDeAutodetection = this.consultation.autoDetection.graviteDroite ; 
  // console.log("maladie  droite " , this.maladieDroiteDeAutoDetection , "gravite de maladie droite "  , this.graviteDroiteDeAutodetection)
    this.nomDePatient=this.consultation.patient.username ; 
    this.genderPatient=this.consultation.patient.gender ; 
    this.dateNaissancePAtient=this.consultation.patient.dateNaiss ; 
    this.antecedantsPatiens=this.consultation.patient.antecedant ; 

    console.log("consultationnnnnnnn " , this.consultation) ; 
    if (this.consultation.image1_Droite  == null) {
     

    }
    else {

      this.retrieveResponse = this.consultation;
      this.base64Data = this.retrieveResponse.image1_Droite
      this.imageee = 'data:image/jpeg;base64,' + this.base64Data;
      this.images[0] = this.imageee;
      this.image1='data:image/jpeg;base64,' + this.base64Data;
     
    }

    if (this.consultation.image2_Droite== null) {
      
    }
    else {

      this.retrieveResponse = this.consultation;
      this.base64Data = this.retrieveResponse.image2_Droite;
      this.imageee = 'data:image/jpeg;base64,' + this.base64Data;
      this.images[1] = this.imageee;
      this.image2='data:image/jpeg;base64,' + this.base64Data;
    
    }

    if (this.consultation.image3_Droite == null) {
     
    }
    else {

      this.retrieveResponse = this.consultation;
      this.base64Data = this.retrieveResponse.image3_Droite;
      this.imageee = 'data:image/jpeg;base64,' + this.base64Data;
      this.images[2] = this.imageee;   
      this.image3='data:image/jpeg;base64,' + this.base64Data;
     
    }
    if (this.consultation.image4_Droite== null) {
     
    }
    else {

      this.retrieveResponse = this.consultation;
      this.base64Data = this.retrieveResponse.image4_Droite;
      this.imageee = 'data:image/jpeg;base64,' + this.base64Data;
      this.images[3] = this.imageee;
      this.image4='data:image/jpeg;base64,' + this.base64Data;
    }
    if (this.consultation.image5_Droite == null) {
    
    }
    else {

      this.retrieveResponse = this.consultation;
      this.base64Data = this.retrieveResponse.image5_Droite;
      this.imageee = 'data:image/jpeg;base64,' + this.base64Data;
      this.images[4] = this.imageee;
      this.image5='data:image/jpeg;base64,' + this.base64Data;
    }

  
  
}));
  }
  getAllDemandes(){

    this.serviceAvis.getAllDemandesLastVersion().subscribe(data=>{
      this.allDemandes=data ; 
      this.serviceAvis.lengthDemandePrincipale=this.allDemandes.length ; })
  } 
  disabledButton(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-right',
      iconColor: 'white',
      background:"#87adbd",
      width:'400px',
      customClass: {
        popup: 'colored-toast'
      },
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true
    })


    Toast.fire({
      icon: 'info',
      title: 'cette demande admet un avis déjà'
   
    })
  }
  logout() {
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    this.service.islogin = false;
    this.router.navigate(['']);
    window.localStorage.clear();
      //location.reload();
  }
}