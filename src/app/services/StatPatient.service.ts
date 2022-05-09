import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StatPatientService{
    constructor(private http: HttpClient) { } 
    
    private urlGetPatientSuperieurA50 ="http://localhost:8281/patient/ageS"
    getAllPatientsSupA50(): Observable<number> {
        return this.http.get<number>(`${this.urlGetPatientSuperieurA50}`); }
     
    private urlGetPatientInfeieurA50 ="http://localhost:8281/patient/ageI"
    getAllPatientsInfA50(): Observable<number> {
        return this.http.get<number>(`${this.urlGetPatientInfeieurA50}`); }
         
    private urlPatientParMonth ="http://localhost:8281/patient/patientParMonth?month="
    getAllPatientsParMonth(month : number): Observable<number> {
        return this.http.get<number>(`${this.urlPatientParMonth + month}`); }
         

    private urlGellAllPAtientsHomme ="http://localhost:8281/patient/homme"
    getAllPatientsHomme(): Observable<number> {
        return this.http.get<number>(`${this.urlGellAllPAtientsHomme}`); }

    private urlGellAllPAtientsFemme ="http://localhost:8281/patient/femme"
    getAllPatientsFemme(): Observable<number> {
        return this.http.get<number>(`${this.urlGellAllPAtientsFemme}`); }


    private urlGellAllPAtientsNbr="http://localhost:8281/patient/nbrAll"
    getAllPatientsNumber(): Observable<number> {
        return this.http.get<number>(`${this.urlGellAllPAtientsNbr}`); }
}