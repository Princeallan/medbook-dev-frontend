import { Component } from '@angular/core';
import {PatientService,PatientResponse} from "../../../Service/patient.service";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
  constructor(private PatientService: PatientService) {
  }

  patients!: PatientResponse[];

  ngOnInit() {
    this.getPatients()
  }

  getPatients() {
    this.PatientService.getPatients().subscribe((res: any) => {
      console.log(res)
      this.patients = res.data
    })
  }

}
