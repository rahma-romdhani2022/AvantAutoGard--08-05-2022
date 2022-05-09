import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modele/user';
//import { DatePipe } from '@angular/common';

import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { OnInit } from '@angular/core';
import { Expert } from '../modele/expert';
import { Generaliste } from '../Admin/MG/all-mg/all-mg.component';
@Injectable({
  providedIn: 'root'
})
export class GeneralisteService{

  private updateImageMg ="http://localhost:8281/medecin/updateImage";
  private getAllMG ="http://localhost:8281/medecin/all";
  private updateMG ="http://localhost:8281/medecin/update" ;
  private getUser ="http://localhost:8281/medecin/getMedecin"  ;
  private suppression ="http://localhost:8281/medecin" 
  generalistes : any=[] ;
  lengthTabGeneralistes : number ; 
    constructor(private http: HttpClient) { }
   deleteGeneraliste(id : number): Observable<any> {
    return this.http.delete(`${this.suppression}/${id}`);
  }
    updateImageGeneraliste(id: number, file : File): Observable<any> {
      return this.http.put(`${this.updateImageMg}/${id}`,file);
    }
    getAllGeneralistes(): Observable<Object> {
      return this.http.get(`${this.getAllMG}`);
    }
    getUtilisateur(id: number): Observable<Object> {
      return this.http.get(`${this.getUser}/${id}`);
    }
    updateGeneraliste(id: number, value: any ): Observable<Object> {
      return this.http.put(`${this.updateMG}/${id}`, value);
    }
   
   
   
  }