import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface PatientServiceResponse {
  id: number,
  comment: string,
  service: ServiceResponse
  patient: PatientResponse
}

interface ServiceResponse {
  id: number;
  name: string;
}

interface GenderResponse {
  id: number;
  name: string;
}

export interface PatientResponse {
  id: number,
  name: string,
  date_of_birth: string
  gender: GenderResponse
}

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) {
  }

  getPatients() {
    return this.httpClient.get(`http://medbook-dev-backend.test/api/patients`)
  }

  getPatientServices() {
    return this.httpClient.get(`http://medbook-dev-backend.test/api/patient-services`)
  }
}
