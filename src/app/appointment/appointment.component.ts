import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  appointments: Appointment[] = [];
  constructor(private appointmentService: AppointmentService) {}

  getAppointments() {
    this.appointmentService.getAppointmentList().subscribe((data) => {
      console.log(data);
      this.appointments = data;
    });
  }

  ngOnInit(): any {
    this.getAppointments();
  }

  delete(id: number) {
    this.appointmentService.deleteAppointment(id).subscribe({
      next: () => {
        console.log('id deleting');
        // Update the appointments array after deletion
        this.appointments = this.appointments.filter(
          (appointment) => appointment.id !== id
        );

        // // Show a success message
        // alert('Appointment deleted successfully!');
      },
      error: (err) => {
        // Log and show error message
        console.error('Error deleting appointment', err);
        // alert('Failed to delete the appointment.');
      },
    });
  }
}
