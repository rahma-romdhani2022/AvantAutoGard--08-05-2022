import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StatDrService{
    constructor(private http: HttpClient) { } 
    
    /********* Partiee Expert Ophtalmologueeee **********/
    
    private urlGetExpertsByGenderFemme ="http://localhost:8281/expert/getUserByGenderFemmeByMonth?month="
   getUsersByGenderFemme(month : number): Observable<number> {
        return this.http.get<number>(`${this.urlGetExpertsByGenderFemme + month}`); }
     
      
    private urlGetExpertsByGenderHomme ="http://localhost:8281/expert/getUserByGenderHommeByMonth?month="
    getUsersByGenderHomme(month : number): Observable<number> {
        return this.http.get<number>(`${this.urlGetExpertsByGenderHomme + month}`); }
         
     private urlGetExpertsParMonth =" http://localhost:8281/expert/getExpertParMonth?month="
    getAllExpertsParMonth(month : number): Observable<number> {
        return this.http.get<number>(`${this.urlGetExpertsParMonth + month}`); 
    
    }
      
    private urlGetAllDemandesParMonth =" http://localhost:8281/expert/getDemendeAvisEnvoyesParMonth?month="
    getAllDemandesParMonth(month : number): Observable<number> {
        return this.http.get<number>(`${this.urlGetAllDemandesParMonth + month}`);  }
    
   
    
      
    private urlAllDemandesRepondueParExpertByMonth ="http://localhost:8281/expert/getDemendeAvisEnvoyesParMonthAvecReponse"
    private suite = "?month=" ;
    getAllDemandesRepondueParExpertByMonth(idExpert : number , month : number): Observable<number> {
        return this.http.get<number>(`${this.urlAllDemandesRepondueParExpertByMonth}/${idExpert}${this.suite+month }`); 
    }
    
    /********* Partiee Generaliste   **********/
 
    private urlGetGeneralistesParMonth =" http://localhost:8281/medecin/getMedecinParMonth?month="
    getGeneralistesParMonth(month : number): Observable<number> {
        return this.http.get<number>(`${this.urlGetGeneralistesParMonth + month}`); }

    
    
        
}