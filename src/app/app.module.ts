import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MenuComponent } from './views/menu/menu.component';
import { TablesComponent } from './tables/tables.component';
import { FormularioProjetoComponent } from './formulario/formulario-projeto/formulario-projeto.component';
import { FormularioClienteComponent } from './formulario/formulario-cliente/formulario-cliente.component';
import { FormularioProjetoProdutoComponent } from './formulario/formulario-projeto-produto/formulario-projeto-produto.component';
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

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    MenuComponent,
    TablesComponent,
    FormularioProjetoComponent,
    FormularioClienteComponent,
    FormularioProjetoProdutoComponent,
    PaginationComponent,
    HomeComponent,
    DialogClientesComponent,
    DialogProdutosComponent,
    DialogProjetosComponent
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
