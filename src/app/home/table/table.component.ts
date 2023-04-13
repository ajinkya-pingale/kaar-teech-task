import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  meetingList = [
    {name: 'Ajinkya', age:'20', gender:'Male'},
    {name: 'Ajinkya', age:'20', gender:'Male'},
    {name: 'Ajinkya', age:'20', gender:'Male'},
    {name: 'Ajinkya', age:'20', gender:'Male'},
    {name: 'Ajinkya', age:'20', gender:'Male'},
    {name: 'Ajinkya', age:'20', gender:'Male'},
    {name: 'Ajinkya', age:'20', gender:'Male'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
