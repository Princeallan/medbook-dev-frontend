import {Component} from '@angular/core';
import {PatientService, PatientResponse, PatientServiceResponse} from 'src/app/Service/patient.service';

@Component({
  selector: 'app-patient-service',
  templateUrl: './patient-service.component.html',
  styleUrls: ['./patient-service.component.css']
})
export class PatientServiceComponent {
  constructor(private PatientService: PatientService) {
  }

  patients!: PatientResponse[];
  patient_services!: PatientServiceResponse[];

  ngOnInit() {
    this.getPatients()
    this.getPatientServices()
  }

  getPatients() {
    this.PatientService.getPatients().subscribe((res: any) => {
      console.log(res)
      this.patients = res.data
    })
  }

  getPatientServices() {
    this.PatientService.getPatientServices().subscribe((res: any) => {
      console.log(JSON.stringify(res.data))
      this.patient_services = res.data
    })
  }


}
