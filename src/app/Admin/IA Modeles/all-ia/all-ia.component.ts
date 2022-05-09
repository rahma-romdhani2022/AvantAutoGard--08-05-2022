import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

export interface IA_Model {
  id: number;
  nom:string ;
  date_ajout:string;
  date_debut:string;
  date_fin: string;
}
@Component({
  selector: 'app-all-ia',
  templateUrl: './all-ia.component.html',
  styleUrls: ['./all-ia.component.css']
})
export class AllIAComponent implements OnInit {
  nbrModeles : number ; 
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
  roleMedical :string ="";
  roleDigital :string =""; 
  constructor(private ar : ActivatedRoute , private dialog: MatDialog , private service : AdminService , private router : Router) 
  {
    ar.params.subscribe(val => {
      this.ngOnInit();
    })
  }
 modeles : IA_Model[]=[
      {id:1 , nom:'Modele 1 ',date_ajout:"2022/01/22",date_debut:'2022/04/12',date_fin:'2022/05/14'},
      {id:2 , nom:'Modele 2',date_ajout:"2022/01/22",date_debut:'2022/04/12',date_fin:'2022/05/14'},
      {id:3 , nom:'Modele 3',date_ajout:"2022/01/22",date_debut:'2022/04/12',date_fin:'2022/05/14'},
      {id:4 , nom:'Modele 4',date_ajout:"2022/01/22",date_debut:'2022/04/12',date_fin:'2022/05/14'},
      {id:5 , nom:'Modele 5',date_ajout:"2022/01/22",date_debut:'2022/04/12',date_fin:'2022/05/14'},
      {id:6 , nom:'Modele 6',date_ajout:"2022/01/22",date_debut:'2022/04/12',date_fin:'2022/05/14'},
      {id:7 , nom:'Modele 7',date_ajout:"2022/01/22",date_debut:'2022/04/12',date_fin:'2022/05/14'},
       
    

   ]
  ngOnInit(){
    this.nbrModeles= this.modeles.length ; 
    this.service.getUtilisateur(parseInt(localStorage.getItem("idAdmin"))).subscribe(res=>{
     this.test=res ; 
     console.log(this.test.role);
     if(this.test.role === "Admin Medical Manager"){
       this.roleMedical=this.test.role
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

   
   delete(){
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "de supprimer Modéle IA  : Nom de Modéle  !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Oui, supprimez-le!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Supprimé !',
          'Patient a été supprimé.',
          'success'
        )
      }
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
      
    })
}

openDialog() {

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