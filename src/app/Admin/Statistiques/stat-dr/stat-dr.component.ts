import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { PatientService } from 'src/app/services/patient.service';
import { StatDrService } from 'src/app/services/StatDr.service';

@Component({
  selector: 'app-stat-dr',
  templateUrl: './stat-dr.component.html',
  styleUrls: ['./stat-dr.component.css']
})
export class StatDrComponent implements OnInit {
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
  roleDigital :string="" ;
  roleMedical :string =""; 

   experts1 : number ; 
   experts2 : number ; 
   experts3 : number ; 
   experts4 : number ; 
   experts5 : number ; 
   experts6 : number ; 
   experts7 : number ; 
   experts8 : number ; 
   experts9 : number ; 
   experts10 : number ; 
   experts11 : number ; 
   experts12 : number ; 

   experts1Femme : number ; 
   experts1Homme : number ; 
   experts2Femme : number ; 
   experts2Homme : number ; 
   experts3Femme : number ; 
   experts3Homme : number ; 
   experts4Femme : number ; 
   experts4Homme : number ; 
   experts5Femme : number ; 
   experts5Homme : number ; 
   experts6Femme : number ; 
   experts6Homme : number ; 
   experts7Femme : number ; 
   experts7Homme : number ; 
   experts8Femme : number ; 
   experts8Homme : number ; 
   experts9Femme : number ; 
   experts9Homme : number ; 
   experts10Femme : number ; 
   experts10Homme : number ; 
   experts11Femme : number ; 
   experts11Homme : number ; 
   experts12Femme : number ; 
   experts12Homme : number ; 


   medecins1 :  number ; 
   medecins2 : number ;  
   medecins3 : number ; 
   medecins4 : number ; 
   medecins5 : number ; 
   medecins6 : number ; 
   medecins7 : number ; 
   medecins8 : number ;  
   medecins9 : number ; 
   medecins10 : number ; 
   medecins11 : number ; 
   medecins12 : number ; 

   medecins1Femme : number ; 
   medecins1Homme : number ; 
   medecins2Femme : number ; 
   medecins2Homme : number ; 
   medecins3Femme : number ; 
   medecins3Homme : number ; 
   medecins4Femme : number ; 
   medecins4Homme : number ; 
   medecins5Femme : number ; 
   medecins5Homme : number ; 
   medecins6Femme : number ; 
   medecins6Homme : number ; 
   medecins7Femme : number ; 
   medecins7Homme : number ; 
   medecins8Femme : number ; 
   medecins8Homme : number ; 
   medecins9Femme : number ; 
   medecins9Homme : number ; 
   medecins10Femme : number ; 
   medecins10Homme : number ; 
   medecins11Femme : number ; 
   medecins11Homme : number ; 
   medecins12Femme : number ; 
   medecins12Homme : number ; 

   AllPatientsToDay : number ; 
  constructor(private service : AdminService  , private router : Router , private ar : ActivatedRoute 
    , private statDr : StatDrService , private patientService : PatientService ) 
  {
    ar.params.subscribe(val => {
      this.ngOnInit();
    })
  }
  ngOnInit(){
  this.getNumPatientsToDay();
    /*** partie Expert  *****/
    this.statDr.getAllExpertsParMonth(1).subscribe(data=>{
    this.experts1 =data ; 
    

    this.statDr.getAllExpertsParMonth(2).subscribe(data=>{
    this.experts2 =data ; 
   

    this.statDr.getAllExpertsParMonth(3).subscribe(data=>{
    this.experts3 =data ; 
   

    this.statDr.getAllExpertsParMonth(4).subscribe(data=>{
    this.experts4 =data ; 
    
      this.statDr.getAllExpertsParMonth(5).subscribe(data=>{
      this.experts5 =data ; 
     
      
      this.statDr.getAllExpertsParMonth(6).subscribe(data=>{
        this.experts6 =data ; 
       
        
      this.statDr.getAllExpertsParMonth(7).subscribe(data=>{
        this.experts7 =data ; 
       
        
      this.statDr.getAllExpertsParMonth(8).subscribe(data=>{
        this.experts8 =data ; 
       
        
      this.statDr.getAllExpertsParMonth(9).subscribe(data=>{
        this.experts9 =data ; 
        
        
      this.statDr.getAllExpertsParMonth(10).subscribe(data=>{
        this.experts10 =data ; 
        
        
      this.statDr.getAllExpertsParMonth(11).subscribe(data=>{
        this.experts11 =data ; 
       
        
      this.statDr.getAllExpertsParMonth(12).subscribe(data=>{
        this.experts12 =data ; 
      



 /*** partie  generaliste  *****/
   this.statDr.getGeneralistesParMonth(1).subscribe(data=>{
    this.medecins1 =data ; 
    

    this.statDr.getGeneralistesParMonth(2).subscribe(data=>{
    this.medecins2 =data ; 
   
    this.statDr.getGeneralistesParMonth(3).subscribe(data=>{
    this.medecins3 =data ; 
    
    this.statDr.getGeneralistesParMonth(4).subscribe(data=>{
    this.medecins4 =data ; 
    

    this.statDr.getGeneralistesParMonth(5).subscribe(data=>{
    this.medecins5 =data ; 
    

    
    this.statDr.getGeneralistesParMonth(6).subscribe(data=>{
    this.medecins6 =data ; 
   

    this.statDr.getGeneralistesParMonth(7).subscribe(data=>{
    this.medecins7 =data ; 
   
      
    this.statDr.getGeneralistesParMonth(8).subscribe(data=>{
    this.medecins8 =data ; 
    
      
    this.statDr.getGeneralistesParMonth(9).subscribe(data=>{
    this.medecins9 =data ; 
   
      
    this.statDr.getGeneralistesParMonth(10).subscribe(data=>{
    this.medecins10 =data ; 
   
      
    this.statDr.getGeneralistesParMonth(11).subscribe(data=>{
    this.medecins11 =data ; 
    
      
    this.statDr.getGeneralistesParMonth(12).subscribe(data=>{
    this.medecins12 =data ; 

    this.statDr. getUsersByGenderFemme(1).subscribe(data=>{
    this.medecins1Femme=data
    this.statDr.getUsersByGenderHomme(1).subscribe(data=>{
    this.medecins1Homme=data
    this.statDr. getUsersByGenderFemme(2).subscribe(data=>{
    this.medecins2Femme=data
    this.statDr.getUsersByGenderHomme(2).subscribe(data=>{
    this.medecins2Homme=data
    this.statDr. getUsersByGenderFemme(3).subscribe(data=>{
    this.medecins3Femme=data
    this.statDr.getUsersByGenderHomme(3).subscribe(data=>{
    this.medecins3Homme=data
    this.statDr. getUsersByGenderFemme(4).subscribe(data=>{
    this.medecins4Femme=data
    this.statDr.getUsersByGenderHomme(4).subscribe(data=>{
    this.medecins4Homme=data
    this.statDr. getUsersByGenderFemme(5).subscribe(data=>{
    this.medecins5Femme=data
    this.statDr.getUsersByGenderHomme(5).subscribe(data=>{
    this.medecins5Homme=data
    this.statDr. getUsersByGenderFemme(6).subscribe(data=>{
    this.medecins6Femme=data
    this.statDr.getUsersByGenderHomme(6).subscribe(data=>{
    this.medecins6Homme=data
    this.statDr. getUsersByGenderFemme(7).subscribe(data=>{
    this.medecins7Femme=data
    this.statDr.getUsersByGenderHomme(7).subscribe(data=>{
    this.medecins7Homme=data
    this.statDr. getUsersByGenderFemme(8).subscribe(data=>{
      this.medecins8Femme=data
      this.statDr.getUsersByGenderHomme(8).subscribe(data=>{
      this.medecins8Homme=data
      this.statDr. getUsersByGenderFemme(9).subscribe(data=>{
        this.medecins9Femme=data
        this.statDr.getUsersByGenderHomme(9).subscribe(data=>{
        this.medecins9Homme=data

        this.statDr. getUsersByGenderFemme(10).subscribe(data=>{
          this.medecins10Femme=data
          this.statDr.getUsersByGenderHomme(10).subscribe(data=>{
          this.medecins10Homme=data
    this.statDr. getUsersByGenderFemme(11).subscribe(data=>{
      this.medecins11Femme=data
      this.statDr.getUsersByGenderHomme(11).subscribe(data=>{
      this.medecins11Homme=data
    this.statDr. getUsersByGenderFemme(12 ).subscribe(data=>{
    this.medecins12Femme=data
    this.statDr.getUsersByGenderHomme(12 ).subscribe(data=>{
    this.medecins12Homme=data   



    this.service.getUtilisateur(parseInt(localStorage.getItem("idAdmin"))).subscribe(res=>{
     this.test=res ; 
     console.log(this.test.role);
     if(this.test.role === "Admin Medical Manager"){
       this.roleMedical=this.test.role ; 
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

    var echarts = require('echarts');
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom, 'dark');
    var option;
    
    const colors = ['#F4A460', '#B0C4DE', '#48D1CC', '#EE6666'];
    option = {
      backgroundColor:'#1A202E',
      color: colors,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      grid: {
        right: '20%'
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ['Dr Ophtalmologue Expert', 'Dr non-Ophtalmologue', 'Homme', 'Femme']
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          // prettier-ignore
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: ' Expert',
          position: 'right',
          alignTicks: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: colors[0]
            }
          },
          axisLabel: {
            formatter: '{value} '
          }
        },
        {
          type: 'value',
          name: 'non-Expert',
          position: 'right',
          alignTicks: true,
          offset: 90,
          axisLine: {
            show: true,
            lineStyle: {
              color: colors[1]
            }
          },
          axisLabel: {
            formatter: '{value} '
          }
        },
        {
          type: 'value',
          name: 'Homme',
          position: 'left',
          alignTicks: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: colors[2]
            }
          },
          axisLabel: {}
        },
    
        {
          type: 'value',
          name: 'Femme',
          position: 'left',
          alignTicks: true,
          offset: 50,
          axisLine: {
            show: true,
            lineStyle: {
              color: colors[1]
            }
          },
          axisLabel: {}
        }
      ],
      series: [
        {
          name: 'Dr Ophtalmologue Expert',
          type: 'bar',
         
 data: [  this.experts1, 
          this.experts2, 
          this.experts3, 
          this.experts4, 
          this.experts5, 
          this.experts6, 
          this.experts7, 
          this.experts8, 
          this.experts9, 
          this.experts10, 
          this.experts11, 
          this.experts12, 

          ]
        },
        {
          name: 'Dr non-Ophtalmologue',
          type: 'bar',
          yAxisIndex: 1,
          data: [ this.medecins1 , 
                  this.medecins2 , 
                  this.medecins3 , 
                  this.medecins4 , 
                  this.medecins5 , 
                  this.medecins6 , 
                  this.medecins7 , 
                  this.medecins8 , 
                  this.medecins9 , 
                  this.medecins10 , 
                  this.medecins11 , 
                  this.medecins12 , 

           
          ]
        },
        {
          name: 'Homme',
          type: 'line',
          yAxisIndex: 2,
          data: [this.medecins1Homme, 
                 this.medecins2Homme, 
                 this.medecins3Homme,
                 this.medecins4Homme,
                 this.medecins5Homme,
                 this.medecins6Homme,
                 this.medecins7Homme,
                 this.medecins8Homme,
                 this.medecins9Homme,
                 this.medecins10Homme, 
                 this.medecins11Homme,
                 this.medecins12Homme]
        },
        {
          name: 'Femme',
          type: 'line',
          yAxisIndex: 3,
          data: [this.medecins1Femme,
                this.medecins2Femme,
                this.medecins3Femme,
                this.medecins4Femme,
                this.medecins5Femme,
                this.medecins6Femme,
                this.medecins7Femme,
                this.medecins8Femme,
                this.medecins9Femme,
                this.medecins10Femme,
                this.medecins11Femme,
                this.medecins12Femme]
        }
      ]
    };
    
    option && myChart.setOption(option);
   
}) }) 
})}) 
}) })
}) })
}) }) 
}) })
}) })
}) })
}) })
}) })
}) })
}) })
}) }) 
}) }) 
}) })
}) })
}) }) 
}) })
}) })
}) }) 
}) })
}) })
}) })
}) }) 
  }
  getNumPatientsToDay(){
    this.patientService.getAllPatientsByDateInscription().subscribe(data=>{
       this.AllPatientsToDay =data; 
      console.log("édsfcx" , this.AllPatientsToDay )})
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


 /******************************** Chart Categories ***************

var app = {};

var chartDom = document.getElementById('main2');
var myChart = echarts.init(chartDom, 'dark');
var option;

option = {
  backgroundColor:'#1A202E',
  legend: {},
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  dataset: {
    source: [
      ['product', 'Homme', 'Femme'],
      ['Médecins', 50, 70],
      ['Ophtalmologues',50, 80]
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [
    { type: 'bar' },
    {
      type: 'bar',
      itemStyle: {
        color: '#a90000'
      }
    }
  ]
};

option && myChart.setOption(option);*/