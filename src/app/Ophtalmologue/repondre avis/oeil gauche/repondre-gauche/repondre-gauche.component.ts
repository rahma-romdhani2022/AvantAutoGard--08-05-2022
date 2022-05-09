import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2' ; 
import * as $ from 'jquery';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AvisServiceService } from 'src/app/services/avis.service';
import { Consultation } from 'src/app/modele/consultation';
@Component({
  selector: 'app-repondre-gauche',
  templateUrl: './repondre-gauche.component.html',
  styleUrls: ['./repondre-gauche.component.css']
})
export class RepondreGaucheComponent implements OnInit {
  testButtonAjoutEnGeneralDroite :boolean =false ; 
  hide = true;
  formGroup1: FormGroup;
  formGroup2: FormGroup;
   isLinear = false;
  name  = '';
imagePath :string=null;
user :any={};
expert : any={};
retrieveResponse: any={};
base64Data: any;
image5 : any ;
image4 : any ; 
image3 : any ; 
image2 : any ; 
image1  : any ; 
test : string = "rahma" ; 
nom_Expert : string="" ; 
idConsultation : any ; 
id : number ;
consultation: any ;
AutoDetection : any={}
existenceAvisExpertEnGeneral : number =2 ;
existenceAvisExpertGauche  : number =2;
existenceAvisExpertDroite: number =2 ; 
testButtonAjoutEnGeneral : boolean=false ; 
demandeD : number ; 
demandeG : number ; 
allDemandes : any ; 
lengthAllDemande : number ; 
maladieGaucheDeAutoDetection : string ;
graviteGaucheDeAutodetection : number ; 
nomDePatient : string ; 
genderPatient : string ;
dateNaissancePAtient : string ;  
antecedantsPatiens : string ;
testMaladieGauche : string ; testGraviteGauche : string ; 
testMaladieGaucheAjout : number ;
/************ */
images: any[] = [];
  idAutoDetection: any
  retrieveResponse2: any
  imageee:any;
  imagePath1: any; //string=null;
  base64Data2: any;
  base64 = '';
  testMaladieDroite : string ; 
  testGraviteDroite : number ; 
  constructor(private _formBuilder: FormBuilder , private service : UserServiceService , private router : Router ,
     private ar : ActivatedRoute , private serviceAvis : AvisServiceService)
  {
    ar.params.subscribe(val => {
      this.ngOnInit();
    })
  }
  ngOnInit() { 
    this.getConsultation(); 
    this.serviceAvis.lengthDemandePrincipale ; 
    this.getAllDemandes(); 
    this.ar.paramMap.subscribe((x)=>{
    this.idConsultation =+ x.get('idConsultation'); 
    localStorage.setItem("idConsult", this.idConsultation) }) ; 
   console.log(  this.idConsultation   , "iddddddddddddddddddd")
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
    this.serviceAvis.getConsultationID(parseInt(localStorage.getItem('idConsult'))).subscribe((params => {
    this.consultation = params;
    if (this.consultation.image1_Gauche  == null) {
     

    }
    else {

      this.retrieveResponse = this.consultation;
      this.base64Data = this.retrieveResponse.image1_Gauche ; 
      this.imageee = 'data:image/jpeg;base64,' + this.base64Data;
      this.images[0] = this.imageee;
      console.log("taswirwhbjjs" , this.imageee)
     // this.image1='data:image/jpeg;base64,' + this.base64Data;
     
    }

    if (this.consultation.image2_Gauche== null) {
      
    }
    else {

      this.retrieveResponse = this.consultation;
      this.base64Data = this.retrieveResponse.image2_Gauche ;
      this.imageee = 'data:image/jpeg;base64,' + this.base64Data;
      this.images[1] = this.imageee;
      this.image2='data:image/jpeg;base64,' + this.base64Data;
    
    }

    if (this.consultation.image3_Gauche == null) {
     
    }
    else {

      this.retrieveResponse = this.consultation;
      this.base64Data = this.retrieveResponse.image3_Gauche;
      this.imageee = 'data:image/jpeg;base64,' + this.base64Data;
      this.images[2] = this.imageee;   
      this.image3='data:image/jpeg;base64,' + this.base64Data;
     
    }
    if (this.consultation.image4_Gauche== null) {
     
    }
    else {

      this.retrieveResponse = this.consultation;
      this.base64Data = this.retrieveResponse.image4_Gauche;
      this.imageee = 'data:image/jpeg;base64,' + this.base64Data;
      this.images[3] = this.imageee;
      this.image4='data:image/jpeg;base64,' + this.base64Data;
    }
    if (this.consultation.image5_Gauche == null) {
    
    }
    else {

      this.retrieveResponse = this.consultation;
      this.base64Data = this.retrieveResponse.image5_Gauche;
      this.imageee = 'data:image/jpeg;base64,' + this.base64Data;
      this.images[4] = this.imageee;
      this.image5='data:image/jpeg;base64,' + this.base64Data;
    }

  

    this.AutoDetection = this.consultation.autoDetection 
    this.demandeD=this.consultation.demandeAvisD ; 
    this.demandeG=this.consultation.demandeAvisG ; 
    this.AutoDetection = this.consultation.autoDetection  ; 
    if( this.AutoDetection.avisExpert === null){
      this.existenceAvisExpertEnGeneral = 0 
      this.existenceAvisExpertDroite = 0 ;
      this.existenceAvisExpertGauche = 0 ; 
}
else {
if(this.AutoDetection.avisExpert.maladieGauche === null){
   this.existenceAvisExpertDroite = 1;
   this.existenceAvisExpertGauche = 0}
 
else{
   this.existenceAvisExpertDroite = 0 ;  
   this.existenceAvisExpertGauche =  1 }

    /*if( this.AutoDetection.avisExpert === null){
      this.existenceAvisExpertEnGeneral = 0 
      this.existenceAvisExpertDroite = 2 ;
      this.existenceAvisExpertGauche = 2 ; 
  }
  else {
  if(this.AutoDetection.avisExpert.maladieDroite === null){
      this.existenceAvisExpertDroite = 0;
      this.existenceAvisExpertGauche =  1}
    
  else{
      this.existenceAvisExpertDroite = 1 ; } 
    //  this.existenceAvisExpertGauche =  0 
  
      if(this.AutoDetection.avisExpert.maladieGauche === null){
        this.existenceAvisExpertDroite = 1;
        this.existenceAvisExpertGauche =  0}
      
    else{
      //  this.existenceAvisExpertDroite = 0 ;  
        this.existenceAvisExpertGauche =  1 }*/
  
//////////////////////////

      /*if(this.AutoDetection.avisExpert.maladieGauche === null){
        this.existenceAvisExpertDroite = 1;
        this.existenceAvisExpertGauche =  0}
      
    else{
        this.existenceAvisExpertDroite = 0 ;  
        this.existenceAvisExpertGauche =  1 }*/
  
}
    this.maladieGaucheDeAutoDetection=this.consultation.autoDetection.maladieGauche ; 
    this.graviteGaucheDeAutodetection = this.consultation.autoDetection.graviteGauche ; 
   console.log("maladie  droite " , this.maladieGaucheDeAutoDetection , "gravite de maladie droite "  , this.graviteGaucheDeAutodetection)
    this.nomDePatient=this.consultation.patient.username ; 
    this.genderPatient=this.consultation.patient.gender ; 
    this.dateNaissancePAtient=this.consultation.patient.dateNaiss ; 
    this.antecedantsPatiens=this.consultation.patient.antecedant ; 
    if(this.consultation.autoDetection.avisExpert === null){
  
      this.testMaladieGauche = null ; 
      this.testGraviteGauche =  null ; 
       this.testMaladieDroite= null ; 
       this.testGraviteDroite =  null ; 
    }
    else {
        this.testMaladieGauche = this.consultation.autoDetection.avisExpert.maladieGauche ; 
        this.testGraviteGauche = this.consultation.autoDetection.avisExpert.graviteGauche ; 
        this.testMaladieDroite= this.consultation.autoDetection.avisExpert.maladieDroite ; 
        this.testGraviteDroite = this.consultation.autoDetection.avisExpert.graviteDroite ;
    }
    console.log("droite demande  : " , this.demandeD , "Gauche demande " , this.demandeG)
        console.log("consultationnnnnnnn " , this.consultation)
   
  
  
}));
  }  getAllDemandes(){
     /*this.avisService.getAllDemandes().subscribe(data=>{
    this.allDemandes=data ; 
    this.lengthAllDemande=this.allDemandes.length ; 
    console.log("tessssssssssst", this.allDemandes)
    console.log("lengrhhh", this.lengthAllDemande)
    })*/
    this.serviceAvis.getAllDemandesLastVersion().subscribe(data=>{
      this.allDemandes=data ; 
      this.serviceAvis.lengthDemandePrincipale=this.allDemandes.length ; 
      console.log("tessssssssssst", this.allDemandes)
      console.log("lengrhhh", this.lengthAllDemande) })
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