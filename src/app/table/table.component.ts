import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { Table } from './Table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})
export class TableComponent implements OnInit {
  employees: Table[];

  settings = {
    selectMode: 'multi',
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name'
      },
      city: {
        title: 'City'
      },
      employeeId: {
        title: 'Employee No.'
      }
    }
  };

  constructor(private tservice: TableService) {}

  ngOnInit() {
    this.tservice.getData().subscribe((data: Table[]) => {
      this.employees = data;
    });
  }
}
