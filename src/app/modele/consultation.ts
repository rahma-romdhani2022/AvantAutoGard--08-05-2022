import { AutoDetection } from "./autoDetection";
import { Generaliste } from "./generaliste";
import { Patient } from "./patient";


export interface Consultation {
    id: Number;
    image1D: any
    image2D: any
    image3D: any
    image4D: any
    image5D: any
    image1G: any
    image2G: any
    image3G: any
    image4G: any
    image5G: any, 
    patient : Patient; 
    dateConsult : string ; 
    demandeAvisD : number ; 
    demandeAvisG : number ; 
    autoDetection : AutoDetection ; 
    generaliste : Generaliste
  
  }