import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  meetingList = [
    {name: 'Ajinkya', age:'20', gender:'Male'},
    {name: 'Soham', age:'23', gender:'Male'},
    {name: 'Kunal', age:'19', gender:'Male'},
    {name: 'Shiwani', age:'23', gender:'Female'},
    {name: 'Akshay', age:'26', gender:'Male'},
    {name: 'Roshani', age:'20', gender:'Female'},
    {name: 'Rajesh', age:'20', gender:'Male'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
