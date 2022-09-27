import { Component } from '@angular/core';
import * as Fancy from 'fancygrid';
import { ApiService } from './api.service';
import * as Clusterize from 'clusterize.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService],
})
export class AppComponent {
  title = 'app';
  data: any = [];
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getdata();
  }

  getdata() {
    this.api.getData().subscribe({
      next: (res) => {
        this.data = res.result;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
