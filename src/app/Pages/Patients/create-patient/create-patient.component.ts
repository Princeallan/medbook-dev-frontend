import {Component} from '@angular/core';
import {PatientService} from "../../../Service/patient.service";

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent {

  constructor(private patientService: PatientService) {
  }

  name!: string
  date_of_birth!: string
  gender_id!: number
  service_id!: number
  comment!: string

  savePatient() {
    let patientData = {
      name: this.name,
      date_of_birth: this.date_of_birth,
      gender_id: this.gender_id,
      service_id: this.service_id,
      comment: this.comment
    }
    this.patientService.savePatient(patientData).subscribe({
      next: (res: any) => {
        console.log(res)
      },
      error: () => {

      }
    })
  }
}
