import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // add

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

import { TableService } from './table/table.service';

@NgModule({
  declarations: [AppComponent, TableComponent],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    HttpClientModule // add
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule {}
