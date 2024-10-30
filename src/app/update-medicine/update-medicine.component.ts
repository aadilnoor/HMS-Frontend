import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css'],
})
export class UpdateMedicineComponent implements OnInit {
  [x: string]: any;
  id: number = 0;
  medicine: Medicine = new Medicine();
  constructor(
    private route: ActivatedRoute,
    private medicineService: MedicineService,
    private router: Router
  ) {}

  onSubmit() {
    this.medicineService
      .updateMedicine(this.id, this.medicine)
      .subscribe((data) => {
        console.log(data);
        this.goToMedicineList();
      });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.medicineService.getMedicineById(this.id).subscribe((data) => {
      this.medicine = data;
    });
  }

  goToMedicineList() {
    this.router.navigate(['view-medicine']);
  }
}
