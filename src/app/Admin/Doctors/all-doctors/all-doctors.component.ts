import {AfterViewInit, Component, OnInit, Inject} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AddDoctorComponent } from '../add-doctor/add-doctor.component';
import Swal from 'sweetalert2/dist/sweetalert2.min.js'
import { EditDoctorComponent } from '../edit-doctor/edit-doctor.component';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/modele/user';
import { DatePipe } from '@angular/common';
import { UserServiceService } from 'src/app/services/user-service.service';
import { parse } from 'path';
import { MAT_DIALOG_DATA ,MatDialogRef ,MatDialog , MatDialogConfig} from "@angular/material/dialog";


export interface Doctor {
  
  id: number;
  image:string ;
  name: string;
  email: string;
  numero: string;
  adresse:string ;
  date:string;
 
}


/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent   implements OnInit {
  expertsAdminMedical : any[]=[] ;
  lengthExpertsAdminMedical : number=0 ; 
  all :any=[];
  searche="";
  tab : Doctor[];
  test : any ; 
  retrieveResponse: any={};
  base64Data: any;
  id : number ;
  admin : any ; 
  imagePath : string ;
  username : string ;  
  role : string ;
  adminDigital:string ="adminDigital";
  adminMedical:string="adminMedical";
  images :any=[];
  allExperts :any = [];
  image1="./assets/imagesD/faces/user.jpg";
  bouton : boolean ; 
  expertsF : any; 
  imagee : any ; 
  idTabExpert : any ;
  imageExpertARecuperer : any ;
  expert06 : any ; 
  image06 : any ;
  roleMedical :string ="";
  roleDigital :string =""; 
  expertASupprimer: any ; 
  testRole : string = null ; 
  expertsAdminMedicalTab : any[]=[]
 // testTab :number; 
  imageParDefaut ="./assets/imagesD/faces/user.jpg" ;

  constructor(public dialog: MatDialog , private service : AdminService , private expertService : UserServiceService , 
    private router :Router  , private ar: ActivatedRoute , 
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef:MatDialogRef<AddDoctorComponent>,) {
      ar.params.subscribe(val => {
        this.ngOnInit();
      })
    }
  
  ngOnInit(){
    this.getAllDrsExpertsPArAdminMedical()
    this.getAllImagesDesExperts() ;
    this.service.testTab = this.service.expertsData.length;
    this.ar.paramMap.subscribe((x)=>{
      this.id =+ x.get('id');
  }) ; 

    this.service.getUtilisateur(parseInt(localStorage.getItem("idAdmin"))).subscribe(res=>{
      this.test=res ; 
      console.log(this.test.role);
      if(this.test.role === "Admin Medical Manager"){
        this.roleMedical=this.test.role ; 
        this.bouton= true ;
        console.log(this.bouton) 
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
              // console.log(this.imagePath)
               this.role=this.admin.role;  }) ;
      }
      else{
        if(this.test.role === "Admin Digital Manager"){
          this.roleDigital=this.test.role ; 
          this.testRole = this.test.role ;
          this.bouton = false  ; 
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
     this.service.getAllExpertsParIdAdminMedical(parseInt(localStorage.getItem("idAdmin"))).subscribe(data=>{
      this.expertsAdminMedical =data ; 
      console.log("hygqs" ,this.expertsAdminMedical  );
     this.service.getAllExpertsParIdAdminMedicalNumber(parseInt(localStorage.getItem("idAdmin"))).subscribe(data=>{
      this.lengthExpertsAdminMedical =data ; 
      console.log("hygqs length" ,this.lengthExpertsAdminMedical  );
    })
  })
    /* this.service.getAllExperts("expert").subscribe(data=>{
        this.experts=data;
        this.expertsF =data ; */
        //this.experts.date_inscription = this.datePipe.transform(this.experts.date_inscription, 'dd/MM/yyyy');
      
    // })
    this.getData();
  }

  getData() {
    this.service.getAllExperts("expert").subscribe(
    response =>{this.service.expertsData = response;
     // this.service.expertsData.push(this.images) ;
      this.service.testTab = this.service.expertsData.length;

    this.expertsF =response ;
    //console.log("experts data " , this.service.expertsData);
     }
      );
    
   }

  openDialogAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="1%" ;
    this.matDialog.open(AddDoctorComponent, dialogConfig);
}

  openDialogEdit(id : number) {
    this.dialog.open(EditDoctorComponent);
    localStorage.setItem("idExpertAModifier" , id.toString())
    console.log(localStorage.getItem("idExpertAModifier"));
  }
  
 
  delete(){
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "de supprimer patient : Rahma Romdhani !",
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
  
  
  supprimer(id :number){
    this.expertService.getUtilisateur(id).subscribe(data=>{
      this.expertASupprimer = data
         
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "de supprimer Dr Ophtalmologue Expert  : " +this.expertASupprimer.username,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Oui, supprimez-le!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.expertService.deleteExperts(id).subscribe(()=>{this.getAllDrsExperts()
          console.log("ok")
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
   
    getAllDrsExperts(){
      this.service.getAllExperts("expert").subscribe(data=>{
        this.service.expertsData=data;
        this.service.testTab = this.service.expertsData.length; })
      }
      getAllDrsExpertsPArAdminMedical(){
        this.service.getAllExpertsParIdAdminMedical(parseInt(localStorage.getItem("idAdmin"))).subscribe(data=>{
          this.service.allExpertsDeAdminX =data;
          this.service.getAllExpertsParIdAdminMedicalNumber(parseInt(localStorage.getItem("idAdmin"))).subscribe(data=>{
            this.service.lengthAllExpertsDeAdminX =data ;     })
          })
        }
   
      getAllImagesDesExperts(){
        this.service.getAllExperts("expert").subscribe(data=>{
          this.all=data;
          for( let expertTest of this.all ) {
            console.log("alllllllll" , this.all)
         //   console.log("expert a recupere" , expertTest) ; 
            this.retrieveResponse = expertTest;
                 this.base64Data = this.retrieveResponse.image;
                 this.imageExpertARecuperer = 'data:image/jpeg;base64,' + this.base64Data; 
                 this.images.push(this.imageExpertARecuperer)}});
                console.log("les images a recupereeeeee " , this.images)
                 
          }
          getImageExpert(id : number):any{
            this.expertService.getData(id).subscribe(data=>{
                this.expert06=data ; 
                this.retrieveResponse = this.expert06;
                this.base64Data = this.expert06.image;
                this.image06 = 'data:image/jpeg;base64,' + this.base64Data;
                return     this.image06  ;   }) ;
            //  console.log("tessstttt 6h " , this.image06)
          
          
          }
      
    set texte(chaine: string) {

      this.service.expertsData = this.filtrer(chaine);
    
  
    }
  
  
  
    filtrer(sousChaine: string) {
    
      this.service.getAllExperts("expert").subscribe(data=>{
      this.expertsF=data;});     
      return this.expertsF.filter(e => e.username.indexOf(sousChaine) != -1 || e.gender.indexOf(sousChaine) != -1  || e.email.indexOf(sousChaine) != -1  || e.telephone.toString().indexOf(sousChaine) != -1);

  
    }
    set texteAdminMedical(chaine: string) {

      this.service.allExpertsDeAdminX = this.filtrerAdminMedical(chaine);
    
  
    }
  
  
  
    filtrerAdminMedical(sousChaine: string) {
      this.service.getAllExpertsParIdAdminMedical(parseInt(localStorage.getItem("idAdmin"))).subscribe(data=>{
        this.expertsAdminMedicalTab =data ; });     
      return this.expertsAdminMedicalTab.filter(e => e.username.indexOf(sousChaine) != -1 || e.gender.indexOf(sousChaine) != -1  || e.email.indexOf(sousChaine) != -1  || e.telephone.toString().indexOf(sousChaine) != -1);

  
    }
  
    refrech(){
      this.service.getAllExperts("expert").subscribe(data=>{
        this.service.expertsData=data;
        this.service.testTab = this.service.expertsData.length;
      
      })
       
      }
      refrechExpertsAdmin(){
          this.service.getAllExpertsParIdAdminMedical(parseInt(localStorage.getItem("idAdmin"))).subscribe(data=>{
          this.expertsAdminMedical =data ; 
          this.service.allExpertsDeAdminX = this.expertsAdminMedical ; 
          this.service.getAllExpertsParIdAdminMedicalNumber(parseInt(localStorage.getItem("idAdmin"))).subscribe(data=>{
          this.service.lengthAllExpertsDeAdminX =data ; 
          
        })
      })
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
