import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-table-produtos',
  templateUrl: './dialog-table-produtos.component.html',
  styleUrls: ['./dialog-table-produtos.component.css']
})
export class DialogTableProdutosComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogTableProdutosComponent>
  ) { }

  ngOnInit(): void {
  }

  fechar(): void {
    this.dialogRef.close();
  }

}
