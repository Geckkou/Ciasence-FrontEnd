import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface UserData {
  id: string;
  razaoSocial: string;
  fantasia: string;
}

/** Constants used to fill up our data base. */
const FANTASIA: string[] = [
  'paris',
  'essenciais',
  'fragrancias',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const RAZAOSOCIAL: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-table-clientes',
  templateUrl: './table-clientes.component.html',
  styleUrls: ['./table-clientes.component.css']
})
export class TableClientesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'razaoSocial', 'fantasia'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const razaoSocial =
  RAZAOSOCIAL[Math.round(Math.random() * (RAZAOSOCIAL.length - 1))] +
    ' ' +
    RAZAOSOCIAL[Math.round(Math.random() * (RAZAOSOCIAL.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    razaoSocial: razaoSocial,
    fantasia: FANTASIA[Math.round(Math.random() * (FANTASIA.length - 1))],
  };
}
