import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css'],
})
export class MedicineListComponent implements OnInit {
  medicines: Medicine[] = [];
  constructor(private medicineService: MedicineService,private router:Router) {}

  getMedicines() {
    this.medicineService.getMedicines().subscribe((data) => {
      this.medicines = data;
    });
  }

  ngOnInit(): any {
    this.getMedicines();
  }
  delete(id: number) {
    this.medicineService.deleteMedicine(id).subscribe({
      next: () => {
        console.log('id deleting');
        // Update the appointments array after deletion
        this.medicines = this.medicines.filter(
          (medicine) => medicine.id !== id
        );

        // // Show a success message
        // alert('Appointment deleted successfully!');
      },
      error: (err) => {
        // Log and show error message
        console.error('Error deleting medicine', err);
        // alert('Failed to delete the appointment.');
      },
    });
  }

  update(id:number){

    this.router.navigate(['update-medicine',id])
  }
}
