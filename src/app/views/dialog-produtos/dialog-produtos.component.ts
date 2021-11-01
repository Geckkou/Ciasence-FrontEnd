import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-produtos',
  templateUrl: './dialog-produtos.component.html',
  styleUrls: ['./dialog-produtos.component.css']
})
export class DialogProdutosComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogProdutosComponent>
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}
