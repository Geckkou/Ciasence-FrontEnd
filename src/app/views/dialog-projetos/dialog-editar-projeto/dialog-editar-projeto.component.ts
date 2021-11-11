import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-editar-projeto',
  templateUrl: './dialog-editar-projeto.component.html',
  styleUrls: ['./dialog-editar-projeto.component.css']
})
export class DialogEditarProjetoComponent implements OnInit {

  public editarForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogEditarProjetoComponent>
  ) { }

  ngOnInit(): void {
    this.editarForm = this.fb.group({
      cliente: ['', [Validators.required]],
      observacoes: ['', [Validators.required]]
    });
  }

  atualizarProjeto() {

    this.dialogRef.close();
    this.editarForm.reset();
  }

  close():void {
    this.dialogRef.close();
    this.editarForm.reset();
  }

}
