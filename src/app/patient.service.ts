import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private httpclient: HttpClient) {}

  private baseUrl = 'http://localhost:9009/patient/getAllPatients';
  private deleteUrl = 'http://localhost:9009/patient/deletePatient';
  private saveUrl = 'http://localhost:9009/patient/savePatient';
  private updateUrl = 'http://localhost:9009/patient/updatePatient';
  private getUrl = 'http://localhost:9009/patient/getPatient';

  getPatientList(): Observable<Patient[]> {
    return this.httpclient.get<Patient[]>(`${this.baseUrl}`);
  }

  deletePatient(id: number): Observable<object> {
    return this.httpclient.delete(`${this.deleteUrl}/${id}`);
  }

  createPatient(patient: Patient): Observable<Patient> {
    return this.httpclient.post<Patient>(`${this.saveUrl}`, patient);
  }

  getPatientById(id: number): Observable<Patient> {
    return this.httpclient.get<Patient>(`${this.getUrl}/${id}`);
  }

  updatePatient(id: number, patient: Patient): Observable<object> {
    return this.httpclient.put<Patient>(`${this.updateUrl}/${id}`, patient);
  }
}
