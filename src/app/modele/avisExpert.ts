import { Expert } from "./expert";

export interface AvisExpert {
    id : number ;
    commantaireDroite :string ; 
    commantaireGauche : string ; 
    graviteDroite : string ;
    graviteGauche : string ; 
    maladieDroite : string ; 
    maladieGauche:string ;    
    sainGauche:string ; 
    sainDroite:string ; 
    expert : Expert ; 
}
