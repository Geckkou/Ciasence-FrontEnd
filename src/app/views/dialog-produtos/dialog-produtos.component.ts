import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProdutoService } from 'src/app/shared/service/produto.service';

@Component({
  selector: 'app-dialog-produtos',
  templateUrl: './dialog-produtos.component.html',
  styleUrls: ['./dialog-produtos.component.css']
})
export class DialogProdutosComponent implements OnInit {

  public produtoForm!: FormGroup;

  constructor(
    private rest: ProdutoService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogProdutosComponent>
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

  createProduto() {
    this.rest.postProdutos(this.produtoForm.value).subscribe(result => {});
    this.dialogRef.close();
    this.produtoForm.reset();
  }

  close(): void {
    this.dialogRef.close();
    this.produtoForm.reset();
  }

}
