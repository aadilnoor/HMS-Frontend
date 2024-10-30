import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DoctorComponent } from './doctor/doctor.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminauthguardService } from './adminauthguard.service';
import { DoctorauthguardService } from './doctorauthguard.service';

const routes: Routes = [
  { path: 'admin', component: AdmindashComponent ,canActivate:[AdminauthguardService]},
  {
    path: 'appointmentlist',
    component: AppointmentComponent,
    pathMatch: 'full',canActivate:[AdminauthguardService]
  },
  {
    path: 'create-appointment',
    component: CreateAppointmentComponent,
    pathMatch: 'full',canActivate:[AdminauthguardService]
  },

  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'doctor',
    component: DoctorComponent,
    canActivate:[DoctorauthguardService]
  },
  {
    path: 'create-patient',
    component: CreatePatientComponent,
    canActivate:[DoctorauthguardService]
  },

  {
    path: 'view-medicine',
    component: MedicineListComponent,
    canActivate:[DoctorauthguardService],
    pathMatch: 'full',
  },
  {
    path: 'create-medicine',
    component: CreateMedicineComponent,
    canActivate:[DoctorauthguardService],
    pathMatch: 'full',
  },

  {
    path: 'update-patient/:id',
    component: UpdatePatientComponent,
    canActivate:[DoctorauthguardService]

  },
  {
    path: 'view-patient/:id',
    component: ViewPatientComponent,
    canActivate:[DoctorauthguardService]
  },
  {
    path: 'update-medicine/:id',
    component: UpdateMedicineComponent,
    canActivate:[DoctorauthguardService]

  },

  {
    path: 'doclogin',
    component: DocloginComponent,
  },
  {
    path: 'adminlogin',
    component: AdminloginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
