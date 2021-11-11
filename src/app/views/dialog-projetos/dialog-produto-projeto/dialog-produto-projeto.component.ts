import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-produto-projeto',
  templateUrl: './dialog-produto-projeto.component.html',
  styleUrls: ['./dialog-produto-projeto.component.css']
})
export class DialogProdutoProjetoComponent implements OnInit {

  public projetoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogProdutoProjetoComponent>
  ) { }

  ngOnInit(): void {
    this.projetoForm = this.fb.group({
      codigo: ['', [Validators.required]],
      idProjeto: ['', [Validators.required]]
    });
  }

  fechar(): void {
    this.dialogRef.close();
    this.projetoForm.reset();
  }
}
