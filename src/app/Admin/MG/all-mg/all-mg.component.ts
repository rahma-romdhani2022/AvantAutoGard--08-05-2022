import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { GeneralisteService } from 'src/app/services/generaliste.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { EditMGComponent } from '../edit-mg/edit-mg.component';
export interface Generaliste {
  id: number;
  image:string ;
  username: string;
  email: string;
  numeroTelephone: string;
  password:string ;
  role : string ; 
  gender : string ; 
  date_inscription:string;
}

@Component({
  selector: 'app-all-mg',
  templateUrl: './all-mg.component.html',
  styleUrls: ['./all-mg.component.css']
})
export class AllMGComponent implements OnInit {
  entrerFiltrage : any ; 
  generalisteASupprimer : any ; 
  test : any ; 
  retrieveResponse: any={};
  base64Data: any;
  id : number ;
  admin : any ; 
  imagePath : string ;
  username : string ;  
  role : string ;
  adminDigital:string ="adminDigital";
  adminMedical:string="adminMedical" ;
  imageParDefaut ="./assets/imagesD/faces/user.jpg"
  constructor(private ar : ActivatedRoute , private dialog: MatDialog , private service : AdminService ,
     private router : Router , private serviceMG : GeneralisteService) 
  {
    ar.params.subscribe(val => {
      this.ngOnInit();
    })
  }

  ngOnInit(){
    this.serviceMG.lengthTabGeneralistes = this.serviceMG.generalistes.length;
    this.ar.paramMap.subscribe((x)=>{
      this.id =+ x.get('id');
  }) ; 

    this.service.getUtilisateur(parseInt(localStorage.getItem("idAdmin"))).subscribe(res=>{
     this.test=res ; 
     console.log(this.test.role);
     if(this.test.role === "Admin Medical Manager"){
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

    this.serviceMG.getAllGeneralistes().subscribe(data=>{
     this.serviceMG.generalistes=data ; 
     this.serviceMG.lengthTabGeneralistes = this.serviceMG.generalistes.length;
    })
  }


  
 
  
   details(){
    Swal.fire({
      background: '#1A202E',
      title: 'Custom animation with Animate.css',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
      /////////***********/ */
    })
}

openDialog() {
  this.dialog.open(EditMGComponent);
}

set texte(chaine: string) {

  this.serviceMG.generalistes = this.filtrer(chaine);


}



filtrer(sousChaine: string) {

  this.serviceMG.getAllGeneralistes().subscribe(data=>{
  this.entrerFiltrage=data;});     
  return this.entrerFiltrage.filter(e => e.username.indexOf(sousChaine) != -1 || e.gender.indexOf(sousChaine) != -1  || e.telephone.toString().indexOf(sousChaine) != -1);
}

supprimer(id :number){
this.serviceMG.getUtilisateur(id).subscribe(data=>{
  this.generalisteASupprimer = data
 
  
  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: "de supprimer médecin : " +this.generalisteASupprimer.username,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Annuler',
    confirmButtonText: 'Oui, supprimez-le!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.serviceMG.deleteGeneraliste(id).subscribe(()=>{this.getAllGeneralistess()
      Swal.fire(
        'Supprimé !',
        'Médecin  a été supprimé.',
        'success'
      ) }
      , err=>{
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-right',
          iconColor: 'white',
          background :'#f27474',
          customClass: {
            popup: 'colored-toast'
          },
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true
        })
        
         Toast.fire({
          icon: 'error',
          title: 'Error'
        })
      })
    }
    });
  });
}
  
  getAllGeneralistess(){
    this.serviceMG.getAllGeneralistes().subscribe(data=>{
      this.serviceMG.generalistes=data;
      this.serviceMG.lengthTabGeneralistes =this.serviceMG.generalistes.length; })
    }
 openDialogEdit(id : number){
        this.dialog.open(EditMGComponent);
        localStorage.setItem("idMgAModifier" , id.toString())
        console.log(localStorage.getItem("idMgAModifier"));
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