import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modele/user';

@Injectable({
  providedIn: 'root'
})
export class PatientService{

 
  private getAllPatientt="http://localhost:8281/patient/all";
  private getPatienttByMG ="http://localhost:8281/patient/patiente"  ;
  private suppressionApartirGeneraliste ="http://localhost:8281/patient/deletepatient" ;
  private getPatientt = "http://localhost:8281/patient/get";
  private delete = "http://localhost:8281/patient/deletepatient"
  patients : any=[] ;
  lengthTabPatients : number ; 
  patientsDr : any=[] ;
  patientsDrExpert: any=[] ;
  lengthTabPatientsDr  : number ; 
  lengthTabPatientsDrExpert  : number ; 
  
    constructor(private http: HttpClient) { }
    getPatient(idPatient : number): Observable<Object> {
      return this.http.get(`${this.getPatientt}/${idPatient}`);
    }

   deletePatientApartirMG(idGeneraliste : number , idP : number): Observable<any> {
    return this.http.delete(`${this.suppressionApartirGeneraliste}/${idGeneraliste}/${idP}`);
  }
  deletePatient(id : number): Observable<any> {
    return this.http.delete(`${this.delete}/${id}`);
  }

    getAllPatients(): Observable<Object> {
      return this.http.get(`${this.getAllPatientt}`);
    }

    getPatientByGeneraliste(idGeneraliste: number): Observable<Object> {
      return this.http.get(`${this.getPatienttByMG}/${idGeneraliste}`);
    }
     
    private urlGetPatientPArDateInscription = "http://localhost:8281/patient/allParDate" ;
    getAllPatientsByDateInscription(): Observable<any> {
      return this.http.get<any>(`${this.urlGetPatientPArDateInscription}`)
    }

    private urlGetNbrPatientCeMois="http://localhost:8281/patient/parMonth" ; 
    getNbrPatientCeMois(): Observable<number> {
      return this.http.get<number>(`${this.urlGetNbrPatientCeMois}`)
    }
    private urlGetNbrPatientCetteAnnee="http://localhost:8281/patient/parYear" ; 
    gtNbrPatientCetteAnnee(): Observable<number> {
      return this.http.get<number>(`${this.urlGetNbrPatientCetteAnnee}`)
    }
    private urlGetNbrPatientCetteSemaine="http://localhost:8281/patient/allParSemaine" ; 
    gtNbrPatientCetteSemaine(): Observable<number> {
      return this.http.get<number>(`${this.urlGetNbrPatientCetteSemaine}`)
    }
    private urlGetNbrPatientParMonth="http://localhost:8281/patient/patientParMonth?month=" ; 
    getNbrPatientParMonth(month : number): Observable<number> {
      return this.http.get<number>(`${this.urlGetNbrPatientParMonth+ month}`); }
    
    private urlGetMyennesAgesPatients="http://localhost:8281/patient/getMoyenneAgeParMonth?month=" ; 
    getMoyenneAgesPatientParMonth(month : number): Observable<number> {
      return this.http.get<number>(`${this.urlGetMyennesAgesPatients+ month}`); }
    
        
    private uurlGetNumConsultationDePatient="http://localhost:8281/consultation/getNumConsultation" ; 
    getNumConsultationDePatient(idPatient : number): Observable<number> {
      return this.http.get<number>(`${this.uurlGetNumConsultationDePatient}/${idPatient}`); }

      private uurlGetPAtientById=" http://localhost:8281/patient/patiente" ; 
      getPatientById(idPatient : number): Observable<Object> {
        return this.http.get<Object>(`${this.uurlGetPAtientById}/${idPatient}`); }
  }