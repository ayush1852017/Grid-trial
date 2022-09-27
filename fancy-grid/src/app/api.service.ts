import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any>('http://35.209.230.219/api/excel_dev/get_data', {
      params: {
        page: 2,
        page_size: 100000,
        bucket: 'queue',
      },
    });
  }
}
