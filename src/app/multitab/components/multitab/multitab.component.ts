import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ups-multitab',
  templateUrl: './multitab.component.html',
  styleUrls: ['./multitab.component.scss']
})
export class MultitabComponent implements OnInit {

  columnDefsFirst = [
    { headerName: 'Account', field: 'account' },
    { headerName: 'Registration Date', field: 'regDate' },
    { headerName: 'Status', field: 'status' }
  ];

  columnDefsSecond = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'H/CH', field: 'hch' },
    { headerName: 'A/C HN', field: 'achn' }
  ];

  columnDefsThird = [
    { headerName: 'Age', field: 'age' },
    { headerName: 'Date of birth', field: 'dateOfBirth' },
    { headerName: 'Height', field: 'height' },
    { headerName: 'Color', field: 'color' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
