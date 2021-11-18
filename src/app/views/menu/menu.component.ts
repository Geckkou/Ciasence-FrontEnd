import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogClientesComponent } from '../dialog-clientes/dialog-clientes.component';
import { DialogProdutosComponent } from '../dialog-produtos/dialog-produtos.component';
import { DialogProjetosComponent } from '../dialog-projetos/dialog-projetos.component';
import { DialogPtaxComponent } from '../dialog-ptax/dialog-ptax.component';
import { DialogSituacaoComponent } from '../dialog-projetos/dialog-situacao/dialog-situacao.component';
import { DialogTableClientesComponent } from '../dialog-table-clientes/dialog-table-clientes.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addClientes(): void {
    const dialogRef = this.dialog.open(DialogClientesComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog Fechado');
    });
  }

  addProdutos(): void {
    const dialogRef = this.dialog.open(DialogProdutosComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog Fechado')
    });
  }

  addProjetos(): void {
    const dialogRef = this.dialog.open(DialogProjetosComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog Fechado')
    });
  }

  alterarpTax(): void {
    const dialogRef = this.dialog.open(DialogPtaxComponent, {
      minWidth: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog Fechado')
    });
  }

  aprovarRecusarProjeto(): void {
    const dialofRef = this.dialog.open(DialogSituacaoComponent, {
      minWidth: '400px'
    });

    dialofRef.afterClosed().subscribe(result => {
      console.log('Dialog Fechado')
    });
  }

  viewClientes(): void {
    const dialogRef = this.dialog.open(DialogTableClientesComponent, {
      minWidth: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog Fechado')
    });
  }
}
