import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { AvisServiceService } from 'src/app/services/avis.service';
import { UserServiceService } from 'src/app/services/user-service.service';
export interface Patient{
  nomPrenom : string ;
  date : string ; 
}
export interface Card{
  title : string ;
  description : string ; 
  buttonText :string ; 
  img : string ; 
}
@Component({
  selector: 'app-accueil-ophtalmologue',
  templateUrl: './accueil-ophtalmologue.component.html',
  styleUrls: ['./accueil-ophtalmologue.component.css']
})

export class AccueilOphtalmologueComponent implements OnInit {
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
resultats : any[]
allDemandes :any[]
lengthAllDemande : number ; 
testDateTime : string  ; 

  constructor(private service : UserServiceService , private router : Router , private ar : ActivatedRoute
    , private avisService : AvisServiceService , private datePipe : DatePipe)
  {
    ar.params.subscribe(val => {
      this.ngOnInit();
    })
  }
  patientss /*: Patient[]=[
  {nomPrenom :"patient1" , date :"2022/04/11"} , 
  {nomPrenom :"patient2" , date :"2022/04/11"} , 
 
  

]*/
users: Patient[]=[
  {nomPrenom :"patient1" , date :"2022/04/11"} , 
  {nomPrenom :"patient2" , date :"2022/04/11"} , ]
 
 

  ngOnInit() {
    var d = new Date();
    var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    var hours = d.getHours() + ":" + d.getMinutes() //+ ":"  ; + d.getSeconds();
    var fullDate = date+' '+hours;
    this.testDateTime = fullDate ; 
console.log(fullDate);
    this.avisService.lengthDemandePrincipale   ; 
    this.getAllDemandes();
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
 //this.get();
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
  get(){
    this.avisService.getAllConsultations().subscribe(data=>{
      this.resultats=data ;
      //if()
  }) ; 
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
      this.avisService.lengthDemandePrincipale =this.allDemandes.length ; 
      console.log("tessssssssssst", this.allDemandes)
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
