import { Component } from '@angular/core';
import { NgFor, CurrencyPipe, NgIf } from '@angular/common';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos/produtos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrinho',
  imports: [NgFor, CurrencyPipe, FormsModule, NgIf],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {
  itensCarrinho: IProdutoCarrinho[] = [];
  total: number = 0;

  constructor(public carrinho: CarrinhoService){
    this.getCarrinho();
  }

  getCarrinho(){
    this.itensCarrinho = this.carrinho.getCarrinho();
    this.calcularTotal();
  }

  popCarrinho(id: number){
    this.itensCarrinho = this.itensCarrinho.filter(x => x.id !== id);
    this.carrinho.popCarrinho(id);
    this.calcularTotal();
  }

  calcularTotal(){
    this.total = this.itensCarrinho.map(a => a.preco*a.quantidade).reduce(function(a, b)
    {
      return a + b;
    }) || 0;
  }

  clearCarrinho(){
    this.carrinho.clearCarrinho();
    this.itensCarrinho = [];
    window.location.reload();
  }
}
