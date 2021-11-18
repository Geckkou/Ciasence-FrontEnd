import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-table-clientes',
  templateUrl: './dialog-table-clientes.component.html',
  styleUrls: ['./dialog-table-clientes.component.css']
})
export class DialogTableClientesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogTableClientesComponent>
  ) { }

  ngOnInit(): void {
  }

  fechar(): void {
    this.dialogRef.close();
  }

}
