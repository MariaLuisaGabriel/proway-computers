import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos.component';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes =[
  {
    path: '', component:ProdutosComponent//pagina default do módulo
  },
  {
    path: ':id', component:ProdutoComponent//página direcionável do módulo
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    //quando referenciado, o módulo navega por um dos paths que ele tem
    MatSnackBarModule
  ],
  exports: [
    RouterModule
    //navegar =  exportar routermodule
  ]
})
export class ProdutosRoutingModule { }
