import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './pages/personal-info/personal-info.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ProfilePageComponent } from './principal/profile-page/profile-page.component';
import { HistoryComponent } from './pages/history/history.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProfilePageComponent,
    children: [
      { path: '', component: PersonalInfoComponent },
      {
        path: 'changePassword',
        component: ChangePasswordComponent,
      },
      {
        path: 'historial',
        component: HistoryComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    PersonalInfoComponent,
    ChangePasswordComponent,
    ProfilePageComponent,
    HistoryComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProfileModule {}
