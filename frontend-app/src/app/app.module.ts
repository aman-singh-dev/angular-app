import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './component/auth/register/register.component';
import { HeaderComponent } from './container/header/header.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SideBarComponent } from './container/header/side-bar/side-bar.component';
import { UserListComponent } from './component/user/user-list/user-list.component';
import { UserAddComponent } from './component/user/user-add/user-add.component';
import { UserEditComponent } from './component/user/user-edit/user-edit.component';
import { UserDetailsComponent } from './component/user/user-details/user-details.component';
import { ApiService } from './service/api.service';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RoleService } from './service/role.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    DashboardComponent,
    SideBarComponent,
    UserListComponent,
    UserAddComponent,
    UserEditComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule
  ],
  providers: [
    ApiService,
    UserService,
    RoleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
