import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable()
export class ApiService {
    constructor(private http: HttpClient) { }

    get(url: string): any {
        return this.http.get(environment.apiURL + url);
    }

    getFile(url: string): any {
        return this.http.get(environment.apiURL + url, { responseType: 'blob' });
    }

    post(url: string, data): any {
        return this.http.post(environment.apiURL + url, data);
    }
    put(url: string, data): any {
        return this.http.put(environment.apiURL + url, data);
    }

    postData(url: string, formData: FormData): any {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'enctype': 'multipart/form-data'
            })
        };

        return this.http.post(environment.apiURL + url, formData, httpOptions);
    }

    delete(url: string): any {
        return this.http.delete(environment.apiURL + url);
    }

    private handleError(error: any) {
        return error.statusText;
    }

    private handleResponse(data: Object) {
        console.log('API Service: ' + data);
        return data;
    }
}