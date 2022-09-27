import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FancyGridModule } from 'fancy-grid-angular';

import * as Fancy from 'fancygrid';
import 'fancygrid/client/modules/paging.min';
import 'fancygrid/client/modules/server-data.min';
import 'fancygrid/client/modules/sort.min';
import 'fancygrid/client/modules/grouping.min';
import 'fancygrid/client/modules/filter.min';
import 'fancygrid/client/modules/dom.min';
import 'fancygrid/client/modules/menu.min';
import 'fancygrid/client/modules/form.min';
import 'fancygrid/client/modules/grid.min';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FancyGridModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
