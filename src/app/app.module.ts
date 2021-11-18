import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './views/menu/menu.component';
import { PaginationComponent } from './pagination/pagination.component';
import { HomeComponent } from './views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { DialogClientesComponent } from './views/dialog-clientes/dialog-clientes.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogProdutosComponent } from './views/dialog-produtos/dialog-produtos.component';
import { DialogProjetosComponent } from './views/dialog-projetos/dialog-projetos.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { DialogProdutoProjetoComponent } from './views/dialog-projetos/dialog-produto-projeto/dialog-produto-projeto.component';
import { DialogPtaxComponent } from './views/dialog-ptax/dialog-ptax.component';
import {MatTableModule} from '@angular/material/table';
import { TableClientesComponent } from './views/tables/table-clientes/table-clientes.component';
import { TableProdutosComponent } from './views/tables/table-produtos/table-produtos.component';
import {MatCommonModule} from '@angular/material/core';
import { DialogSituacaoComponent } from './views/dialog-projetos/dialog-situacao/dialog-situacao.component';
import { DialogEditarProjetoComponent } from './views/dialog-projetos/dialog-editar-projeto/dialog-editar-projeto.component';
import { DialogVerProdutosComponent } from './views/dialog-projetos/dialog-ver-produtos/dialog-ver-produtos.component';
import {MatListModule} from '@angular/material/list';
import { DialogTableClientesComponent } from './views/dialog-table-clientes/dialog-table-clientes.component';
import { DialogTableProdutosComponent } from './views/dialog-table-produtos/dialog-table-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PaginationComponent,
    HomeComponent,
    DialogClientesComponent,
    DialogProdutosComponent,
    DialogProjetosComponent,
    DialogProdutoProjetoComponent,
    DialogPtaxComponent,
    TableClientesComponent,
    TableProdutosComponent,
    DialogSituacaoComponent,
    DialogEditarProjetoComponent,
    DialogVerProdutosComponent,
    DialogTableClientesComponent,
    DialogTableProdutosComponent,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatTableModule,
    MatCommonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
