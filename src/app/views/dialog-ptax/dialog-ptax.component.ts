import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-ptax',
  templateUrl: './dialog-ptax.component.html',
  styleUrls: ['./dialog-ptax.component.css']
})
export class DialogPtaxComponent implements OnInit {

  public ptaxForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogPtaxComponent>
  ) { }

  ngOnInit(): void {
    this.ptaxForm = this.fb.group({
      codigo:['', [Validators.required]],
      taxa: ['', [Validators.required]],
      frete: ['', [Validators.required]]
    });
  }

  ptax() {
    this.dialogRef.close();
    this.ptaxForm.reset();
  }

  fechar():void {
    this.dialogRef.close();
    this.ptaxForm.reset();
  }

}
