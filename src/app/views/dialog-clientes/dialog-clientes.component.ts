import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-clientes',
  templateUrl: './dialog-clientes.component.html',
  styleUrls: ['./dialog-clientes.component.css']
})
export class DialogClientesComponent implements OnInit {

  public clientesForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogClientesComponent>
  ) { }

  ngOnInit(): void {
    this.clientesForm = this.fb.group({
      razaoSocial: ['', [Validators.required]],
      fantasia: ['', [Validators.required]]
    });
  }

  close():void {
    this.dialogRef.close();
  }

}
