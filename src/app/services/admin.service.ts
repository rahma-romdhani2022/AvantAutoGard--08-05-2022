import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modele/user';
//import { DatePipe } from '@angular/common';

import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { OnInit } from '@angular/core';
import { Expert } from '../modele/expert';
import { timingSafeEqual } from 'crypto';
@Injectable({
  providedIn: 'root'
})
export class AdminService{

  private updateimage = 'http://localhost:8281/adminDigital/updateImage';
  private signup = 'http://localhost:8281/adminDigital/signup';
  private loginn = 'http://localhost:8281/api/login';
  private getAdminDigital = 'http://localhost:8281/adminDigital/getAdmin';
  private getAdmiMedical ="http://localhost:8281/adminMedical";
  private updateDigital = 'http://localhost:8281/adminDigital/update';
  private baseUrl =  'http://localhost:8281/adminDigital/updateEx' ; 
  private getUser ="http://localhost:8281/api/user"  ; 
  private addExpertParAdmin ="http://localhost:8281/expert/addExpertParAdminSansImage" ; 
  private getAllExpert = "http://localhost:8281/expert/all" ;
  private imageExpert = 'http://localhost:8281/expert/updateImage';
  private  editeImageProfileAdminManager =" http://localhost:8281/adminMedical/updateImage";
  private  editeProfileAdminManager ="http://localhost:8281/adminMedical/update";
  islogin = false;
  admin = false;
  expert = false;
  listData : any;
  expertsData :any=[];
  testTab : number ; 
  AdminConnecte : any ; 
  adminAmodifier : any ; 
  retrieveResponse : any ; 
  base64Data : any ; 
  imageAdmin : any ; 

  allExpertsDeAdminX :any[]=[]; 
  lengthAllExpertsDeAdminX : number ; 
  public dataForm:  FormGroup; 
  constructor(private http: HttpClient) { }
  
  clicker(){
    $('.cardFlip').toggleClass('flipped');
  }
  
  updateProfileAdminMedical(id: number, value: any ): Observable<Object> {
  return this.http.put(`${this.editeProfileAdminManager}/${id}`, value);
  }
  updateImageProfileAdminMedical(id: number, file : File): Observable<any> {
    return this.http.put(`${this.editeImageProfileAdminManager}/${id}`,file);
  }
  updateImageExpert(id: number, file : File): Observable<any> {
    return this.http.put(`${this.imageExpert}/${id}`,file);
  }
  getAllExperts(role: string): Observable<Object> {
    return this.http.get(`${this.getAllExpert}/${role}`);
  }
  getUtilisateur(id: number): Observable<Object> {
    return this.http.get(`${this.getUser}/${id}`);
  }
  updateExpertTotale(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}`,value);
  }
  updateImage(id: number, file : File): Observable<any> {
    return this.http.put(`${this.updateimage}/${id}`,file);
  }
  login(username, password) {
     return this.http.post(`${this.loginn}`,{username, password});
   }  
  getAdminDigitall(id: number): Observable<Object> {
    return this.http.get(`${this.getAdminDigital}/${id}`);
  }
  getAdminMedicall(id: number): Observable<Object> {
    return this.http.get(`${this.getAdmiMedical}/${id}`);
  }
  createData(info: Object): Observable<Object> {
    return this.http.post(`${this.signup}`, info);
  }
  AddExpertAvecAdmin(id: number , value: any ): Observable<any> {
    return this.http.post(`${this.addExpertParAdmin}/${id}` , value );
  }
   
  updatedata(id: number, value: any ): Observable<Object> {
    return this.http.put(`${this.updateDigital}/${id}`, value);
  }
 private urlGetAllDemandeEnvoyes="http://localhost:8281/consultation/DemandeAvisEnvoyes"
 getAllDemandesAujordhui(): Observable<Object[]> {
  return this.http.get<Object[]>(`${this.urlGetAllDemandeEnvoyes}`);
}
private urlUpdateProfileAdminDigital = "http://localhost:8281/adminDigital/update"
updateProfileAdminDigital(id: number): Observable<Object> {
  return this.http.put(`${this.urlUpdateProfileAdminDigital}/${id}` , {});
  }
  private urlUpdateImageAdminDigital = "http://localhost:8281/adminDigital/updateImage"
  updateImageProfileAdminDigital(id: number, file : File): Observable<any> {
    return this.http.put(`${this.urlUpdateImageAdminDigital}/${id}`,file);
  }

  private urlGetAllExpertsParIdAdminMedical="http://localhost:8281/expert/getExpertsParAdminMedical"
  getAllExpertsParIdAdminMedical(idAdminMedical : number ): Observable<Object[]> {
    return this.http.get<Object[]>(`${this.urlGetAllExpertsParIdAdminMedical}/${idAdminMedical}`);
  }
  private urlGetLengthMethodePrecedant="http://localhost:8281/expert/getExpertsParAdminMedicalNbr"
  getAllExpertsParIdAdminMedicalNumber(idAdminMedical : number ): Observable<number> {
    return this.http.get<number>(`${this.urlGetLengthMethodePrecedant}/${idAdminMedical}`);
  }
}
/*uploadFile(file: File): Observable<HttpEvent<{}>> {
		const formdata: FormData = new FormData();
		formdata.append('file', file);
		const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
			  reportProgress: true,
			  responseType: 'text'
		});
	
		return this.http.request(req);
   }
   getImageAdmin(){
    this.getAdminMedicall(parseInt(localStorage.getItem("idAdmin"))).subscribe(data=>{
       this.AdminConnecte=data ;
       if(this.AdminConnecte.image !==null){
      this.retrieveResponse = this.admin;
      this.base64Data = this.retrieveResponse.image;
      this.imageAdmin = 'data:image/jpeg;base64,' + this.base64Data; }  } )
   }*/
     