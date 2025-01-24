import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: CarrinhoComponent 
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class CarrinhoModule { }
