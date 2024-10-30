import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root',
})
export class MedicineService {
  constructor(private httpClient: HttpClient) {}

  private medUrl = 'http://localhost:9009/medicine/getAllMedicine';
  private getMedUrl = 'http://localhost:9009/medicine/getMedicine';
  private deleteUrl = 'http://localhost:9009/medicine/deleteMedicine';
  private saveUrl = 'http://localhost:9009/medicine/saveMedicine';
  private updateUrl = 'http://localhost:9009/medicine/updateMedicine';

  getMedicines(): Observable<Medicine[]> {
    return this.httpClient.get<Medicine[]>(`${this.medUrl}`);
  }

  deleteMedicine(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.deleteUrl}/${id}`);
  }

  craeteMedicine(medicine: Medicine): Observable<Medicine> {
    return this.httpClient.post<Medicine>(`${this.saveUrl}`, medicine);
  }

  getMedicineById(id: number): Observable<Medicine> {
    return this.httpClient.get<Medicine>(`${this.getMedUrl}/${id}`);
  }

  updateMedicine(id: number, medicine: Medicine): Observable<object> {
    return this.httpClient.put<Medicine>(`${this.updateUrl}/${id}`, medicine);
  }
}
