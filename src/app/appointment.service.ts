import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private httpclient: HttpClient) {}
  private baseUrl = 'http://localhost:9009/appointment/getAllAppointment';
  private baseUrl1 = 'http://localhost:9009/appointment/saveAppointment';
  private deleteUrl = 'http://localhost:9009/appointment/deleteAppointment';

  getAppointmentList(): Observable<Appointment[]> {
    return this.httpclient.get<Appointment[]>(`${this.baseUrl}`);
  }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpclient.post<Appointment>(`${this.baseUrl1}`, appointment);
  }

  deleteAppointment(id: number): Observable<Object> {
    return this.httpclient.delete(`${this.deleteUrl}/${id}`);
  }
}
