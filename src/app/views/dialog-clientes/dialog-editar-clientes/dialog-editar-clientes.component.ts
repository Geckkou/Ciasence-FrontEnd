import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-editar-clientes',
  templateUrl: './dialog-editar-clientes.component.html',
  styleUrls: ['./dialog-editar-clientes.component.css']
})
export class DialogEditarClientesComponent implements OnInit {

  public clientesForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogEditarClientesComponent>
  ) { }

  ngOnInit(): void {
    this.clientesForm = this.fb.group({
      razaoSocial: ['', [Validators.required]],
      fantasia: ['', [Validators.required]]
    });
  }

  editarCliente() {
    this.dialogRef.close();
    this.clientesForm.reset();
  }

  close():void {
    this.dialogRef.close();
    this.clientesForm.reset();
  }

}
