import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css'],
})
export class CreateAppointmentComponent {
  appointment: Appointment = new Appointment();

  constructor(
    private appointmentService: AppointmentService,
    private router: Router
  ) {}

  saveAppointment() {
    this.appointmentService
      .createAppointment(this.appointment)
      .subscribe((data) => {
        console.log(data);
        this.goToAppointment();
      });
  }

  // ngOnInit(): void {}

  onSubmit() {
    this.saveAppointment();
  }

  goToAppointment() {
    this.router.navigate(['/appointmentlist']);
  }
}
