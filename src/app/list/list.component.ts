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
    this.http.get('http://167.71.162.81:3000/employees')
    .subscribe(resp => {
      this.employeeList = resp.response;
    });
  }

}
