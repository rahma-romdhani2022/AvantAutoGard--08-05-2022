import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ImageComponent } from './image/image.component';
import { AccueilOphtalmologueComponent } from './Ophtalmologue/accueil-ophtalmologue/accueil-ophtalmologue.component';
import { AjoutAvisComponent } from './Ophtalmologue/ajout-avis/ajout-avis.component';
import { FormPageComponent } from './Ophtalmologue/form-page/form-page.component';
import { HistoriqueAvisComponent } from './Ophtalmologue/historique-avis/historique-avis.component';
import { InfosPatientComponent } from './Ophtalmologue/infos-patient/infos-patient.component';
import { LoginOphtalmologueComponent } from './Ophtalmologue/authentification/login-ophtalmologue/login-ophtalmologue.component';
import { RegistreOphtalmologueComponent } from './Ophtalmologue/authentification/registre-ophtalmologue/registre-ophtalmologue.component';
import { RepondreAvis1Component } from './Ophtalmologue/repondre-avis1/repondre-avis1.component';
import { SecondPageComponent } from './Ophtalmologue/second-page/second-page.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { ConsultationComponent } from './Ophtalmologue/historique-avis/consultation/consultation.component';
import { ForgetPasswordComponent } from './Ophtalmologue/forget-password/forget-password.component';
import { ResetPwdComponent } from './Ophtalmologue/forget-password/reset-pwd/reset-pwd.component';
import { ProfilePageComponent } from './Ophtalmologue/Profile/profile-page/profile-page.component';
import { EditProfileComponent } from './Ophtalmologue/Profile/edit-profile/edit-profile.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { BtnProfilComponent } from './Ophtalmologue/btn-profil/btn-profil.component';
import { LoginAdminComponent } from './Admin/Authentification Admin/login-admin/login-admin.component';
import { RegistreAdminComponent } from './Admin/Authentification Admin/registre-admin/registre-admin.component';
import { AllDoctorsComponent } from './Admin/Doctors/all-doctors/all-doctors.component';
import { AddDoctorComponent } from './Admin/Doctors/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './Admin/Doctors/edit-doctor/edit-doctor.component';
import { AddDoctor2Component } from './Admin/Doctors/add-doctor2/add-doctor2.component';
import { ChartActivityComponent } from './Ophtalmologue/chart-activity/chart-activity.component';
import { DossiersConsultationsComponent } from './Ophtalmologue/historique-avis/dossiers-consultations/dossiers-consultations.component';
import { ProfilDoctorComponent } from './Admin/Doctors/profil-doctor/profil-doctor.component';
import { PatientsDrOphtalmologueComponent } from './Admin/Doctors/patients-dr-ophtalmologue/patients-dr-ophtalmologue.component';
import { ChartActivityDrOphtalmologueComponent } from './Admin/Doctors/chart-activity-dr-ophtalmologue/chart-activity-dr-ophtalmologue.component';
import { AllPatientsComponent } from './Admin/Patient/all-patients/all-patients.component';
import { EditPatientComponent } from './Admin/Patient/edit-patient/edit-patient.component';
import { AllMGComponent } from './Admin/MG/all-mg/all-mg.component';
import { EditMGComponent } from './Admin/MG/edit-mg/edit-mg.component';
import { DialogDetailsComponent } from './Admin/Doctors/patients-dr-ophtalmologue/dialog-details/dialog-details.component';
import { AllIAComponent } from './Admin/IA Modeles/all-ia/all-ia.component';
import { AddIAModelComponent } from './Admin/IA Modeles/add-ia-model/add-ia-model.component';
import { EditIaModelComponent } from './Admin/IA Modeles/edit-ia-model/edit-ia-model.component';
import { StatAppComponent } from './Admin/Statistiques/stat-app/stat-app.component';
import { StatDrComponent } from './Admin/Statistiques/stat-dr/stat-dr.component';
import { StatPatientComponent } from './Admin/Statistiques/stat-patient/stat-patient.component';
import { StatModeleComponent } from './Admin/Statistiques/stat-modele/stat-modele.component';
import { EspaceStockageComponent } from './Admin/espace-stockage/espace-stockage.component';
import { ForgetPswdAdminComponent } from './Admin/Authentification Admin/forget-pswd-admin/forget-pswd-admin.component';
import { PageTelechargementComponent } from './page-telechargement/page-telechargement.component';
import { ProfileAdminComponent } from './Admin/Profile-Admin/profile-admin/profile-admin.component';
import { EditProfileAdminComponent } from './Admin/Profile-Admin/edit-profile-admin/edit-profile-admin.component';
import { TeteInstallationComponent } from './page-telechargement/header/tete-installation/tete-installation.component';
import { TestUploadImageComponent } from './test-upload-image/test-upload-image.component';
import { FlipComponent } from './flip/flip.component';
import { RepondreDroiteComponent } from './Ophtalmologue/repondre avis/oeil droite/repondre-droite/repondre-droite.component';
import { RepondreGaucheComponent } from './Ophtalmologue/repondre avis/oeil gauche/repondre-gauche/repondre-gauche.component';
import { AjoutDroiteComponent } from './Ophtalmologue/ajout avis/oeil droite/ajout-droite/ajout-droite.component';
import { AjoutGaucheComponent } from './Ophtalmologue/ajout avis/oeil gauche/ajout-gauche/ajout-gauche.component';
import { ConsltOeilGaucheComponent } from './Ophtalmologue/historique-avis/consultation/oeil gauche/conslt-oeil-gauche/conslt-oeil-gauche.component';
import { ConsltOeilDroiteComponent } from './Ophtalmologue/historique-avis/consultation/oeil droite/conslt-oeil-droite/conslt-oeil-droite.component';
import { PatientsMGComponent } from './Admin/MG/patients-mg/patients-mg.component';
import { AuthGuardExpert } from './services/authGuardExpert';

const routes: Routes = [
  {path:"" , component:HomePageComponent },
  { path:"ophtalmologue" , component:SecondPageComponent} ,
  { path:"accueil" , component:AccueilOphtalmologueComponent, canActivate: [AuthGuardExpert] } ,
  { path:"repondreAvis/:idConsultation" , component:RepondreAvis1Component, canActivate: [AuthGuardExpert]},
  { path:"AjoutAvis/:idConsultation" , component:AjoutAvisComponent, canActivate: [AuthGuardExpert]},
  { path:"infosPatient" , component:InfosPatientComponent, canActivate: [AuthGuardExpert]},
  {path:"historique" , component:HistoriqueAvisComponent, canActivate: [AuthGuardExpert]},
  { path:"test" , component:TestComponent},
  { path:"test1" , component:Test2Component},
  { path:"1" , component:ImageComponent},
  {path:"0" , component:FormPageComponent},
  {path:"consultation/:idConsultation" , component: ConsultationComponent, canActivate: [AuthGuardExpert]},
  {path:"oeilDroite/:idConsultation" , component: ConsltOeilDroiteComponent, canActivate: [AuthGuardExpert]},
   {path:"oeilGauche/:idConsultation" , component: ConsltOeilGaucheComponent, canActivate: [AuthGuardExpert]},
  {path:"PageProfile/:id" , component: ProfilePageComponent ,canActivate: [AuthGuardExpert]},
  {path:"EditProfile/:id" , component: EditProfileComponent, canActivate: [AuthGuardExpert]},
  {path:"chart-Activity-Doctor" , component: ChartActivityComponent, canActivate: [AuthGuardExpert]},
  {path:"historiques" , component: DossiersConsultationsComponent, canActivate: [AuthGuardExpert]},
  {path:"demande_droite/:idConsultation" , component:   RepondreDroiteComponent, canActivate: [AuthGuardExpert]},
  {path:"demande_gauche/:idConsultation" , component: RepondreGaucheComponent, canActivate: [AuthGuardExpert]},
  {path:"avis_droite/:idConsultation" , component:   AjoutDroiteComponent, canActivate: [AuthGuardExpert]},
  {path:"avis_gauche/:idConsultation" , component: AjoutGaucheComponent, canActivate: [AuthGuardExpert]},
  {path:"patients_Expert/:idExpert" , component: PatientsDrOphtalmologueComponent, canActivate: [AuthGuardExpert]},

  
  {path:"Admin" , component: DashboardComponent, canActivate: [AuthGuardExpert] } ,
  {path:"Profile-Admin" , component: ProfileAdminComponent, canActivate: [AuthGuardExpert] } ,
  {path:"Edit-Profile-Admin" , component: EditProfileAdminComponent, canActivate: [AuthGuardExpert] } ,
  {path:"bouton" , component: BtnProfilComponent} ,
  {path:"All-Doctors" , component: AllDoctorsComponent, canActivate: [AuthGuardExpert] } ,
  {path:"Add-Doctor" , component: AddDoctor2Component, canActivate: [AuthGuardExpert] } ,
  {path:"Profile-Doctor/:id" , component : ProfilDoctorComponent, canActivate: [AuthGuardExpert] } ,
  {path:"Patients/:id" , component : PatientsMGComponent, canActivate: [AuthGuardExpert] } ,
  {path:"All-Patients" , component : AllPatientsComponent, canActivate: [AuthGuardExpert] } ,
  {path:"Chart" , component : ChartActivityDrOphtalmologueComponent, canActivate: [AuthGuardExpert] } ,
  {path:"form" , component: EditDoctorComponent, canActivate: [AuthGuardExpert] } ,
  {path:"Edit-Patient" , component: EditPatientComponent, canActivate: [AuthGuardExpert] } ,
  {path:"Drs" , component: AllMGComponent, canActivate: [AuthGuardExpert] } ,
  {path:"IA_Modeles" , component: AllIAComponent, canActivate: [AuthGuardExpert] } ,
  {path:"Ajouter" , component: AddIAModelComponent, canActivate: [AuthGuardExpert] } ,
  {path:"Upadate" , component: EditIaModelComponent, canActivate: [AuthGuardExpert] } ,
  {path:"Satistiques_App" , component: StatAppComponent, canActivate: [AuthGuardExpert] } ,
  {path:"Satistiques_Dr" , component: StatDrComponent, canActivate: [AuthGuardExpert] } ,
  {path:"Satistiques_Patient" , component: StatPatientComponent, canActivate: [AuthGuardExpert] } ,
  {path:"Satistiques_Modele" , component: StatModeleComponent, canActivate: [AuthGuardExpert] } ,
  {path:"Espace_Stockage" , component: EspaceStockageComponent, canActivate: [AuthGuardExpert] } ,
  {path:"ForgetPswdAdmin" , component: ForgetPswdAdminComponent},
  {path:"installation" , component: PageTelechargementComponent},

  { path:"Registre" , component:RegistreOphtalmologueComponent},
  { path:"Login" , component:LoginOphtalmologueComponent},
  {path:"ForgetPassword" , component: ForgetPasswordComponent},
  {path:"RestPassword" , component: ResetPwdComponent},
  {path:"Login-Admin" , component: LoginAdminComponent},
  {path:"Registre-Admin" , component: RegistreAdminComponent},

  {path:"header" , component: TeteInstallationComponent},
  {path:"images" , component: TestUploadImageComponent},
  {path:"flip" , component: FlipComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }