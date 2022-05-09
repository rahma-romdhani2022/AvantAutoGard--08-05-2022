import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as echarts from 'echarts';
import { StatDrService } from 'src/app/services/StatDr.service';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-chart-activity',
  templateUrl: './chart-activity.component.html',
  styleUrls: ['./chart-activity.component.css']
})
export class ChartActivityComponent implements OnInit {
  name  = '';
imagePath :string=null;
user :any={};
expert : any={};
retrieveResponse: any={};
base64Data: any;
test : string = "rahma" ; 
nom_Expert : string="" ; 
id : number ; 

deamnde1 : number ; 
deamnde2 : number ; 
deamnde3 : number ; 
deamnde4 : number ; 
deamnde5 : number ; 
testt : number ;
deamnde6 : number ; 
deamnde7 : number ; 
deamnde8 : number ; 
deamnde9 : number ; 
deamnde10 :number ; 
deamnde11 :number ; 
deamnde12 :number ; 


 
reponse1 : number ; 
reponse2 : number ; 
reponse3 : number ; 
reponse4 : number ; 
reponse5 : number ; 
reponse6:  number ; 
reponse7 : number ; 
reponse8 : number ; 
reponse9 : number ; 
reponse10 :number ; 
reponse11 :number ; 
reponse12 :number ; 

  constructor(private service : UserServiceService , private router : Router , private ar : ActivatedRoute , 
    private statDr : StatDrService)
  {
    ar.params.subscribe(val => {
      this.ngOnInit();
    })
  }
  ngOnInit() {
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
    this.statDr.getAllDemandesParMonth(1).subscribe(data=>{
      this.deamnde1 =data;
    this.statDr.getAllDemandesParMonth(2).subscribe(data=>{
      this.deamnde2 =data;
    this.statDr.getAllDemandesParMonth(3).subscribe(data=>{
      this.deamnde3 =data;
    this.statDr.getAllDemandesParMonth(4).subscribe(data=>{
       this.deamnde4 =data;
    this.statDr.getAllDemandesParMonth(5).subscribe(data=>{
       this.deamnde5 =data;
    this.statDr.getAllDemandesParMonth(6).subscribe(data=>{
         this.deamnde6 =data;
    this.statDr.getAllDemandesParMonth(7).subscribe(data=>{
        this.deamnde7 =data;
    this.statDr.getAllDemandesParMonth(8).subscribe(data=>{
       this.deamnde8 =data;
    this.statDr.getAllDemandesParMonth(9).subscribe(data=>{
        this.deamnde9 =data;
    this.statDr.getAllDemandesParMonth(10).subscribe(data=>{
       this.deamnde10 =data;
    this.statDr.getAllDemandesParMonth(11).subscribe(data=>{
        this.deamnde11 =data;
    this.statDr.getAllDemandesParMonth(12).subscribe(data=>{
        this.deamnde12 =data;
  
        this.statDr.getAllDemandesRepondueParExpertByMonth(this.id, 1).subscribe(data=>{
          this.reponse1 =data;
        this.statDr.getAllDemandesRepondueParExpertByMonth(this.id, 2).subscribe(data=>{
          this.reponse2 =data;
        this.statDr.getAllDemandesRepondueParExpertByMonth(this.id, 3).subscribe(data=>{
          this.reponse3 =data;
        this.statDr.getAllDemandesRepondueParExpertByMonth(this.id, 4).subscribe(data=>{
           this.reponse4 =data;
        this.statDr.getAllDemandesRepondueParExpertByMonth(this.id, 5).subscribe(data=>{
           this.reponse5 =data;
        this.statDr.getAllDemandesRepondueParExpertByMonth(this.id,6).subscribe(data=>{
             this.reponse6 =data;
        this.statDr.getAllDemandesRepondueParExpertByMonth(this.id, 7).subscribe(data=>{
            this.reponse7 =data;
        this.statDr.getAllDemandesRepondueParExpertByMonth(this.id, 8).subscribe(data=>{
           this.reponse8 =data;
        this.statDr.getAllDemandesRepondueParExpertByMonth(this.id, 9).subscribe(data=>{
            this.reponse9 =data;
        this.statDr.getAllDemandesRepondueParExpertByMonth(this.id,10).subscribe(data=>{
           this.reponse10 =data;
        this.statDr.getAllDemandesRepondueParExpertByMonth(this.id, 11).subscribe(data=>{
            this.reponse11 =data;
        this.statDr.getAllDemandesRepondueParExpertByMonth(this.id,12).subscribe(data=>{
            this.reponse12 =data;

        
    /// chart

    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;
    
    option = {
      // title: {
      // text: 'Rainfall vs Evaporation',
    
      // },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Demandes Avis Envoyes', 'Demandes reponduees']
      },
      toolbox: {
        show: true,
        feature: {
          magicType: { show: true, type: ['line', 'bar'] },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          // prettier-ignore
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Demandes Avis Envoyes',
          type: 'bar',
          data: [
            this.deamnde1,this.deamnde2,this.deamnde3,this.deamnde4,this.deamnde5, this.deamnde6,this.deamnde7, this.deamnde8, this.deamnde9, this.deamnde10,this.deamnde11, this.deamnde12
          ],
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
        },
        {
          name: 'Demandes reponduees',
          type: 'bar',
          data: [this.reponse1, this.reponse2,this.reponse3,this.reponse4,this.reponse5,this.reponse6,this.reponse7,this.reponse8,this.reponse9,this.reponse10,this.reponse11, this.reponse12
          ],
          markPoint: {
            data: [
              { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
              { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
        }
      ]
    };
    
    option && myChart.setOption(option);
    
  }) }) }) }) }) }) }) }) }) }) }) })  
}) }) }) }) }) }) }) }) }) }) }) })  
  
  }
  logout() {
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    this.service.islogin = false;
  this.router.navigate(['']);
      ///location.reload();
  }
}
