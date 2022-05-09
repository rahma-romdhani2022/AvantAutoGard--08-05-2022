import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AvisServiceService } from 'src/app/services/avis.service';
export interface Patient{
  nomPrenom : string ;
  date : string ; 
}
@Component({
  selector: 'app-historique-avis',
  templateUrl: './historique-avis.component.html',
  styleUrls: ['./historique-avis.component.css']
})
export class HistoriqueAvisComponent implements OnInit {
  name  = '';
  imagePath :string=null;
  user :any={};
  expert : any;
  patients :Patient[]
  retrieveResponse: any={};
  base64Data: any;
  test : string = "rahma" ; 
  nom_Expert : string="" ; 
  id : number ;
  resultats : any[];
  allDemandes : any ; 
  lengthAllDemande : number ; 
  lengthAlllHistoriquesDeExpert : number ;
    constructor(private service : UserServiceService , private router : Router , private ar : ActivatedRoute
      , private avisService : AvisServiceService)
    {
      ar.params.subscribe(val => {
        this.ngOnInit();
      })
    }
    patientss /*: Patient[]=[
    {nomPrenom :"patient1" , date :"2022/04/11"} , 
    {nomPrenom :"patient2" , date :"2022/04/11"} , 
   
    
  
  ]*/
    ngOnInit() {
      this.avisService.lengthDemandePrincipale ; 
      this.getAllDemandes(); 
      this.getAllHistoriques();
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
  console.log(localStorage.getItem("id"))
  console.log(localStorage.getItem("name"))
  console.log(localStorage.getItem("email"))
  console.log(localStorage.getItem("token"))
  this.id=parseInt(localStorage.getItem("id")) ; 
  
  
  
    }
    getAllDemandes(){
       /*this.avisService.getAllDemandes().subscribe(data=>{
    this.allDemandes=data ; 
    this.lengthAllDemande=this.allDemandes.length ; 
    console.log("tessssssssssst", this.allDemandes)
    console.log("lengrhhh", this.lengthAllDemande)
    })*/
    this.avisService.getAllDemandesLastVersion().subscribe(data=>{
      this.allDemandes=data ; 
      this.avisService.lengthDemandePrincipale=this.allDemandes.length ; 
      console.log("tessssssssssst", this.allDemandes)
      console.log("lengrhhh", this.lengthAllDemande) })
    }
    getAllHistoriques(){
      this.avisService.getAllHistoriquesDeExpert(parseInt(localStorage.getItem('id'))).subscribe(data=>{
        this.resultats=data ;
        this.lengthAlllHistoriquesDeExpert=this.resultats.length
        console.log("tessssssssssst", this.resultats)}) ; 
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
  /*
  condition sur  les listes des historiques 
  ////////////////////////////////
   *ngIf="
          item?.autoDetection?.avisExpert !== null &&
          item?.autoDetection?.avisExpert?.expert?.id === idExp
          */