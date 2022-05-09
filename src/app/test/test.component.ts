import { Component, OnInit ,AfterViewInit, ViewChild } from '@angular/core';
import * as $ from 'jquery'
import * as echarts from 'echarts';
import { MatTableDataSource  , MatSort , MatPaginator} from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {//AfterViewInit
  constructor(public route: Router, private ar: ActivatedRoute,
    private httpClient : HttpClient , public service: UserServiceService) { }

  selectedFile: File;
  imgURL: string =null;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  url :any ;
  id : number ; 
  user :any={}

  ngOnInit() { 
    this.ar.paramMap.subscribe((x)=>{
      this.id =+ x.get('id');
      console.log("id : " , this.id);
     this.service.getData(this.id).subscribe(data => {
      this.user = data;
      console.log(this.user)
      console.log(this.user.image) 
     });
    })
  }
  onSelectFile(event ) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      this.selectedFile = event.target.files[0];
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result;
      }
    }
  }
  onUpload() {
    console.log(this.selectedFile);
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  

    this.httpClient.post('http://localhost:8281/api/updateImageExpert/'+this.id,
     uploadImageData)
      .subscribe();


  }
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
 /* onUpload() {
    console.log(this.selectedFile);
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  

    this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );


  }

  getImage() {
    this.httpClient.get('http://localhost:8281/image/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
 
    }*/
    
 
}