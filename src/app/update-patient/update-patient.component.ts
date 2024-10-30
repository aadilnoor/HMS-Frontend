import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css'],
})
export class UpdatePatientComponent implements OnInit {
  id: number = 0;
  patient: Patient = new Patient();
  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router
  ) {}

  onSubmit() {
    this.patientService
      .updatePatient(this.id, this.patient)
      .subscribe((data) => {
        console.log(data);
        this.goToDoctor();
      });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe((data) => {
      this.patient = data;
      console.log(this.patient);
    },
    (error) => {
      console.log('Error fetching patient data:', error);
    });
  }

  goToDoctor() {
    this.router.navigate(['doctor']);
  }
}
