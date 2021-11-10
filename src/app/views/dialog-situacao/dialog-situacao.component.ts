import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-situacao',
  templateUrl: './dialog-situacao.component.html',
  styleUrls: ['./dialog-situacao.component.css']
})
export class DialogSituacaoComponent implements OnInit {
  public situacaoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogSituacaoComponent>
  ) { }

  ngOnInit(): void {
    this.situacaoForm = this.fb.group( {
      idProjeto: ['', [Validators.required]]
    });
  }

  aprovar() {
    this.dialogRef.close();
    this.situacaoForm.reset();
  }

  recusar() {
    this.dialogRef.close();
    this.situacaoForm.reset();
  }


  fechar(): void {
    this.dialogRef.close();
    this.situacaoForm.reset();
  }

}
