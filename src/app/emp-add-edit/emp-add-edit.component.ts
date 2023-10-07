import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { EmployeeService } from '../services/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss'],
})
export class EmpAddEditComponent implements OnInit {
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'experience',
    'package',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _empService: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }


  ngOnInit(): void {
    console.log(Array(this.data))
    this.dataSource = new MatTableDataSource(Array(this.data));
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // this._empService.getEmployeeList().subscribe({
    //   next: (res) => {
    //     console.log(res)
    //     this.dataSource = new MatTableDataSource(res);
    //     this.dataSource.sort = this.sort;
    //     this.dataSource.paginator = this.paginator;
    //   },
    //   error: console.log,
    // });
  }
}
