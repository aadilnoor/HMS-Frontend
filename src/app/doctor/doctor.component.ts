import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent implements OnInit {
  constructor(
    private patientService: PatientService,
    private router: Router,
    private docauthService: DocauthService
  ) {}

  ngOnInit(): void {
    this.getPatients();
  }

  patients: Patient[] = [];

  getPatients() {
    this.patientService.getPatientList().subscribe((data) => {
      this.patients = data;
    });
  }

  update(id: number) {
    this.router.navigate(['update-patient', id]);
  }

  delete(id: number) {
    this.patientService.deletePatient(id).subscribe((data) => {
      console.log(data);
      this.getPatients();
    });
  }

  view(id: number) {
    this.router.navigate(['view-patient', id]);
  }

  logout() {
    this.docauthService.isDoctorLoggedOut();
    this.router.navigate(['home']);
  }
}
