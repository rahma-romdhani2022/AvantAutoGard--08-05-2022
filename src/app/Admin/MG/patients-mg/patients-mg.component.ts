import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { GeneralisteService } from 'src/app/services/generaliste.service';
import { PatientService } from 'src/app/services/patient.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-patients-mg',
  templateUrl: './patients-mg.component.html',
  styleUrls: ['./patients-mg.component.css']
})
export class PatientsMGComponent implements OnInit {
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
  generalisteEffectuer : any ;
  patientsTableau : any ; 
  nomGeneralisteEffectuer : string ; 
  constructor(private ar : ActivatedRoute , private service :AdminService , private servicePatient : PatientService ,
      private router : Router , private serviceMg : GeneralisteService) 
  {
    ar.params.subscribe(val => {
      this.ngOnInit();
    })
  }

  ngOnInit(){
    this.getAllPatientss();
    this.servicePatient.lengthTabPatientsDr = this.servicePatient.patientsDr.length;
    console.log("tesstt debur " ,   this.servicePatient.lengthTabPatientsDr )
    this.ar.paramMap.subscribe((x)=> {
      this.id =+ x.get('id');
      console.log("idddGeneraliste" , this.id )
  }) ; 
this.serviceMg.getUtilisateur(this.id).subscribe(data=>{
  this.generalisteEffectuer=data;
  this.nomGeneralisteEffectuer=this.generalisteEffectuer.username ; 
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
         this.username= this.admin.username ; 
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
  
 this.servicePatient.getPatientByGeneraliste(this.id).subscribe(data=>{
   this.servicePatient.patientsDr=data ; 
   this.servicePatient.lengthTabPatientsDr =this.servicePatient.patientsDr.length ; 
   console.log("length TabPatientsDr " , this.servicePatient.lengthTabPatientsDr)
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
        this.servicePatient.getPatientByGeneraliste(this.id).subscribe(data=>{
          this.servicePatient.patientsDr=data ; 
          this.servicePatient.lengthTabPatientsDr =this.servicePatient.patientsDr.length; })
        }
    
        details(id : number){
          this.servicePatient.getPatientById(id).subscribe(params=>{
          this.resPatient = params ; 
          console.log(this.resPatient , 'kjnxkwlc j')
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

    this.servicePatient.patientsDr = this.filtrer(chaine);
  }
  filtrer(sousChaine: string) {
  
    this.servicePatient.getAllPatients().subscribe(data=>{
    this.patientsTableau=data;});     
    return this.patientsTableau.filter(e => e.username.indexOf(sousChaine) != -1 ||e.gender.indexOf(sousChaine) != -1 ||  e.cin.indexOf(sousChaine) != -1  || e.email.indexOf(sousChaine) != -1  || e.telephone.toString().indexOf(sousChaine) != -1);


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

