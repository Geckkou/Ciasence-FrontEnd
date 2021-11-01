import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogClientesComponent } from '../dialog-clientes/dialog-clientes.component';

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
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog Fechado');
    });
  }

}
