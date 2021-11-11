import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogProdutoProjetoComponent } from '../dialog-projetos/dialog-produto-projeto/dialog-produto-projeto.component';
import { DialogEditarProjetoComponent } from '../dialog-projetos/dialog-editar-projeto/dialog-editar-projeto.component';
import { DialogProjetosComponent } from '../dialog-projetos/dialog-projetos.component';
import { DialogVerProdutosComponent } from '../dialog-projetos/dialog-ver-produtos/dialog-ver-produtos.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor (
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  AdicionarProdutoProjeto(): void {
    const dialogRef = this.dialog.open(DialogProdutoProjetoComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed');
    });

  }

  attProjetos(): void {
    const dialogRef = this.dialog.open(DialogEditarProjetoComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog Fechado')
    });
  }

  verProdutos():void {
    const dialogRef = this.dialog.open(DialogVerProdutosComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog Fechado');
    });
  }


}
