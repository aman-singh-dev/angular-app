import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ApiService } from './api.service';
import { User } from '../model/user';

@Injectable()
export class UserService {

  constructor(private _apiService: ApiService) { }

  authenticateUser(email: string, password: string): Observable<User> {
    var authParams = {
      "email": email,
      "password": password
    };

    return this._apiService.post('/authenticate/user', JSON.stringify(authParams));
  }

  getUsers() {
    return this._apiService.get('/api/user');
  }

  getUser(id: string) {
    return this._apiService.get('/api/user/' + id);
  }

  saveUser(user: User) {
    return this._apiService.post('/api/user', user);
  }
  updateUser(id: string, user: User) {
    return this._apiService.put('/api/user/' + id, user);
  }

  deleteUser(id: string) {
    return this._apiService.delete('/api/user/' + id);
  }

  getUnassignedPartnersByCatgeory(id: string, categoryUUID: string) {
    return this._apiService.get('/user/unassigned-partners/' + id + '/' + categoryUUID);
  }

  assignPartner(id: string, userPartnerString: string) {
    return this._apiService.post('/user/assign-partner/' + id, userPartnerString);
  }

  getPartnerManagers() {
    return this._apiService.get('/user/partner-manager');
  }
  unassignPartner(id: string, partnerUUID: string) {
    return this._apiService.delete('/user/unassign-partner/' + id + '/' + partnerUUID);
  }
  validateEmail(data) {
    return this._apiService.post('/user/validate-email', data);

  }
  validateMobile(data) {
    return this._apiService.post('/user/validate-mobile', data);

  }
  getAdmins() {
    return this._apiService.get('/user/admin');
  }
  requestPassword(email: string) {
    return this._apiService.post('/password/forgot', email);
  }

  changePassword(data) {
    return this._apiService.post('/password/change-password', data);
  }
}