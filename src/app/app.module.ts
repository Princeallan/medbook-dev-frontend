import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {NavbarComponent} from './Pages/Partials/navbar/navbar.component';
import {CreatePatientComponent} from './Pages/Patients/create-patient/create-patient.component';
import {PatientServiceComponent} from './Pages/Patients/patient-service/patient-service.component';
import {PatientsComponent} from './Pages/Patients/patients/patients.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreatePatientComponent,
    PatientServiceComponent,
    PatientsComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
