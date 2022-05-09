
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StatAppService{
    constructor(private http: HttpClient) { } 
    
    private urlGetGeneralistesNbr =" http://localhost:8281/medecin/getAllNbr"
    getGeneralistesAllNbr(): Observable<number> {
        return this.http.get<number>(`${this.urlGetGeneralistesNbr }`); }


    private urlGetExpertsNbr =" http://localhost:8281/expert/getAllNbr"
    getExpertsAllNbr(): Observable<number> {
        return this.http.get<number>(`${this.urlGetExpertsNbr }`); }
        
  private urlGEtYear="http://localhost:8281/patient/getYear" ; 
  getAnnnee(): Observable<number> {
    return this.http.get<number>(`${this.urlGEtYear}`); }
        
}


  