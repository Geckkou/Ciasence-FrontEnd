import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProjetoService } from 'src/app/shared/service/projeto.service';

@Component({
  selector: 'app-dialog-projetos',
  templateUrl: './dialog-projetos.component.html',
  styleUrls: ['./dialog-projetos.component.css']
})
export class DialogProjetosComponent implements OnInit {

  public projetoForm!: FormGroup;

  constructor(
    private rest: ProjetoService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogProjetosComponent>
  ) { }

  ngOnInit(): void {
    this.projetoForm = this.fb.group({
      cliente: ['', [Validators.required]],
      observacoes: ['', [Validators.required]]
    });
  }

  createProjeto() {
    this.rest.postProjetos(this.projetoForm.value).subscribe(result => {});
    this.dialogRef.close();
    this.projetoForm.reset();
  }

  close():void {
    this.dialogRef.close();
    this.projetoForm.reset();
  }

}
