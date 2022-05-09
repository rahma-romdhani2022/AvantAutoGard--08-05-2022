import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { GeneralisteService } from 'src/app/services/generaliste.service';
import { PatientService } from 'src/app/services/patient.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { DialogDetailsComponent } from './dialog-details/dialog-details.component';



export interface Doctor {
  id: number;
  image:string ;
  nom: string;
  prenom:string;
  email: string;
  numero: string;
  date:string;
}
@Component({
  selector: 'app-patients-dr-ophtalmologue',
  templateUrl: './patients-dr-ophtalmologue.component.html',
  styleUrls: ['./patients-dr-ophtalmologue.component.css']
})

export class PatientsDrOphtalmologueComponent implements OnInit {
  resPatient : any ; 
  nbrConsultations : number;
  patientASupprimer : any ; 
  test : any ; 
  uploadImageData : any 
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResponse: any;
  id : number ;
  admin : any ; 
  expert : any ; 
  imagePath : any ;
  imagePath1 : any ;
  username : string ;  
  role : string ;
  adminDigital:string ="adminDigital";
  adminMedical:string="adminMedical"; 
  bouton : boolean ; 
  roleDigital :string ="";
  roleMedical :string ="" ; 
  expertEffetuer : any ;
  nomExpertEffectuer : string ;
  patientsTableau :any ;  
  constructor(private ar : ActivatedRoute ,public dialog: MatDialog , private service :AdminService , private servicePatient : PatientService ,
      private router : Router , private serviceEx : UserServiceService) 
  {
    ar.params.subscribe(val => {
      this.ngOnInit();
    })
  }

  ngOnInit(){
    this.servicePatient.lengthTabPatientsDrExpert = this.servicePatient.patientsDrExpert.length;
    this.ar.paramMap.subscribe((x)=>{
      this.id =+ x.get('idExpert');
      console.log("lengthh tab" ,  this.servicePatient.lengthTabPatientsDrExpert )
  }) ; 
this.serviceEx.getUtilisateur(this.id).subscribe(data=>{
  this.expertEffetuer=data;
  this.nomExpertEffectuer=this.expertEffetuer.username ; 
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
    this.imagePath1="./assets/imagesD/faces/user.jpg" ;
    this.service.getUtilisateur(parseInt(localStorage.getItem("idAdmin"))).subscribe(res=>{
      this.test=res ; 
      console.log(this.test.role);
      if(this.test.role === "Admin Medical Manager"){
        this.roleMedical=this.test.role  ;
       this.username = localStorage.getItem("nameAdmin");
       console.log(parseInt(localStorage.getItem('idAdmin')))
       console.log(localStorage.getItem("nameAdmin"))
       this.service.getAdminMedicall(parseInt(localStorage.getItem('idAdmin'))).subscribe(data=>{
         this.admin=data
         this.username=this.admin.username ; 
         this.role=this.admin.role ; 
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
          this.roleDigital=this.test.role  ;
          this.bouton= false ;
         this.username = localStorage.getItem("nameAdmin");
         console.log(parseInt(localStorage.getItem('idAdmin')))
         console.log(localStorage.getItem("nameAdmin"))
         this.service.getAdminDigitall(parseInt(localStorage.getItem('idAdmin'))).subscribe(data=>{
           this.admin=data
           this.username=this.admin.username ; 
           this.role=this.admin.role ; 
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
  
 this.serviceEx.getAllPatientsDeExpert(this.id).subscribe(data=>{
   this.servicePatient.patientsDrExpert=data ; 
   this.servicePatient.lengthTabPatientsDrExpert= this.servicePatient.patientsDrExpert.length ; 
 })
  }

  deletePatient(id :number){
    this.servicePatient.getPatient(id).subscribe(data=>{
      this.patientASupprimer = data
     
      
      Swal.fire({
        title: 'Êtes-vous sûr?',
        text: "de supprimer patient : " +  this.patientASupprimer.username,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Annuler',
        confirmButtonText: 'Oui, supprimez-le!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.servicePatient.deletePatient(id).subscribe(()=>{this.getAllPatientss()})
          Swal.fire(
            'Supprimé !',
            'Médecin  a été supprimé.',
            'success'
          )}
        });
      });
    }
      
      getAllPatientss(){
        this.serviceEx.getAllPatientsDeExpert(this.id).subscribe(data=>{
          this.servicePatient.patientsDrExpert=data ; 
          this.servicePatient.lengthTabPatientsDrExpert =this.servicePatient.patientsDrExpert.length; })
        }
    
        details(id : number){
          this.servicePatient.getPatientById(id).subscribe(params=>{
          this.resPatient = params ; 
          this.servicePatient.getNumConsultationDePatient(id).subscribe(data=>{
          this.nbrConsultations = data ; 
      
         if( this.nbrConsultations === 0) {
               Swal.fire({
           icon: 'question',
           title: 'Pas des Consultations .',
           html:
           '<b><u>'+ this.resPatient.username+"</b></u>&nbsp; n'admet aucune consultation pour le moment !", })
               }
         else{
          Swal.fire({
           icon: 'info',
           title: 'Nombre des Consultations de :<br><b><u> ',
           html:  '<br><b><u>'+this.resPatient.username+"</b></u>&nbsp; est " +this.nbrConsultations,
           
        }) 
         }
       
        }) 
      })
     
     }
  set texte(chaine: string) {

    this.servicePatient.patientsDrExpert = this.filtrer(chaine);
  }
  filtrer(sousChaine: string) {
  
    this.servicePatient.getAllPatients().subscribe(data=>{
    this.patientsTableau=data;});     
    return this.patientsTableau.filter(e => e.username.indexOf(sousChaine) != -1 ||e.gender.indexOf(sousChaine) != -1 ||  e.cin.indexOf(sousChaine) != -1  || e.email.indexOf(sousChaine) != -1  || e.telephone.toString().indexOf(sousChaine) != -1);


  }
    openDialog() {
    this.dialog.open(DialogDetailsComponent
      , {width:'5px' , height:'5px'});
    
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

