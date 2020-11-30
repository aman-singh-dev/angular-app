
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';


@Injectable()
export class RoleService {

    constructor(private _apiService: ApiService) { }

    getRoles() {
        return this._apiService.get('/api/role');
    }
}