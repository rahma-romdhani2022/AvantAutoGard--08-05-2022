import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2' ; 
import * as $ from 'jquery';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AvisServiceService } from 'src/app/services/avis.service';
export interface Maladie{
  id : number ; 
  nom : string ; 
}
export interface Niveau{
  id : number ; 
  niv : number ; 
}

@Component({
  selector: 'app-ajout-droite',
  templateUrl: './ajout-droite.component.html',
  styleUrls: ['./ajout-droite.component.css']
})
export class AjoutDroiteComponent implements OnInit {
 maladieDroiteRecupere : string =null ; 
 droiteComm : string ; 
 variable  : string ; 
 graviteDroiteRecupere : string =null ; 
 commDroiteRecupere : string =null ; 
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
AutoDetection : any={} ; 
existenceAvisExpertEnGeneral : number ; 
existenceAvisExpertDroite: number ; 
existenceAvisExpertGauche : number ; 
autoDetection : any ; 
images: any[] = [];
ress : any ; 
allDemandes : any ; 
demandeD : number ; 
demandeG : number ; 
lengthAllDemande : number ;  
maladieDroiteDeAutoDetection : string ; 
graviteDroiteDeAutodetection : number; 
testMaladieDroite : string ; 
testGraviteDroite : number ; 
testMaladieGauche :string ;
testGraviteGauche : number ; 
selectedValue : any ; 
boutonValider : number =0 ; 
testMaladie : number ; 
testGravite : number ; 
maladies : Maladie[]=[
  {id :1, nom:"Sain"},
  {id :2, nom:"maladie 1"},
  {id :3, nom:"maladie 2"},
  {id :4, nom:"maladie 3"},
  {id :5, nom:"maladie 4"},
  {id :6, nom:"maladie 5"},
  {id :7, nom:"maladie 6"},
];
niveaux : Niveau[]=[
  {id :1, niv:1},
  {id :2, niv:2},
  {id :3, niv:3},

 
];
constructor(private _formBuilder: FormBuilder , private service : UserServiceService ,
   private router : Router , private ar : ActivatedRoute , private serviceAvis : AvisServiceService)
{
  ar.params.subscribe(val => {
    this.ngOnInit();
  })
}
/*gravite = document.getElementById('willay');
 selectedValue = null;
 gravite.addEventListener("change", function() {
this.selectedValue = this.value;
 });*/
ngOnInit() {
  this.serviceAvis.lengthDemandePrincipale ; 
  this.getAllDemandes(); 
  this.ar.paramMap.subscribe((x)=>{
    this.idConsultation =+ x.get('idConsultation');  }) ; 
 
    console.log( "idd consultationnnn:",this.idConsultation)
   this.getConsultation();
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
getConsultation(){
  this.serviceAvis.getConsultationID( this.idConsultation).subscribe((params => {
  this.consultation = params;
  this.AutoDetection = this.consultation.autoDetection ; 
  this.demandeD = this.consultation.demandeAvisD ; 
  this.demandeG = this.consultation.demandeAvisG  
  //test maladie et gravite 
  if(  this.AutoDetection.graviteDroite === 0) {
    this.testGravite = 0 ; 
  }
  else{
    this.testGravite = 1; 
  }
  if(  this.AutoDetection.MaladieDroite === null) {
    this.testMaladie = 0 ; 
  }
  else{
    this.testMaladie = 1; 
  }
  //// test les lien 
  if( this.AutoDetection.avisExpert === null){
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
      this.existenceAvisExpertGauche =  1 }

}
 /* this.maladieDroiteDeAutoDetection=this.consultation.autoDetection.maladieDroite ; 
  this.graviteDroiteDeAutodetection = this.consultation.autoDetection.graviteDroite ; 
  this.testMaladieDroite=  this.consultation.autoDetection.avisExpert.maladieDroite ; 
  this.testGraviteDroite = this.consultation.autoDetection.avisExpert.graviteDroite ; 
  this.testMaladieGauche = this.consultation.autoDetection.avisExpert.maladieGauche;
  this.testGraviteGauche = this.consultation.autoDetection.avisExpert.graviteGauche ; 
  console.log("droite" , this.demandeD , "gauche" , this.demandeG)
  console.log("consultationnnnnnnn " , this.consultation)*/
 if (this.consultation.image1_Droite  == null) {
}

  else {

    this.retrieveResponse = this.consultation;
    this.base64Data = this.retrieveResponse.image1_Droite;
    this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
    this.images[0] = this.imagePath;
  
  }

  if (this.consultation.image2_Droite == null) {
   
  }
  else {

    this.retrieveResponse = this.consultation;
    this.base64Data = this.retrieveResponse.image2_Droite;
    this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
    this.images[1] = this.imagePath;
  
  }

  if (this.consultation.image3_Droite == null) {
   
  }
  else {

    this.retrieveResponse = this.consultation;
    this.base64Data = this.retrieveResponse.image3_Droite;
    this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
    this.images[2] = this.imagePath;
   
  }
  if (this.consultation.image4_Droite == null) {
    this.imagePath = "assets/123.jpg"
  }
  else {

    this.retrieveResponse = this.consultation;
    this.base64Data = this.retrieveResponse.image4_Droite;
    this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
    this.images[3] = this.imagePath;
    
  }
  if (this.consultation.image5_Droite == null) {
   
  }
  else {

    this.retrieveResponse = this.consultation;
    this.base64Data = this.retrieveResponse.image5_Droite;
    this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
    this.images[4] = this.imagePath;
   
  }



}));
}
addAvisDroite(value){
  /*var gravite = document.getElementById('graviteDroite')as HTMLInputElement;
  var maladie = document.getElementById('maladieDroite')as HTMLInputElement;
      gravite.disabled = true;
      maladie.disabled = true;
  if(value.commentaireDroite == ""){
    this.droiteComm= null ;
  }
  else{
    this.droiteComm=  value.commentaireDroite;
  }*/
  value ={
    "maladieDroite" :value.maladieDroite ,
    "graviteDroite" :value.graviteDroite ,
    "commentaireDroite": value.commentaireDroite } 
if(this.consultation.autoDetection.avisExpert === null){
  this.serviceAvis.addAvisExpert(this.id).subscribe(parms=>{
  this.avisExpertAjouter=parms
  this.serviceAvis.updateAvisExpertDroiteQuiCreerAInstant(this.avisExpertAjouter.id , value).subscribe(parms=>{
  this.autoDetection=this.consultation.autoDetection; 
  this.serviceAvis.putAvisExpert(this.autoDetection.id , this.idConsultation , this.avisExpertAjouter.id).subscribe(res=>{
   this.boutonValider =1 ; 
    this.ngOnInit() ; 
    this.getAllDemandes() ; 
    this.ngOnInit() ; 
    this.getAllDemandes() ; console.log("vale de form " , value)
    Swal.fire({
      icon: 'success',
      title: 'votre avis bien a ajouter  ',
      showClass: {
        popup: 'animate__animated animate__fadeInDown' },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    this.ngOnInit() ; 
    });
   }

, err=>{
console.log(err);
const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  background :'#f8bb86',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast'
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true
})
Toast.fire({
  icon: 'warning',
  title: 'il yaa probléme !!!!'
})
})
})
}
else{
  this.serviceAvis.updateAvisExpertDroiteQuiCreerAInstant(this.consultation.autoDetection.avisExpert.id, value).subscribe(parms=>{
    this.autoDetection=this.consultation.autoDetection; 
    this.serviceAvis.putAvisExpert(this.consultation.autoDetection.id , this.idConsultation , this.consultation.autoDetection.avisExpert.id).subscribe(res=>{
      this.boutonValider =1 ; 
      this.ngOnInit() ; 
      this.getAllDemandes() ; ;
      }
  , err=>{
  console.log(err);
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    background :'#f8bb86',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
  })
  Toast.fire({
    icon: 'warning',
    title: 'il yaa probléme !!!!'
  })
  })

   this.ngOnInit() ; 
  this.getAllDemandes() ; console.log("vale de form " , value)
  Swal.fire({
    icon: 'success',
    title: 'votre avis bien a ajouter  ',
    showClass: {
      popup: 'animate__animated animate__fadeInDown' },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
  this.ngOnInit() ; 
//this.router.navigate(['/demande_droite/'+this.idConsultation]) ; 
});
}
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
      this.serviceAvis.lengthDemandePrincipale= this.allDemandes.length ; 
      console.log("tessssssssssst", this.allDemandes)
      console.log("lengrhhh",    this.serviceAvis.lengthDemandePrincipale) })
}
 logout() {
  localStorage.removeItem('name');
  localStorage.removeItem('token');
  this.service.islogin = false;
this.router.navigate(['']);
    ///location.reload();
}
reouterrr(){
  this.router.navigate(['/demande_droite/'+this.idConsultation])
}

/* fonction lier a chechkbox
handleSelected($event) {
  if ($event.target.checked === true) {
    var gravite = document.getElementById('graviteDroite')as HTMLInputElement;
    var maladie = document.getElementById('maladieDroite')as HTMLInputElement;
        gravite.disabled = true;
        maladie.disabled = true;
  }
  else{
    var gravite = document.getElementById('graviteDroite')as HTMLInputElement;
    var maladie = document.getElementById('maladieDroite')as HTMLInputElement;
        gravite.disabled = false;
        maladie.disabled = false;
  }
}*/
testSain() {
  
  var gravite = document.getElementById('graviteDroite')as HTMLInputElement;
  var maladie = document.getElementById('maladieDroite')as HTMLInputElement;
      gravite.disabled = true;
      maladie.disabled = true;
      this.variable="sain"
}
}/* if(value.maladieDroite ="" ){
    this.maladieDroiteRecupere=null
  }
  else{
    this.maladieDroiteRecupere= value.maladieDroite ;
  }
  //pour gravite droite
  if(value.graviteDroite ="" ){
 this.graviteDroiteRecupere=null ;
  }
  else{
    this.graviteDroiteRecupere= value.graviteDroite ;
  }
  // pour commantaire droite
  if(value.commentaireDroite ="" ){
    this.commDroiteRecupere=null
  }
  else{
    this.commDroiteRecupere= value.commentaireDroite ;
  }*/