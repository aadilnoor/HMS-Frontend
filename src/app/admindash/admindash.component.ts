import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css'],
})
export class AdmindashComponent implements OnInit {
  [x: string]: any;
  constructor(
    private patientService: PatientService,
    private adminAuthService: AdminauthService,
    private router: Router
  ) {}

  patients: Patient[] = [];

  ngOnInit(): void {
    console.log('working');
    this.getPatients();
  }
  getPatients() {
    this.patientService.getPatientList().subscribe((data) => {
      console.log(data);
      this.patients = data;
    });
  }

  deletePatient(id: number) {
    this.patientService.deletePatient(id).subscribe((data) => {
      console.log(data);
      this.getPatients();
    });
  }

  logout() {
    this.adminAuthService.isUserLoggedOut();
    this.router.navigate(['home']);
  }
}
