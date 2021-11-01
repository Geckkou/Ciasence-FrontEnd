import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClienteService } from 'src/app/shared/service/cliente.service';

@Component({
  selector: 'app-dialog-clientes',
  templateUrl: './dialog-clientes.component.html',
  styleUrls: ['./dialog-clientes.component.css']
})
export class DialogClientesComponent implements OnInit {

  public clientesForm!: FormGroup;

  constructor(
    private rest: ClienteService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogClientesComponent>
  ) { }

  ngOnInit(): void {
    this.clientesForm = this.fb.group({
      razaoSocial: ['', [Validators.required]],
      fantasia: ['', [Validators.required]]
    });
  }

  cadastrarCliente() {
    this.rest.postClientes(this.clientesForm.value).subscribe(result => {});
    this.dialogRef.close();
    this.clientesForm.reset();
  }

  close():void {
    this.dialogRef.close();
    this.clientesForm.reset();
  }

}
