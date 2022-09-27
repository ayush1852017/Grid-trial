import { Component, ElementRef, ViewChild } from '@angular/core';
import * as DataGridXL from '@datagridxl/datagridxl2';
import '@datagridxl/datagridxl2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('grid') grid!: ElementRef;
  gridInstance: any;
  ngAfterViewInit() {
    // Create spreadsheet
    this.gridInstance = new DataGridXL(this.grid.nativeElement);
  }

  download() {
    this.gridInstance.downloadDataAsCSV();
  }
}
