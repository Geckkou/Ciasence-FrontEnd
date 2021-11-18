import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  codigo: string;
  nomenclatura: string;
  preco: number;
  aplicacao: string;
  dosagem: number;
  inspiracao: string;
  amostra: string;
}

/** Constants used to fill up our data base. */
const CODIGO: string[] = [
  'PR123',
  'PR1234',
  'PR12345',
  'PR123456',
  'PR2345',
  'PR23456',
  'PR234567',
  'PR345',
];
const NOMENCLATURA: string[] = [
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

const APLICACAO: string[] = [
  'Aromatizante',
  'Saneantes',
  'Detergente',
  'Vela',
  'Perfumaria'
];

const AMOSTRA: string[] = [
  'DISPONIVEL',
  'INDISPONIVEL'
];

const INSPIRACAO: string[] = [
  'MALBEC',
  'KAIK',
  'FERRARRI',
  'GOLD',
  'BLACK'
];

const NUM: number[] = [
  100,
  200,
  30,
  50,
  120,
  130,
  5,
  10,
  78
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-table-produtos',
  templateUrl: './table-produtos.component.html',
  styleUrls: ['./table-produtos.component.css']
})
export class TableProdutosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'codigo', 'nomenclatura', 'preco', 'aplicacao', 'dosagem', 'inspiracao', 'amostra'];
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

function createNewUser(id: number): UserData {
  const nomenclatura =
  NOMENCLATURA[Math.round(Math.random() * (NOMENCLATURA.length - 1))] +
    ' ' +
    NOMENCLATURA[Math.round(Math.random() * (NOMENCLATURA.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    codigo: CODIGO[Math.round(Math.random() * (CODIGO.length - 1))],
    nomenclatura: nomenclatura,
    preco: NUM[Math.round(Math.random() * (NUM.length - 1))],
    aplicacao: APLICACAO[Math.round(Math.random() * (APLICACAO.length - 1))],
    dosagem: NUM[Math.round(Math.random() * (NUM.length - 1))],
    inspiracao: INSPIRACAO[Math.round(Math.random() * (INSPIRACAO.length - 1))],
    amostra: AMOSTRA[Math.round(Math.random() * (AMOSTRA.length - 1))],
  };
}
