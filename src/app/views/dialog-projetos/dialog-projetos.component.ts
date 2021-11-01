import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-projetos',
  templateUrl: './dialog-projetos.component.html',
  styleUrls: ['./dialog-projetos.component.css']
})
export class DialogProjetosComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogProjetosComponent>
  ) { }

  ngOnInit(): void {
  }

  close():void {
    this.dialogRef.close();
  }

}
