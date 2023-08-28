import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatientServiceComponent} from './Pages/Patients/patient-service/patient-service.component';
import {PatientsComponent} from './Pages/Patients/patients/patients.component';
import {CreatePatientComponent} from './Pages/Patients/create-patient/create-patient.component';

const routes: Routes = [
  {path: '', component: PatientServiceComponent, title: "Home page"},
  {path: 'add-patient', component: CreatePatientComponent, title: "Add Patient"},
  {path: 'patients', component: PatientsComponent, title: "Patients List"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
