import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-clientes',
  templateUrl: './dialog-clientes.component.html',
  styleUrls: ['./dialog-clientes.component.css']
})
export class DialogClientesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogClientesComponent>
  ) { }

  ngOnInit(): void {
  }

  close():void {
    this.dialogRef.close();
  }

}
