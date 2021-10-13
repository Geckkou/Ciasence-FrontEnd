import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MenuComponent } from './menu/menu.component';
import { TablesComponent } from './tables/tables.component';
import { FormularioProjetoComponent } from './formulario/formulario-projeto/formulario-projeto.component';
import { FormularioClienteComponent } from './formulario/formulario-cliente/formulario-cliente.component';
import { FormularioProjetoProdutoComponent } from './formulario/formulario-projeto-produto/formulario-projeto-produto.component';
import { PaginationComponent } from './pagination/pagination.component';
import { HomeComponent } from './home/home.component';

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
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }