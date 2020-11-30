import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserAddComponent } from './component/user/user-add/user-add.component';
import { UserDetailsComponent } from './component/user/user-details/user-details.component';
import { UserEditComponent } from './component/user/user-edit/user-edit.component';
import { UserListComponent } from './component/user/user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user/list', component: UserListComponent },
  { path: 'user/add', component: UserAddComponent },
  { path: 'user/edit/:id', component: UserEditComponent },
  { path: 'user/details/:id', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
