import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogProdutoProjetoComponent } from '../dialog-produto-projeto/dialog-produto-projeto.component';

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


}
