import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-ver-produtos',
  templateUrl: './dialog-ver-produtos.component.html',
  styleUrls: ['./dialog-ver-produtos.component.css']
})
export class DialogVerProdutosComponent implements OnInit {

  produtos: any[] = [
    {
      nome: 'Anjo Azul',
      idproduto: '1',
      codigo: 'pr123',
      preco: '120,00',
      aplicacao: 'Aromatizante',
      dosagem: '5',
      inspiracao: 'nenhuma'
    },
    {
      nome: 'Campestre',
      idproduto: '2',
      codigo: 'pr1234',
      preco: '90,00',
      aplicacao: 'Aromatizante',
      dosagem: '5',
      inspiracao: 'nenhuma'
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<DialogVerProdutosComponent>
  ) { }

  ngOnInit(): void {
  }

  fechar(): void {
    this.dialogRef.close();
  }

}
