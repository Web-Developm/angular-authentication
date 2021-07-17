import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1, name: 'Hydrozen', weight: 1.0079, symbol: 'H'
  },

  {
    position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'
  },

  {
    position: 3, name: 'Lithium', weight: 9.0122, symbol: 'Li'
  },

  {
    position: 4, name: 'Beryllium', weight: 10.811, symbol: 'B'
  },

  {
    position: 5, name: 'Boron', weight: 12.0107, symbol: 'B'
  }
]

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}
