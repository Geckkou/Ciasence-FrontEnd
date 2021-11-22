import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-editar-produtos',
  templateUrl: './dialog-editar-produtos.component.html',
  styleUrls: ['./dialog-editar-produtos.component.css']
})
export class DialogEditarProdutosComponent implements OnInit {

  public produtoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogEditarProdutosComponent>
  ) { }

  ngOnInit(): void {
    this.produtoForm = this.fb.group({
      codigo: ['', [Validators.required]],
      nomenclatura: ['', [Validators.required]],
      preco: ['', [Validators.required]],
      aplicacao: ['', [Validators.required]],
      dosagem: ['', [Validators.required]],
      inspiracao: ['', [Validators.required]],
      amostra: ['', [Validators.required]]
    });
  }

  editarProduto() {
    this.dialogRef.close();
    this.produtoForm.reset();
  }

  close() {
    this.dialogRef.close();
    this.produtoForm.reset();
  }

}
