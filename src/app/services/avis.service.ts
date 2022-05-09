import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisServiceService  {
   lengthDemandePrincipale : number ; 
   
  constructor(private http: HttpClient) { }

  private urlGetAll="http://localhost:8281/consultation/Consultations" ; 
  getAllConsultations(): Observable<Object[]> {
      return this.http.get<Object[]>(`${this.urlGetAll}`)
    }
  
    private addAvisExperts ="http://localhost:8281/avisExpert/addAvis" ; 
    addAvisExpert(idExpert: number): Observable<any> {
    return this.http.post(`${this.addAvisExperts}/${idExpert}` ,{});
  }
  private urlAddAvisDroite="http://localhost:8281/avisExpert/updateAvisD"
  updateAvisExpertDroiteQuiCreerAInstant(idAvisExpert : number  , value : any ): Observable<any> {
    return this.http.put(`${this.urlAddAvisDroite}/${idAvisExpert}` , value);
  }
private urlUpdateAttributDemandeAvisDroite ="http://localhost:8281/consultation/demandeAvisD"
updateAttributDemandeDroiteDansConsultation(idConsultation : number ): Observable<any> {
  return this.http.put(`${this.urlUpdateAttributDemandeAvisDroite}/${idConsultation}`,{});
}
private urlAddAvisGauche="http://localhost:8281/avisExpert/updateAvisG"
  updateAvisExpertGaucheQuiCreerAInstant(idAvisExpert : number  , value : any ): Observable<any> {
    return this.http.put(`${this.urlAddAvisGauche}/${idAvisExpert}` , value);
  }
  private urlUpdateAttributDemandeAvisGauche ="http://localhost:8281/consultation/demandeAvisD"
updateAttributDemandeGaucheDansConsultation(idConsultation : number ): Observable<any> {
  return this.http.put(`${this.urlUpdateAttributDemandeAvisGauche}/${idConsultation}`,{});
}
  private urlPutAvisExpert ="http://localhost:8281/Auto/ajouterReponseAvis" ; 
  putAvisExpert(idAutoDetection : number , idConsultation: number ,idAvisExpert : number ): Observable<any> {
    return this.http.put(`${this.urlPutAvisExpert}/${idAutoDetection}/${idConsultation}/${idAvisExpert}` , {});
  }

  private getconsultationByID ="http://localhost:8281/consultation"
  getConsultationID(idConsult: number): Observable<Object[]> {
    return this.http.get<Object[]>(`${this.getconsultationByID}/${idConsult}`, {

    });
  }

  private urlGetHistoriques ="http://localhost:8281/consultation/historiques";
  getAllHistoriquesDeExpert(idExpert : number): Observable<Object[]> {
    return this.http.get<Object[]>(`${this.urlGetHistoriques}/${idExpert}`)
  }
   private urlGetAllDemnades="http://localhost:8281/expert/demandes";
   getAllDemandes(): Observable<Object[]> {
    return this.http.get<Object[]>(`${this.urlGetAllDemnades}`)
  }

  private urlAll100="http://localhost:8281/consultation/getAll"
  getAllDemandesLastVersion(): Observable<Object[]> {
    return this.http.get<Object[]>(`${this.urlAll100}`)
  }
  private urlGetAllAutoDetictionToDay="http://localhost:8281/Auto/autoToDay"
  getAllAutoDetictionToDay(): Observable<number> {
    return this.http.get<number>(`${this.urlGetAllAutoDetictionToDay}`);
  }
}