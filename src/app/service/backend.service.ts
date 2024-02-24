import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  API: string = 'http://localhost/agecalculator/';
  constructor(private clientHttp: HttpClient) {}

  getBackendData(data: any): Observable<any> {
    console.log(data);
    return this.clientHttp.post(this.API + '?addAge=1', data);
  }
}
