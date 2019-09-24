import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

public employeeList = [{a: 1},{b: 2}];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('214.14.14.13:3000/employees')
    .subscribe(resp => {
      this.employeeList = resp.response;
    });
  }

}
